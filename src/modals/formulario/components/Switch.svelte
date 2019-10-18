<script>
  export let estados = 2

  let cor

  function toggleState (state) {
    cor = state
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: center;
		align-items: center;
    align-content: flex-end;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 2px;
    color: gray;
    background-color:white;
    height: 60px;
  }
  div {
    flex: 1;
    padding: 0;
    margin: 0;
    height: 100%;
	}
  .container div:nth-child(n+2):nth-child(-n+3) {
    border-left: 0.5px dashed lightgray;
 }
  .good {
		background-color: #44a64a;
		color: white;
	}
  .medium {
		background-color: #d18534;
		color: white;
	}
  .bad {
		background-color: #ff3e00;
		color: white;
	}
</style>

<section class="container">
  {#if estados === 2}
    <div class:good="{cor === 'good'}" on:click="{() => toggleState('good')}">
      <slot name="good"></slot>
    </div>
    <div class:bad="{cor === 'bad'}" on:click="{() => toggleState('bad')}">
      <slot name="bad"></slot>
    </div>
  {:else if estados === 3}
    <div class:good="{cor === 'good'}" on:click="{() => toggleState('good')}">
      <slot name="good"></slot>
    </div>
    <div class:medium="{cor === 'medium'}" on:click="{() => toggleState('medium')}">
      <slot name="medium"></slot>
    </div>
    <div class:bad="{cor === 'bad'}" on:click="{() => toggleState('bad')}">
      <slot name="bad"></slot>
    </div>
  {/if}
</section>
