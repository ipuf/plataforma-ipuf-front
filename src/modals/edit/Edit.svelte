<script>
  import { createEventDispatcher } from "svelte";

  import EditGeom from "./components/EditGeom.svelte";
  import EditProc from "./components/EditProc.svelte";

  export const user = true;

  const dispatch = createEventDispatcher();
  const form = [];

  function editGeom() {}

  function editProc() {}
</script>

<EditGeom on:save={editGeom} on:cancel />
<EditProc on:save={editProc} on:cancel />
