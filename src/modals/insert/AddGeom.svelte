<script>
  import { createEventDispatcher } from 'svelte'
  import Buttons from './Buttons.svelte'
  import { mode, marker, coords } from '../../utils/stores.js'
  
  const dispatch = createEventDispatcher()
  let geom = true

  $: latlng = !geom ? [0, 0] : $coords ? $coords : throwError(e)
  $: done = $coords.length > 0 || geom === false ? true : false
  $: formObj = {
    key: 'coords',
    value: latlng
  }

  function clearMarker () {
    if ($marker) {
      $marker.remove()
      $marker = false
    }
  }
</script>

<style>
  button {
    background: white;
    width: 100%;
    border-color: rgba(90,91,117,.4);
    color: rgba(90,91,117,.8);
    font-size: 1.1rem;
    margin: 10px 0;
  }
  .geom-btns {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
  }
  p {
    text-align: center;
  }
</style>

<div class="geom-btns">
  {#if $coords.length > 0}
    <button type="button" on:click={() => $mode = 'draw'}>ALTERAR GEOMETRIA</button>
    <button type="button" on:click={clearMarker}>APAGAR GEOMETRIA</button>
  {:else}
    <button type="button" on:click={() => $mode = 'draw'}>INSERIR GEOMETRIA</button>
    <button type="button" on:click={() => {clearMarker(); geom = false}}>SEGUIR SEM GEOMETRIA</button>
  {/if}
</div>

{#if $coords.length > 0}
  <p>Geometria inserida nas coordenadas: {$coords}</p>
{:else}
  <p>Nenhuma geometria inserida.</p>
{/if}

<Buttons {done} on:next={() => dispatch('next', formObj)} on:back/>
