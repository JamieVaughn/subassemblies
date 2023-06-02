<script lang='ts'>
  export let text = 'Submit'
</script>

<div class="container">
  <button>
      {text}
  </button>
</div>

<style>
.container {
  width: 550px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f2f2f2;
}

button:focus {
  border: none;
  outline: none;
  outline-style: none;
}
button {
  position: relative;
  padding: 1rem 2rem;
  border-radius: 5rem;
  font-size: 1.5rem;
  color: #626262;
  background: #f2f2f2;
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}
button {
  border: 0;
  box-shadow: 0px -6px 10px white, 0px 4px 15px rgba(0, 0, 0, 0.15);
}
button:active {
  translate: 0 0.5px;
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0px -2px 5px white, inset 0px 2px 5px rgba(0, 0, 0, 0.15);
}
</style>