<svelte:head>
	<title>Formulário EIVs</title>
	<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Map from './components/Map.svelte'
	import Layers from './components/Layers.svelte'
	import Controller from './components/Controller.svelte'
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		padding: 0;
		background: white;
		font-family: 'Montserrat', sans-serif;
	}
	:global(*) {
		box-sizing: border-box;
	}
</style>

<Controller/>
<Map lat={-27.59} lon={-48.54} zoom={12}>
	<Layers/>
</Map>
