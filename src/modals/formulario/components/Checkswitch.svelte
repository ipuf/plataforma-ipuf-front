<script>
  export let estados = 2

  let activeOne = false
  let activeTwo = false
  let activeThree = false
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
  .active {
		background-color: #44a64a;
		color: white;
	}
</style>

<section class="container">
  {#if estados === 2}
    <div class:active="{activeOne}" on:click="{() => activeOne = !activeOne}">
      <slot name="one"></slot>
    </div>
    <div class:active="{activeTwo}" on:click="{() => activeTwo = !activeTwo}">
      <slot name="two"></slot>
    </div>
  {:else if estados === 3}
    <div class:active="{activeOne}" on:click="{() => activeOne = !activeOne}">
      <slot name="one"></slot>
    </div>
    <div class:active="{activeTwo}" on:click="{() => activeTwo = !activeTwo}">
      <slot name="two"></slot>
    </div>
    <div class:active="{activeThree}" on:click="{() => activeThree = !activeThree}">
      <slot name="three"></slot>
    </div>
  {/if}
</section>
