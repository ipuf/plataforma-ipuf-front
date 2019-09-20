<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import { map } from '../utils/stores.js'
  import { loadCSS } from '../utils/helpers.js'
   
  export let lat
  export let lon
  export let zoom

  let container
  let latlong

  onMount(() => {
    const link = loadCSS('https://unpkg.com/leaflet@1.5.1/dist/leaflet.css')

    link.onload = () => {
      $map = L.map(container, {
        zoomControl: false
      })
      $map.setView([lat, lon], zoom)

      const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      })

      const cartoDB = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo($map)

      const baseMaps = {'Carto Positron': cartoDB, 'ESRI Satellite': esriWorldImagery}

      L.control.layers(baseMaps).addTo($map)
      L.control.zoom({ position: 'topright' }).addTo($map)
    }

    return () => {
      $map.remove()
      link.parentNode.removeChild(link)
    }
  })
</script>

<style>
  div {
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