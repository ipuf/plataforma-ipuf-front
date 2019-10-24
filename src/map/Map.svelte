<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import { map } from '../utils/stores.js'
  import { loadStyles } from '../utils/helpers.js'
   
  export let lat
  export let lon
  export let zoom

  let container

  onMount(() => {
    const link = loadStyles('https://unpkg.com/leaflet@1.5.1/dist/leaflet.css')

    link.onload = () => {
      $map = L.map(container, {
        zoomControl: false,
        doubleClickZoom: false
      })
      $map.setView([lat, lon], zoom)

      const cartoDB = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo($map)
    }

    return () => {
      $map.remove()
      link.parentNode.removeChild(link)
    }
  })
</script>

<style>
  div {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
  }
</style>

<div bind:this={container}>
  {#if $map}
    <slot></slot>
  {/if}
</div>