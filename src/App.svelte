<svelte:head>
	<title>Formulário EIVs</title>
</svelte:head>

<script>
	import Map from './components/Map.svelte'
	import Layers from './components/Layers.svelte'
	import Logo from './components/controls/Logo.svelte'
	import Edit from './components/controls/Edit.svelte'
	import Table from './components/controls/Table.svelte'
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		padding: 0;
	}
</style>

<Map lat={-27.59} lon={-48.54} zoom={12}>
	<Layers/>
	<Logo/>
	<Edit/>
	<Table/>
</Map>