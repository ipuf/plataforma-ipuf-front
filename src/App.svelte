<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Map from './map/Map.svelte'
	import Sidenav from './layout/Sidenav.svelte'
	import Modal from './layout/Modal.svelte'

	let modal = false
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #f8f8f8;
	}
	:global(*) {
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
	}
</style>

{#if modal}
	<Modal {modal} on:click={() => modal = false}/>
{/if}
<Sidenav {modal} on:modal={(e) => modal = e.detail.selected}/>
<Map/>
