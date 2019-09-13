<script>
  import { editMode, user, rendered } from './utils/stores.js'
  import User from './buttons/User.svelte'
  import Logo from './buttons/Logo.svelte'
  import Edit from './buttons/Edit.svelte'
  import Table from './buttons/Table.svelte'
  import Dataset from './panels/Dataset.svelte'
  import Profile from './panels/Profile.svelte'
  
  let zButtons = 900
  let zPanels = 600
  let zSpread = 700
  let zProfile = 800
  let table = false
  let profile = false

  $: panelOpen = (table || profile) ? true : false

  function toggleEdit() { $editMode ? $editMode = false : $editMode = true }
  function toggleTable () { table ? table = false : table = true }
  function toggleProfile () { profile ? profile = false : profile = true }
</script>

<style>
  .buttons {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 1vh;
    margin-left: 1vw;
    display: grid;
    grid-gap: 1vh;
  }
  .panels {
    position: absolute;
    left: 50vw;
    top: 50vh;
    transform: translate(-50%, -57.5%);
  }
</style>

<div class="buttons" style="z-index: {zButtons};">
  {#if $rendered}
    <User {panelOpen} on:click={toggleProfile}/>
    {#if $user}
      <Edit {panelOpen} on:click={toggleEdit}/>
    {/if}
    <Table {panelOpen} on:click={toggleTable}/>
  {/if}
</div>

<div class="panels" style="z-index: {zPanels};">
  {#if table }
    <Dataset {zSpread} on:click={toggleTable}/>
  {/if}
  {#if profile }
    <Profile {zProfile} on:click={toggleProfile}/>
  {/if}
</div>

<Logo {zButtons} />
