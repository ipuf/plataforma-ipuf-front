<script>
	import Sidenav from './Sidenav.svelte'
	
	let expanded = false
	$: compressed = expanded

	function toggleSide (e) {
		expanded = e.detail.expanded
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
	}
	main {
		transition: all 0.5s ease-in-out;
		width: 100%;
		height: 100%;
	}
	aside {
		overflow-y: auto;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
		transition: all 0.5s ease-in-out;
		z-index: 1;
		width: 50px;
	}
	.expanded {
		width: 100vw;
		background: #fff;
	}
	.compressed {
		width: 0;
	}
  @media (max-width: 599px) {
		aside {
      width: 50px;
			height: 50px !important;
			position: fixed;
			overflow: hidden;
			background: #fff;
    }
    .expanded {
      width: 100vw;
			height: 100% !important;
			background: #fff;
    }
		.compressed {
			width: 0;
			height: 0;
		}
  }
  @media (min-width: 600px) and (max-width: 899px) {
    .expanded {
      width: 100vw;
    }
		.compressed {
			width: 0;
		}
  }
  @media (min-width: 900px) and (max-width: 1199px) {
		aside {
      width: 60px;
    }
    .expanded {
      width: 100vw;
    }
		.compressed {
			width: 0;
		}
  }
  @media (min-width: 1200px) and (max-width: 1799px) {
		aside {
      width: 60px;
    }
    .expanded {
      width: 100vw;
    }
		.compressed {
			width: 0;
		}
  }
</style>

<div class="row">
	<aside class="col" class:expanded>
		<Sidenav {expanded} on:toggle={toggleSide}/>
	</aside>
	<main class="col" class:compressed>
		<slot></slot>
	</main>
</div>