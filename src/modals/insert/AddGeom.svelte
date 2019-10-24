<script>
  import { createEventDispatcher } from 'svelte'
  import { mode, marker, coords } from '../../utils/stores.js'
  
  const dispatch = createEventDispatcher()
  let geom = true

  $: latlng = !geom ? [0, 0] : $coords ? $coords : throwError(e)
  $: print = latlng ? console.log(latlng) : console.log(latlng)
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
  .geom-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
  }
  .geom-btns button {
    width: 100%;
  }
  .nav-btns {
    display: flex;
    height: 40px;
    margin-top: 25px;
    justify-content: space-between;
  }
  .back {
    border: none;
    margin: 0;
    width: 45%;
    box-shadow: 1px 1px 4px #888888;
    border-radius: 1px;
  }
  .next {
    border: none;
    background: green;
    color: white;
    margin: 0;
    width: 45%;
    box-shadow: 1px 1px 4px #888888;
    border-radius: 1px;
  }
</style>

<div class="geom-btns">
  {#if $coords.length > 0}
  <button type="button" on:click={() => $mode = 'draw'}>ALTERAR GEOMETRIA</button>
  {:else}
    <button type="button" on:click={() => $mode = 'draw'}>INSERIR GEOMETRIA</button>
  {/if}
  <button type="button" on:click={clearMarker}>APAGAR GEOMETRIA</button>
  <button type="button" on:click={() => {clearMarker(); geom = false}}>SEGUIR SEM GEOMETRIA</button>
</div>

<div class="nav-btns">
  <button class="back" type="button" on:click={() => dispatch('back')}>Voltar</button>
  {#if $coords.length > 0 || geom === false}
	  <button class="next" type="button" on:click={() => dispatch('next', formObj)}>Próximo</button>
  {/if}
</div>
