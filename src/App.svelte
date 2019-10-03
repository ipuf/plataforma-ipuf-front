<script>
	import Leaflet from './comps/Leaflet.svelte'
	import Control from './comps/Control.svelte'
	import Logo from './comps/Logo.svelte'
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		padding: 0;
	}
</style>

<Leaflet lat={-27.59} lon={-48.54} zoom={12}>
	<Control/>
	<Logo/>
</Leaflet>