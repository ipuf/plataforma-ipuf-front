<script>
  import { onMount, getContext } from 'svelte'
  import { L, key } from '../utils/leaflet.js'
  import { map } from '../utils/stores.js'

  let container
  
  function handleClick() {
    alert('clicked')
  }

  L.Control.ToggleEdit = L.Control.extend({
    options: {
      position: 'topleft' 
    },
    onAdd: (map) => {
      return container
    },
    onRemove: (map) => {
      // Do nothing
    }
  })

  L.control.toggleEdit = (opts) => {
    return new L.Control.ToggleEdit(opts)
  }

  onMount(() => {
    const toggleEdit = L.control.toggleEdit().addTo($map)
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
    margin-left: 2px;
    margin-bottom: 1px;
  }
</style>

<div bind:this={container} class="leaflet-bar leaflet-control leaflet-control-custom">
  <img on:click={handleClick} src="./images/edit.svg" alt="Edit button"/>
</div>
