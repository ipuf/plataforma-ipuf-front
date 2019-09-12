<svelte:head>
	<title>Formulário EIVs</title>
</svelte:head>

<script>
	import Map from './components/Map.svelte'
	import Layers from './components/Layers.svelte'
	import Logo from './components/panels/Logo.svelte'
	import Controls from './components/controls/Controls.svelte'
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		padding: 0;
		background: white;
	}
</style>

<Logo/>
<Controls/>
<Map lat={-27.59} lon={-48.54} zoom={12}>
	<Layers/>
</Map>
