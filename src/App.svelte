<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Layout from './layout/Layout.svelte'
	import Map from './views/Map.svelte'
	import Datagrid from './views/Datagrid.svelte'
	import Profile from './views/Profile.svelte'
	import Dashboard from './views/Dashboard.svelte'

	let panelActive = 'map'
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', 'Roboto', sans-serif;
		background-color: #f5f6f7;
	}
	:global(*) {
		box-sizing: border-box;
	}
</style>

<Layout>
	{#if panelActive === 'map'}
		<Map/>
	{:else if panelActive === 'data'}
		<Datagrid/>
	{:else if panelActive === 'profile'}
		<Profile/>
	{:else}
		<Dashboard/>
	{/if}
</Layout>
