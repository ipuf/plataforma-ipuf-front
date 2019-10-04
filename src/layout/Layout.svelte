<script>
	import Sidenav from './Sidenav.svelte'
	
	let expanded = false
	$: compressed = expanded

	function toggleSide (e) {
		expanded = e.detail.expanded
	}
</script>

<style>
	main {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	aside {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: absolute;
		height: 100%;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
		z-index: 10000;
		background: #fff;
		width: 55px;
		padding: 10px;
		overflow-y: auto;
		overflow-x: hidden;
		transition: all 0.3s ease-in-out;
	}
	.expanded {
		width: 190px;
	}
</style>

<aside class:expanded>
	<Sidenav {expanded} on:toggle={toggleSide}/>
</aside>
<main>
	<slot></slot>
</main>
