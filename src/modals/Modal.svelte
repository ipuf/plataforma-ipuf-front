<script>
	import CloseBtn from './CloseBtn.svelte'
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
		justify-content: center;
		left: 50%;
		top: 50%;
		min-width: 25vw;
		min-height: 25vh;
		max-width: 75vw;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 25px;
		border-radius: 3px;
		background: white;
    z-index: 700;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
	}

</style>

<div class='modal-background'></div>

<div class='modal'>
	<slot></slot>
	<CloseBtn on:click/>
</div>
