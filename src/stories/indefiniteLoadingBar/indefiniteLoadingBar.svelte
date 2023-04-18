<script lang='ts'>
  export let color1 = '#b6b5ff'
  export let color2 = '#ff9797'
  export let width = 200
</script>

<div class="loading-box" style={`width: ${width || 40}px; --color1: ${color1}; --color2: ${color2}`} >
  <div class="loader"></div>
</div>

<style>
.loading-box {
  --color1: #b6b5ff;
  --color2: #ff9797;
  position: relative;
  aspect-ratio: 6 / 1;
  border-radius: 9999px;
  border: 2px solid #ededed;
  overflow: hidden;
}
.loader {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 9999px;
  background: linear-gradient(45deg, var(--color1), var(--color2));
  left: -100%;
  animation: load 3s linear infinite;
}
@keyframes load{
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
}
</style>