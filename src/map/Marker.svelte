<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import { fade } from 'svelte/transition'
  import { map } from '../utils/stores.js'

  export let feature
  export let hasPopup = true
  
  const [ lng, lat ] = [ feature.geometry.coordinates[0], feature.geometry.coordinates[1] ]
  const geom = L.marker([ lng, lat ])

  let content = false 
  let popup
  
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

{#if hasPopup}
  <div bind:this={popup}>
    {#if geom && content}
      <table transition:fade="{{ duration: 200 }}">
        {#each Object.keys(feature.properties) as key}
          <tr><th scope="row">{key}</th><td><p>{feature.properties[key]}</p></td></tr>
        {/each}
      </table>
    {/if}
  </div>
{/if}
