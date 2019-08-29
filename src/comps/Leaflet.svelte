<script>
  import { onMount, setContext } from 'svelte'
  import { L, key } from '../utils/leaflet.js'
  import { loadCss } from '../utils/helpers.js'
  import Control from './Control.svelte'
  
  setContext(key, {
    getMap: () => map
  })

  export let lat
  export let lon
  export let zoom

  let mapContainer
  let map
  let latlong

  onMount(() => {
    const link = loadCss('https://unpkg.com/leaflet@1.5.1/dist/leaflet.css')

    link.onload = () => {
      // set up map w/ basemap
      map = L.map(mapContainer)
      map.setView([lat, lon], zoom)
      L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(map)
    }

    return () => {
      map.remove()
      link.parentNode.removeChild(link)
    }
  })
</script>

<style>
  div {
    height: 100%;
    width: 100%;
  }
</style>

<div bind:this={mapContainer}>
  {#if map}
    <Control/>
  {/if}
</div>