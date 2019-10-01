<script>
	import Sidenav from './Sidenav.svelte'
	
	let sidenav = false
	$: main = sidenav

	function toggleSide () {
		sidenav = !sidenav
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
	}
	aside {
		overflow-y: auto;
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
		transition: all 0.5s ease-in-out;
		z-index: 1;
	}
  @media (max-width: 599px) {
    main {
			width: 100%;
		}
		aside {
      width: 50px;
    }
    .sidenav {
      width: 100vw;
    }
		.main {
			width: 0;
		}
  }
  @media (min-width: 600px) and (max-width: 899px) {
    main {
			width: 100%;
		}
		aside {
      width: 50px;
    }
    .sidenav {
      width: 100vw;
    }
		.main {
			width: 0;
		}
  }
  @media (min-width: 900px) and (max-width: 1199px) {
    main {
			width: 100%;
		}
		aside {
      width: 50px;
    }
    .sidenav {
      width: 100vw;
    }
		.main {
			width: 0;
		}
  }
  @media (min-width: 1200px) and (max-width: 1799px) {
    main {
			width: 100%;
		}
		aside {
      width: 50px;
    }
    .sidenav {
      width: 100vw;
    }
		.main {
			width: 0;
		}
  }
</style>

<div class="row">
	<aside class="col" class:sidenav>
		<Sidenav {sidenav} on:click={toggleSide}/>
	</aside>
	<main class="col" class:main>
		<slot></slot>
	</main>
</div>