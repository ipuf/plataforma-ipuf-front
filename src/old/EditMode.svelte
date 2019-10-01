<script>
  import { fade } from 'svelte/transition'
  import { editMode } from '../utils/stores.js'
  import Icon from 'svelte-awesome'
  import { faEdit } from '@fortawesome/free-solid-svg-icons'
  
  $: active = $editMode
</script>

<style>
  div {
    position: absolute;
    margin-top: 1vh;
    margin-left: 1vw;
    display: flex;
    height: 45px;
    width: 45px;
    background: #003366;
    align-items: center;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .4);
    border-radius: 4px;
    cursor: pointer;
    transition: width 0.4s;
    z-index: 500;
  }
  .active {
    background: red;
  }
</style>

<div class:active on:click transition:fade>
  <Icon data={faEdit} style="color: white; margin-left: 11px; margin-bottom: 2px" scale="1.75"/>
</div>
