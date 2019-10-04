<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Map from './map/Map.svelte'
	import Sidenav from './layout/Sidenav.svelte'
	import Modal from './layout/Modal.svelte'	
	
	let expanded = false
	let selected = false
	
	function toggleSide (e) {
		expanded = e.detail.expanded
	}
	function toggleCategory (e) {
		selected = e.detail.selected
	}
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
	aside {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: absolute;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
		z-index: 600;
		background: #fff;
		width: 55px;
		padding: 10px;
		overflow-x: hidden;
		transition: all 0.3s ease-in-out;
	}
	.expanded {
		width: 190px;
	}
</style>

<aside class:expanded>
	<Sidenav {expanded} on:toggle={toggleSide} on:select={toggleCategory}/>
</aside>

<Map/>

{#if selected}
	<Modal {selected} on:close="{() => selected = false}" />
{/if}
