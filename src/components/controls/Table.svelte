<script>
  import Icon from 'svelte-awesome'
  import { faTable } from '@fortawesome/free-solid-svg-icons'
  import Spreadsheet from '../panels/Spreadsheet.svelte'
  
  let width = 44
  let height = 44
  let table = false

  function handleClick () {
    if (!table) {
      table = true
      width = 1600
      height = 600
    } else {
      table = false
      width = 44
      height = 44
    }
  } 
</script>

<style>
  div {
    position: fixed;
    display: flex;
    float: left;
    margin-left: 12px;
    margin-top: 138px;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background-color: white;
  }
</style>

{#if !table}
  <div on:click={handleClick}>
    <Icon data={faTable} scale="1.25"/>
  </div>
{:else}
  <div style="width: {width}px; height: {height}px;">
    <Spreadsheet on:click={handleClick}/>
  </div> 
{/if}
