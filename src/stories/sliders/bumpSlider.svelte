<script lang='ts'>
  import { interpolateRgb, interpolate } from 'd3-interpolate'

  const sliderMinX = 0
  const sliderMaxX = 240
  let initialMouseX = 0
  let initialSliderX = 0
  let dragging = false
  let xpos = 0
  let tempBand = 'cold'
  let gradient = {
    cold: {start: '#5564C2', end: '#3A2E8D'},
    hot: {start:'#F0AE4B', end: '#9B4D1B'}
  }
  let temperatureGrades = [10, 15, 20, 25, 30]
  const startDrag = (e: MouseEvent) => {
    dragging = true
    initialMouseX = e.pageX
    initialSliderX = xpos
  }
  const stopDrag = () => {
    dragging = false
  }
  const thermometerHeight = interpolate(1.3, 15)
  const gradStart = interpolateRgb(gradient.cold.start, gradient.hot.start)
  const gradEnd = interpolateRgb(gradient.cold.end, gradient.hot.end)
  const mouseMoving = (e: MouseEvent) => {
    if(dragging) {
        const targetX = Math.min(
            initialSliderX + e.clientX - initialMouseX, 
            sliderMaxX
          )
        // keep slider inside limits
        xpos = Math.max(targetX, sliderMinX)
      }
  }

  $: currentTemperature = (xpos / sliderMaxX * 20 ) + 10
</script>

<main class:grabbing={dragging} on:mousemove={mouseMoving} on:mouseup={stopDrag}>
  <section style={`--start: ${gradStart((currentTemperature - 10)/25)}; --end: ${gradEnd((currentTemperature - 10)/25)});`}>    
    <h2 class="temperature-text">{Math.round(currentTemperature)}</h2>
    <div class="temperature-graduation">
      {#each temperatureGrades as el}
      <div class="temperature-element" style={`transform: translate3d(0, ${Math.min(12, 14*Math.abs(currentTemperature - el)/4 - 4)}px, 0)`}>
        <span class="temperature-element-number">{el}</span><br>
        <span class="temperature-element-line">|</span>
      </div>
      {/each}
    </div>
  </section>
  <section>
    <div class="slider-container" style={`transform: translate3d(${xpos}px,0,0)`}>
      <svg>
        <path d="M74.3132 0C47.0043 2.44032e-05 50.175 30 7.9179 30H144.27C99.4571 30 101.622 -2.44032e-05 74.3132 0Z" transform="translate(-7.38794 0.5)" fill="#12132C"/>
      </svg>
      <div class="slider-button" class:grabbing={dragging} on:mousedown={startDrag}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
            <path d={`M136,153V88a${thermometerHeight(( 1 - currentTemperature/30))},8,0,0,0-16,0v65a32,32,0,1,0,16,0Zm-8,47Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,104,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,128,232Z`} />
          </svg>
      </div>
    </div>
  </section>
</main>

<style>
@property --start {
  syntax: '<color>';
  initial-value: #5564C2;
  inherits: false;
}
@property --end {
  syntax: '<color>';
  initial-value: #3A2E8D;
  inherits: false;
}
main {
  font-family: 'Roboto', sans-serif;
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 1fr;
  height: 100vh;
  overflow-x: hidden;
}
section:first-of-type {
  position: relative;
  background: linear-gradient(to bottom right, var(--start), var(--end));
}
section:last-of-type {
  background-color: #12132C;
}
.temperature-text {
  position: absolute;
  bottom: 150px;
  user-select: none;
  font-size: 100px;
  width: 100%;
  text-align: center;
}
.temperature-graduation {
  left: calc(50% - 150px);
  position: absolute;
  bottom: 25px;
  user-select: none;
}
.temperature-element {
  text-align: center;
  display: inline-block;
  width: 40px;
  margin: 0 10px 0 10px;
  opacity: 0.7;
}

.temperature-element-line {
  font-size: 7px;
}
.slider-container {
  width: 150px;
  height: 80px;
  margin-top: -30px;
  margin-left: calc(50% - 187px);
  position: relative;
}
.slider-button {
  position: absolute;
  left: 42px;
  top: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #2724A2;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: white;
  cursor: grab;
}
.grabbing {
  cursor: grabbing;
}

</style>