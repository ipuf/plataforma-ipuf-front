<script>
  import { editMode } from '../utils/stores.js'
  export let feature
</script>

<style>
  table {
    width: 100%;
    height: 150px;
  }
  input {
    width:100%;
    height:100%;
  }
</style>

<table>
  {#each Object.keys(feature.properties) as key}
    {#if $editMode}
      <tr><th scope="row">{key}</th><td><input type="text" bind:value={feature.properties[key]}/></td></tr>
    {:else}
      <tr><th scope="row">{key}</th><td><p>{feature.properties[key]}</p></td></tr>
    {/if}
  {/each}
</table>