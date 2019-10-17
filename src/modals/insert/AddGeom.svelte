<script>
  import { createEventDispatcher } from 'svelte'
  import Icon from 'svelte-awesome'
  import { mapMarker } from 'svelte-awesome/icons'
  import { mode } from '../../utils/stores.js'

  const dispatch = createEventDispatcher()

  let coords = []

$: formObj = {
    key: 'coords',
    value: coords
  }
</script>

<button type="button" on:click={() => $mode = 'draw'}>Selecionar local</button>

<div class="buttons">
  <button class="back" type="button" on:click={() => dispatch('back')}><span>Voltar </span></button>
	<button class="next" type="button" on:click={() => dispatch('next', formObj)}><span>Próximo </span></button>
</div>
