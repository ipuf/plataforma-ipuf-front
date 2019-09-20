<script>
  import { onMount } from 'svelte'
	import L from 'leaflet'
  import { map, rendered } from '../utils/stores.js'
  import Popup from './Popup.svelte'

  export let feature

  let geom
  let popup
  let content = false
  
  const type = feature.geometry.type
  const coords = feature.geometry.coordinates

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
        if (!content) {
          content = true
          $map.setView(e.target.getLatLng(), 12)
        } else {
          content = false
        }
      })
    $rendered = true
    return () => {
      geom.remove()
    }
  })
</script>

<div bind:this={popup}>
  {#if geom && content}
    <Popup {feature} />
  {/if}
</div>