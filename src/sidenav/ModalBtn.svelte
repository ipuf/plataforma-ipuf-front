<script>
  export let expanded
  export let selected = false
  export let id
  
  $: active = selected === id ? true : false
</script>

<style>
  .btn {
    margin: 0px;
    padding: 10px;
    height: 75px;
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 0;
    border: none;
  }
  .icon {
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    flex: 1;
    margin-left: 10px;
  }
  .active {
    background: rgb(23,122,190);
		background: linear-gradient(90deg, rgba(23,122,190,1) 0%, rgba(0,194,255,1) 100%);
  }
  .active * {
    color: white;
  }
</style>

<button
  type="button" 
  class:active
  class="btn" 
  on:click
  >
    <span class="icon">
      <slot></slot>
    </span>
    {#if expanded}
      <span class="text">
        <slot name="text"></slot>
      </span>
    {/if}
</button>
