<script lang='ts'>

</script>

<div class="container">
  <button>
      Submit
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
button {
  border: 0;
  box-shadow: 0px -6px 10px white, 0px 4px 15px rgba(0, 0, 0, 0.15);
}
button:focus {
  border: none;
  outline: 0 !important;
  outline-style: none;
}
button, button:active {
  position: relative;
  padding: 1rem 2rem;
  border-radius: 5rem;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  color: #626262;
  background: #f2f2f2;
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}
button:active {
  translate: 0 0.5px;
  transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0px -6px 10px rgba(255, 255, 255, 0.02), 0 15px 20px rgba(0, 0, 0, 0.02);
}

</style>