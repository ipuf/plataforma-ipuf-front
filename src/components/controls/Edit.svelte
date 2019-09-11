<script>
  import { editMode } from '../utils/stores.js'
  import Icon from 'svelte-awesome'
  import { faEdit } from '@fortawesome/free-solid-svg-icons'

  $: active = $editMode
  
  function handleClick() {
    if (!$editMode) {
      $editMode = true
    } else {
      $editMode = false
    }
  }
</script>

<style>
  div {
    position: fixed;
    display: flex;
    float: left;
    margin-left: 12px;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background-color: white;
  }
  div.active {
    background-color: red;
  }
</style>

<div class:active on:click={handleClick}>
  {#if active}
    <Icon data={faEdit} style="color: white; margin-left: 2px;" scale="1.25"/>
  {:else}
    <Icon data={faEdit} style="margin-left: 2px;" scale="1.25"/>
  {/if}
</div>
