<script>
  import { editMode } from './utils/stores.js'
  import User from './controls/User.svelte'
  import Logo from './controls/Logo.svelte'
  import Edit from './controls/Edit.svelte'
  import Table from './controls/Table.svelte'
  import Spreadsheet from './panels/Spreadsheet.svelte'
  import Profile from './panels/Profile.svelte'
  
  let table = false
  let profile = false
  let zIndex = 500

  function toggleEdit() { $editMode ? $editMode = false : $editMode = true }
  function toggleTable () { table ? table = false : table = true }
  function toggleProfile () { profile ? profile = false : profile = true }
</script>

<User {zIndex} on:click={toggleProfile}/>
<Edit {zIndex} on:click={toggleEdit}/>
<Table {zIndex} on:click={toggleTable}/>
{#if table }
  <Spreadsheet {zIndex} on:click={toggleTable}/>
{/if}
{#if profile }
  <Profile {zIndex} on:click={toggleProfile}/>
{/if}
<Logo {zIndex} />

  
