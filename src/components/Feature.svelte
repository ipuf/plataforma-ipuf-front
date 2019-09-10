<script>
  import { onMount } from 'svelte'
	import L from 'leaflet'
  import { map, editMode } from './utils/stores.js'
  import Popup from './Popup.svelte'

  export let feature
  // console.log(feature)

  let geom
  let popup
  let content = false
  
  const type = feature.geometry.type
  const coords = feature.geometry.coordinates

  switch (type) {
    case 'Point':
      const [lon, lat] = [coords[0], coords[1]]
      geom = L.marker([lon, lat])
      // console.log('case point')
      break
    
    case 'Polygon':
      const lnglats = coords[0]
      geom = L.polygon(lnglats)
      // console.log('case polygon')
      break
  } 
  
  onMount(() => {
    geom.addTo($map)
      .bindPopup(popup, { minWidth: 250, maxWidth: 250 })
      .on('popupopen popupclose', (e) => {
        if (!content) {
          content = true
          $map.setView(e.target.getLatLng(), 12)
        } else {
          content = false
        }
      })

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