<script>
  import { fade } from 'svelte/transition'
  import { editMode } from '../utils/stores.js'
  import Icon from 'svelte-awesome'
  import { faEdit } from '@fortawesome/free-solid-svg-icons'
  
  export let panelOpen
  $: width = panelOpen ? 60 : 220
  $: active = $editMode
</script>

<style>
  div {
    display: flex;
    height: 60px;
    background: #003366;
    align-items: center;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .4);
    border-radius: 4px;
    cursor: pointer;
    transition: width 0.4s;
  }
  .active {
    background: red;
  }
  p {
    margin: auto;
    color: white;
    font-size: 0.9rem;
  }
</style>

<div class:active on:click style="width:{width}px;" transition:fade>
  <Icon data={faEdit} style="color: white; margin-left: 18px; margin-bottom: 2px" scale="1.85"/>
  {#if !panelOpen}
    <p in:fade="{{ delay: 200, duration: 400 }}">Edição ligada</p>
  {/if}
</div>
