<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import { map } from '../utils/stores.js'
  import Icon from 'svelte-awesome'
  import { faUser } from '@fortawesome/free-solid-svg-icons'

  export let position = 'topleft'
  let container
  let active = false
  function handleClick() {
    alert('User clicked')
  }

  L.Control.User = L.Control.extend({
    onAdd: (map) => {
      return container
    },
    onRemove: (map) => {
      // Do nothing
    }
  })

  L.control.user = (opts) => {
    return new L.Control.User(opts)
  }

  onMount(() => {
    const user = L.control.user({ position: position }).addTo($map)
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
    <Icon data={faUser} style="color: white;" scale="1.25"/>
  {:else}
    <Icon data={faUser} scale="1.25"/>
  {/if}
</div>
