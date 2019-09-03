<script>
  import { onMount, getContext } from 'svelte'
  import { L, key } from '../utils/leaflet.js'
  import { map } from '../utils/stores.js'
 
  export let position = 'topleft'

  let container
  
  function handleClick() {
    alert('clicked')
  }

  L.Control.AttTable = L.Control.extend({
    onAdd: (map) => {
      return container
    },
    onRemove: (map) => {
      // Do nothing
    }
  })

  L.control.attTable = (opts) => {
    return new L.Control.AttTable(opts)
  }

  onMount(() => {
    const attTable = L.control.attTable({ position: position }).addTo($map)
  })
</script>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 44px;
    height: 44px;
  }
  img {
    width: 28px;
    height: 28px;
  }
</style>

<div bind:this={container} class="leaflet-bar leaflet-control leaflet-control-custom">
  <img on:click={handleClick} src="./images/edit.svg" alt="Edit button"/>
</div>
