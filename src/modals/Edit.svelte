<script>
  import { createEventDispatcher } from 'svelte'
  
  import EditGeom from './edit/EditGeom.svelte'
	import EditProc from './edit/EditProc.svelte'

  export let user = true

  const dispatch = createEventDispatcher()
  const form = []

  function editGeom () {
  }

  function editProc () {
  }
</script>

<EditGeom on:save={editGeom} on:cancel/>
<EditProc on:save={editProc} on:cancel/>
