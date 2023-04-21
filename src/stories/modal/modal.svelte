<script lang='ts'>
  export let title: string = "Title"
  export let message: string = "Message"
  export let cta: string = "Submit"
	export let closeCallback = (e: CloseEvent) => {
    console.log(e)
  };
  export let cancelCallback = (e: CloseEvent) => {
    console.log(e)
  };

  let dialog: HTMLDialogElement | null = null;

  function openDialog() {
    dialog?.showModal();
  }
  function closeDialog() {
    dialog?.close();
  }
</script>

<dialog bind:this={dialog} on:close={closeCallback} on:cancel={cancelCallback}>
  <button class="closeBtn" on:click={closeDialog}>╳</button>
  <h1>{title}</h1>
  <p>{message}</p>
  <footer>
    <button on:click={closeDialog} value="cancel" formmethod="dialog">Cancel</button>
    <button on:click={closeDialog} value="default">{cta}</button>
  </footer>
</dialog>
<button on:click={openDialog}>Show the dialog</button>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.75);
    transition: background 0.5s;
  }
  dialog {
    overflow: visible;
    width: auto;
    height: fit-content;
    margin: 1.5rem;
    background: #f0f0f0;
    color: black;
    border: none;
    border-radius: 15px;
    padding: 3rem;
    font-size: 18px;
    font-weight: 200;
    position: relative;
    line-height: 2rem;
  }
  .closeBtn {
	font-size: 24px;
	line-height: 24px;
	color: white;
	border-radius: 35px;
  border: none;
	background: #1d2559;
	position: absolute;
	right: -1rem;
	top: -0.95rem;
	padding: 1rem;
	cursor: pointer;
}
footer {
  display: flex;
  justify-content: flex-end;
}
</style>