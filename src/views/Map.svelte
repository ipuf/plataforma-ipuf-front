<script>
  import Basemap from '../map/Basemap.svelte'
  import Layers from '../map/Layers.svelte'
	import { editMode } from '../utils/stores.js'
  
  function toggleEdit() { $editMode ? $editMode = false : $editMode = true }
</script>

<Basemap lat={-27.59} lon={-48.54} zoom={12}>
  <Layers/>
</Basemap>
