<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import { map, editMode } from '../utils/stores.js'
  import Icon from 'svelte-awesome'
  import { faEdit } from '@fortawesome/free-solid-svg-icons'

  export let position = 'topleft'
  let container
  $: active = $editMode
  
  function handleClick() {
    if (!$editMode) {
      $editMode = true
    } else {
      $editMode = false
    }
  }

  L.Control.ToggleEdit = L.Control.extend({
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
    const toggleEdit = L.control.toggleEdit({ position: position }).addTo($map)
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
  .active {
    background-color: red;
  }
</style>

<div bind:this={container} class:active on:click={handleClick} class="leaflet-bar leaflet-control leaflet-control-custom">
  {#if active}
    <Icon data={faEdit} style="color: white; margin-left: 2px;" scale="1.25"/>
  {:else}
    <Icon data={faEdit} style="margin-left: 2px;" scale="1.25"/>
  {/if}
</div>
