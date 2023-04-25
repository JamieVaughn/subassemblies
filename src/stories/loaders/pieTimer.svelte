<script lang='ts'>
  export let color = 'deeppink'
  export let debug = false
</script>

<div class="pie" class:debug={debug} style={`--color: ${color}`} />

<style>
  /* Start by laying both pseudo-elements on the left side of the container on top of each other, so that the one on top has the color of the background (e.g. white), and the colorful one lies hidden underneath.
   Then, rotate the lower element so it begins appearing.
   Once it has travelled 180 degrees, abruptly move the mask element on the other side to take its place and change its color to the fill color. For a brief instant, both element have the same color and same position.
   For the 2nd half of the animation, the rotating element will keep moving, thus filling the other half of the circle.
   Rinse and repeat. */
   .pie {
      width: 1em;
      height: 1em;
      font-size: 500%;
      position: relative;
      border-radius: 50%;
      border: 0.05em solid var(--color); 
      margin: 0.5em;
      display: inline-block;
    }


.pie::before,
.pie::after {
  content: "";
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 0.5em 0 0 0.5em;
  transform-origin: center right;
  animation-iteration-count: infinite;
  animation-duration: 3s;
}

.pie::before {
  z-index: 1;
  background-color: white;
  animation-name: mask;
  animation-timing-function: steps(1);
}

.pie::after {
  background-color: var(--color);
  animation-name: rotate;
  animation-timing-function: linear;
}

@keyframes rotate {
  to { transform: rotate(1turn); }
}

@keyframes mask {
  50%, 100% {
    background-color: var(--color);
    transform: rotate(0.5turn);
  }
}

.pie.debug::before,
.pie.debug::after {
  border: 0.05em solid rgb(0 0 0 / 0.6);
  box-sizing: border-box;
}
</style>