<script lang='ts'>
  export let value = 50
  export let color = 'dodgerblue'
  export let leftImg = 'https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149050/baffinbay_etm_2000247.jpg'
  export let rightImg = 'https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149050/baffinbay_oli_2021264.jpg'
  $: style = `--value: ${value}%; --thumb-bgc: ${color};`
</script>

<div class="compare" {style} >
  <img class="left" src={leftImg} alt="Before" />
  <img class="right" src={rightImg} alt="After" />
  <input 
  type="range" 
  min="0" 
  max="100" 
  bind:value={value} 
  />
</div>

<style>
  .compare {
  --h: 9;
  --m: 1rem 0;
  --w: 16;
  --thumb-bgc-focus: hsla(240, 60%, 60%, 0.7);
  --thumb-w: 1rem;

  margin: var(--m);
  position: relative;
}
.compare::after {
  content: "";
  display: block;
  padding-bottom: calc((var(--h) / var(--w)) * 100%);
}
.left,
.right {
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
}
.left {
  clip-path: polygon(0% 0%, var(--value) 0%, var(--value) 100%, 0% 100%);
}
.right {
  clip-path: polygon(100% 0%, var(--value) 0%, var(--value) 100%, 100% 100%);
}
[type=range] {
  background-color: transparent;
  box-sizing: border-box;
  font-family: inherit;
  height: 100%;
  margin: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 100%;
}
[type=range]::-moz-range-thumb {
  background-color: var(--thumb-bgc);
  cursor: ew-resize;
  height: 100%;  
  width: var(--thumb-w);
}
[type=range]::-webkit-slider-thumb {
  background-color: var(--thumb-bgc);
  cursor: ew-resize;
  height: 100%;  
  width: var(--thumb-w);
}
[type=range]:focus::-webkit-slider-thumb {
  background-color: var(--thumb-bgc-focus);
  box-shadow: 0 0 0 3px var(--thumb-bgc);
}
[type=range]:focus::-moz-range-thumb {
  background-color: var(--thumb-bgc-focus);
  box-shadow: 0 0 0 3px var(--thumb-bgc);
}
[type=range]::-moz-range-track {
  background: transparent;
  background-size: 100%;
  box-sizing: border-box;
}
[type=range]::-webkit-slider-runnable-track {
  background: transparent;
  background-size: 100%;
  box-sizing: border-box;
  height: 100%;
}
[type=range],
[type=range]::-webkit-slider-runnable-track,
[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}
</style>