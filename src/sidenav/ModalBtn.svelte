<script>
  import { fade } from 'svelte/transition'

  export let expanded
  export let selected = false
  export let id
  
  $: active = selected === id ? true : false
</script>

<style>
  .btn {
    margin: 0;
    border: none;
    padding: 15px 10px;
    height: 100px;
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
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
    background-color: darkblue;
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
      <span class="text" in:fade="{{delay: 300, duration: 200}}">
        <slot name="text"></slot>
      </span>
    {/if}
</button>
