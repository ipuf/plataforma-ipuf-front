<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import { map } from '../utils/stores.js'
  import Icon from 'svelte-awesome'
  import { faTable } from '@fortawesome/free-solid-svg-icons'
  import Spreadsheet from '../panels/Spreadsheet.svelte'

  export let position = 'topleft'
  
  let container
  
  let width = 44
  let height = 44
  let table = false

  function handleClick () {
    if (!table) {
      table = true
      width = 1600
      height = 600
    } else {
      table = false
      width = 44
      height = 44
    }
  } 
  
  L.Control.ViewTable = L.Control.extend({
    onAdd: (map) => {

      return container
    },
    onRemove: (map) => {
      // Do nothing
    }
  })

  L.control.viewTable = (opts) => {
    return new L.Control.ViewTable(opts)
  }

  onMount(() => {
    const viewTable = L.control.viewTable({ position: position }).addTo($map)
  })
</script>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
</style>

<div bind:this={container} 
  class="leaflet-bar leaflet-control leaflet-control-custom"
  style="width: {width}px; height: {height}px;">
  {#if !table}
    <div on:click={handleClick}>
      <Icon data={faTable} scale="1.25"/>
    </div>
  {:else}
    <Spreadsheet on:click={handleClick}/>
  {/if}
</div>
