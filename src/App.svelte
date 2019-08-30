<svelte:head>
	<title>Formulário EIVs</title>
</svelte:head>

<script>
	import Leaflet from './comps/Leaflet.svelte'
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		padding: 0;
	}
</style>

<Leaflet lat={-27.59} lon={-48.54} zoom={12}/>