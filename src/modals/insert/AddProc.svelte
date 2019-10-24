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

<label>Identificação</label>
<input type="text" name="firstname">

<label>Classe</label>
<input type="text" name="firstname">

<label>Subclasse</label>
<input type="text" name="firstname">

<label>Status</label>
<input type="text" name="firstname">

<label>Inscrição Imobiliária</label>
<input type="text" name="firstname">

<label>Distrito</label>
<input type="text" name="firstname">

<div class="buttons">
  <button class="back" type="button" on:click={back}><span>Voltar </span></button>
	<button class="next" type="button" on:click={next}><span>Próximo </span></button>
</div>