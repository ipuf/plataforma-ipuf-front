<script>
	import Sidenav from './Sidenav.svelte'
	
	let content = false
	$: compressed = content

	function toggleSide (e) {
		content = e.detail.content
	}
</script>

<style>
  .row {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}
	main {
		position: absolute;
		width: 100%;
		height: 100%;
		transition: all 0.5s ease-in-out;
	}
	aside {
		position: absolute;
		height: 100%;
		display: flex;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
		z-index: 10000;
		background: #fbfbfb;
		width: 55px;
		padding: 10px;
		transition: all 0.5s ease-in-out;
	}
	.content {
		width: 100vw;
		background: #fff;
	}
  @media (max-width: 599px) {
		aside {
			height: 55px;
			background: #fff;
    }
    .content {
			height: 100%;
    }
  }
  @media (min-width: 600px) and (max-width: 899px) {
  }
  @media (min-width: 900px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1799px) {
  }
</style>

<div class="row">
	<aside class:content>
		<Sidenav {content} on:toggle={toggleSide}/>
	</aside>
	<main>
		<slot></slot>
	</main>
</div>