<script>
  import Basemap from '../map/Basemap.svelte'
  import Layers from '../map/Layers.svelte'
  import EditMode from '../components/EditMode.svelte'
	import { editMode } from '../utils/stores.js'
  
  let panelOpen = 'map'

  function toggleEdit() { $editMode ? $editMode = false : $editMode = true }
</script>

<EditMode {panelOpen} on:click={toggleEdit}/>

<Basemap lat={-27.59} lon={-48.54} zoom={12}>
  <Layers/>
</Basemap>
