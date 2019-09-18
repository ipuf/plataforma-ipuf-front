<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Header from './components/Header.svelte'
	import Sidenav from './components/Sidenav.svelte'
	import Main from './components/Main.svelte'

	const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	
	let sidenav = (width > 750) ? true : false
	$: mobile = !sidenav

	function toggleSide (e) {
		sidenav = e.detail.state
		console.log(sidenav)
	}
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', 'Roboto', sans-serif;
	}
	:global(*) {
		box-sizing: border-box;
	}
	.row {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}
	aside {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 0px;
		overflow-y: auto;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		background-color: #003366;
		transition: all 0.5s ease-in-out;
		z-index: 1;
	}
	.sidenav {
		display: relative;
		width: 240px;
	}
	section {
		height: 100%;
		width: 100%;
		padding: 0px;
		margin: 0px;
	}
	header {
		height: 50px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
		background-color: #f8f8f8;
	}
	main {
		position: relative;
		height: 100%;
		width: 100%;
		background-color: white;
	}
	.mobile {
		width: calc(100%-240px);
	}
</style>

<div class="row">
	<aside class:sidenav>
		<Sidenav/>
	</aside>

	<section class:mobile>
		<header>
			<Header {sidenav} on:toggleSide={toggleSide}/>
		</header>
		<main>
			<Main/>
		</main>
	</section>
</div>

