<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Layout from './layout/Layout.svelte'
	import Map from './map/Map.svelte'

	let panelActive = 'map'
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

<Layout>
	{#if panelActive === 'map'}
		<Map/>
	{/if}
</Layout>
