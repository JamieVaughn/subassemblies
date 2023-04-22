<script lang='ts'>
let done = false
let loading = false
const handleClick = () => {
    if(done) return
    loading = true
    setTimeout(() => (loading = false, done = true), 2200)
}
</script>

<button class:done={done} class:loading={loading} on:click={handleClick}>
  <span>Submit</span>
  <span>
    <svg id="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="24" width="24" >
      <polyline points="40 144 96 200 224 72" fill="none" stroke="#1ecd97" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
    </svg>
  </span>
</button>

<style>
:root {
  --green: #1ecd97;
}

@keyframes loading {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(720deg);
  }
}
button {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding: 0;
  width: 200px;
  height: 50px;
  border: 2px solid var(--green);
  border-radius: 25px;
  background-color: #fff;
  outline: 0;
  cursor: pointer;
  overflow: hidden;
  transition: all 200ms ease-in-out;
}
button:hover {
  background-color: var(--green);
}
button:hover span:first-child, button:hover span:last-child {
  color: #fff;
}
button span:first-child, button span:last-child {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--green);
  font-weight: 600;
  transition: transform 200ms ease-in-out;
}
button.loading {
  width: 50px;
  background-color: #fff;
  border-width: 4px;
  border-color: #bbb;
  border-top-color: var(--green);
  border-left-color: var(--green);
  animation-name: loading;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-delay: 200ms;
  pointer-events: none;
  animation-iteration-count: infinite;
}
button.loading:hover {
  background-color: #fff;
}
button.loading span:first-child {
  transform: translate3d(0, -100%, 0);
}
button.done {
  cursor: default;
  pointer-events: none;
  width: 50px;
  border-width: 4px;
}
button.done:hover {
  background-color: #fff;
}
button.done:hover span:first-child, button.done:hover span:last-child {
  color: var(--green);
}
button.done span:first-child, button.done span:last-child {
  transform: translate3d(0, -100%, 0);
}

</style>