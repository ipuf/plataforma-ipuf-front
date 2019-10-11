<script> 
  export let selected
</script>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0,0,0,0.3);
		z-index: 690;
	}
	.modal {
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		left: 50%;
		top: 50%;
		max-width: 75vw;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 50px;
		border-radius: 3px;
		background: white;
    z-index: 700;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
	}
	button {
		display: block;
	}
</style>

<div class='modal-background' on:click></div>

<div class='modal'>
	<svelte:component this={selected}/>
	<button on:click>Fechar</button>
</div>
