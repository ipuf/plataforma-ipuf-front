<script>
  import { createEventDispatcher } from 'svelte'
  import { coords, mode } from '../../utils/stores.js'
 
  const dispatch = createEventDispatcher()
  
  $: formObj = {
    key: 'bla',
    value: 'bleh'
  }

  function next () {
		dispatch('next', formObj)
  }
  function back () {
		dispatch('back')
	}
</script>

<h1>content</h1>

<div class="buttons">
  <button class="back" type="button" on:click={back}><span>Voltar </span></button>
	<button class="next" type="button" on:click={next}><span>Próximo </span></button>
</div>