<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import { fade } from 'svelte/transition'
  import { map } from '../utils/stores.js'

  export let feature
  const type = feature.geometry.type
  const coords = feature.geometry.coordinates

  let geom
  let popup
  let content = false
  
  switch (type) {
    case 'Point':
      const [lon, lat] = [coords[0], coords[1]]
      geom = L.marker([lon, lat])
      break
    
    case 'Polygon':
      const lnglats = coords[0]
      geom = L.polygon(lnglats)
      break
  } 
  
  onMount(() => {
    geom.addTo($map)
      .bindPopup(popup, { minWidth: 250, maxWidth: 250, minHeight: 150, maxHeight: 150 })
      .on('popupopen popupclose', (e) => {
        $map.setView(e.target.getLatLng(), 12) 
        content = !content
      })
    
    return () => {
      geom.remove()
    }
  })
</script>

<style>
  table {
    width: 100%;
    height: 150px;
  }
</style>

<div bind:this={popup}>
  {#if geom && content}
    <table transition:fade="{{ duration: 200 }}">
      {#each Object.keys(feature.properties) as key}
        <tr><th scope="row">{key}</th><td><p>{feature.properties[key]}</p></td></tr>
      {/each}
    </table>
  {/if}
</div>
