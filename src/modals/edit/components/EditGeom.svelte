<script>
  import { createEventDispatcher } from "svelte";
  import { mode, marker, coords } from "../../../utils/stores.js";

  const dispatch = createEventDispatcher();

  function selectMarker() {}

  function clearMarker() {
    if ($marker) {
      $marker.remove();
      $marker = false;
    }
  }
</script>

<style>
  button {
    background: white;
    width: 100%;
    border-color: rgba(90, 91, 117, 0.4);
    color: rgba(90, 91, 117, 0.8);
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
</style>

<div class="geom-btns">
  {#if $coords.length > 0}
    <button type="button" on:click={() => ($mode = 'draw')}>
      SELECIONAR GEOMETRIA
    </button>
  {:else}
    <button type="button" on:click={() => ($mode = 'draw')}>
      SELECIONAR OUTRA GEOMETRIA
    </button>
  {/if}
  <button type="button" on:click={clearMarker}>ALTERAR GEOMETRIA</button>
  <button type="button" on:click={clearMarker}>APAGAR GEOMETRIA</button>
</div>
