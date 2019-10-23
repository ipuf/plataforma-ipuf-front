<script>
  import { createEventDispatcher } from 'svelte'
  import { mode, coords } from '../../utils/stores.js'
  
  const dispatch = createEventDispatcher()
  
  $: formObj = {
    key: 'coords',
    value: $coords
  }
</script>

<style>
  .buttons {
    display: flex;
  }
  .buttons button {
    flex: 1;
  }
</style>

{#if $coords.length > 0}
  <button type="button" on:click={() => $mode = 'draw'}>Mudar local</button>
{:else}
  <button type="button" on:click={() => $mode = 'draw'}>Selecionar local</button>
{/if}

<div class="buttons">
  <button type="button" on:click={() => dispatch('back')}>Voltar</button>
  {#if $coords.length > 0}
	  <button type="button" on:click={() => dispatch('next', formObj)}>Próximo</button>
  {/if}
</div>
