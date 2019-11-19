<script>
	import { createEventDispatcher } from 'svelte'

	export let done = false

	const dispatch = createEventDispatcher()
</script>

<style>
  .nav-btns {
    display: flex;
    margin-top: 25px;
    justify-content: space-between;
  }
	.nav-btns button {
		min-width: 100px;
		width: 47.5%;
		margin: 0;
	}
	.next:disabled {
		opacity: 0.35;
	}
	.next {
		border: none;
    color: #fff;
		background: rgb(23,122,190);
		background: linear-gradient(90deg, rgba(23,122,190,1) 0%, rgba(0,194,255,1) 100%);
		margin-left: 2px;
	}
	.back {
    background-color: transparent;
    background-image: none;
    border-color: rgb(23,122,190);
    color: rgb(23,122,190);
		margin-right: 2px;
	}
</style>

<div class="nav-btns">
  <button 
		class="back" 
		type="button" 
		on:click={() => dispatch('back')}
		>
		Voltar
	</button>
  {#if !done}
	  <button 
			class="next" 
			type="button" 
			on:click={() => dispatch('next')} 
			disabled
			>
			Próximo
		</button>
	{:else}
		<button 
			class="next" 
			type="button" 
			on:click={() => dispatch('next')}
			>
			Próximo
		</button>
  {/if}
</div>
