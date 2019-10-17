<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  $: formObj = {
    key: 'bla',
    value: 'bleh'
  }
</script>

<p>content</p>

<div class="buttons">
  <button class="back" type="button" on:click={() => dispatch('back')}><span>Voltar </span></button>
	<button class="next" type="button" on:click={() => dispatch('next', formObj)}><span>Próximo </span></button>
</div>