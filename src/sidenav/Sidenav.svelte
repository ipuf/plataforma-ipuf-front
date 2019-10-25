<script>
  import Icon from 'svelte-awesome'
  import { chevronRight, chevronLeft } from 'svelte-awesome/icons'
  import Toggle from './Toggle.svelte'

  export let expanded
</script>

<style>
  aside {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
		z-index: 600;
		background: #fff;
		width: 70px;
		overflow: hidden;
		transition: all 0.3s ease-in-out;
		border-radius: 0 .5rem .5rem 0;
	}
	.expanded {
		width: 225px;
    transition: all 0.3s ease-in-out;
	}
</style>

<aside class:expanded>
  <Toggle on:click>
    {#if !expanded}
      <Icon data={chevronRight} scale=2 style="color:rgba(90,91,117,.8);"/>
    {:else}
      <Icon data={chevronLeft} scale=2 style="color:rgba(90,91,117,.8);"/>
    {/if}
  </Toggle>
  <slot></slot>
</aside>
