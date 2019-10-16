<script>
  import { createEventDispatcher } from 'svelte'
    import Icon from 'svelte-awesome'
  import { mapMarker } from 'svelte-awesome/icons'

  const dispatch = createEventDispatcher()

  function dropMarker () {
    dispatch('marker')
  }
</script>

<button type="button" on:click={dropMarker}>Selecionar local</button>
