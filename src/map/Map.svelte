<script>
  import { onMount } from 'svelte'
  import 'ol/ol.css'
  import { Map, View } from 'ol'
  import TileLayer from 'ol/layer/Tile'
  import XYZ from 'ol/source/XYZ'
  import { fromLonLat } from 'ol/proj'
  import { map } from '../utils/stores.js'
   
  export let lat
  export let lon
  export let zoom

  let container

  onMount(() => {
    $map = new Map({
      target: container,
      layers: [
        /* new TileLayer({
          source: new XYZ({
            attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' + 
              '&copy; <a href="https://carto.com/attributions">CARTO</a>',
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
              'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
          })
        }), */
        new TileLayer({
          source: new XYZ({
            attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' + 
              '&copy; <a href="https://carto.com/attributions">CARTO</a>',
            url: 'http://{1-4}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View ({
        center: fromLonLat([lon, lat]),
        zoom: zoom
      }),
      controls: []
    })

    return () => {
      $map.remove()
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