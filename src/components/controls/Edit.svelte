<script>
  import { fade } from 'svelte/transition'
  import { editMode } from '../utils/stores.js'
  import Icon from 'svelte-awesome'
  import { faEdit } from '@fortawesome/free-solid-svg-icons'
  
  export let zIndex

  $: active = $editMode
</script>

<style>
  div {
    display: flex;
    position: fixed;
    margin-left: 1vw;
    margin-top: 2vh;
    width: 220px;
    height: 60px;
    background: #003366;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .4);
    border-radius: 4px;
    cursor: pointer;
  }
  div.active {
    background-color: red;
  }
  span {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    justify-items: center;
  }
  p {
    color: white;
    font-size: 0.9rem;
  }
</style>

<div class:active on:click style="z-index: {zIndex};">
  {#if active}
    <span in:fade="{{ duration: 250 }}">
      <Icon data={faEdit} style="color: white; margin-left: 4px; margin-bottom: 2px;" scale="2"/>
      <p>Edição ligada</p>
    </span>
  {:else}
    <span in:fade="{{ duration: 250 }}">
      <Icon data={faEdit} style="color: white; margin-left: 4px; margin-bottom: 2px;" scale="2"/>
      <p>Editar feições</p>
    </span>
  {/if}
</div>
