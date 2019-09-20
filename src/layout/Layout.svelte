<script>
	import Header from './Header.svelte'
  import Sidenav from './Sidenav.svelte'
  import Footer from './Footer.svelte'

	const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	const mobile = (width < 768) ? true : false
	
	let sidenav = !mobile

	function toggleSide (e) {
		sidenav = e.detail.state
		console.log(sidenav)
	}
</script>

<style>
  .row {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}
	.col {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
	}
	main {
		width: 100%;
		height: 100%;
	}
</style>

<div class="row">
	<Sidenav {sidenav}/>
	<div class="col">
		<Header {sidenav} on:toggleSide={toggleSide}/>
		<main>
			<slot></slot>
		</main>
    <Footer {sidenav}/>
	</div>
</div>