<script>
	import { getContext } from 'svelte';
	import { L, key } from './utils/leaflet.js';
  import { map } from './utils/stores.js'

	export let lat
	export let lon
	export let feature

  const props = Object.entries(feature.properties)

	let popup

  const marker = L.marker().setLngLat([lon, lat]).setPopup(popup).addTo(map)
</script>

<table bind:this={popup}>
  {#each props as [key, value]}
    <tr><th scope="row">key</th><td><textarea bind:value={value}></textarea></td></tr>
  {/each}
</table>