<script>
  import Marker from '../map/Marker.svelte'
  import { draggable } from '../utils/draggable.js'
  import Icon from 'svelte-awesome'
  import { mapMarker } from 'svelte-awesome/icons'

  let dragging = false
  let start = false
  let x = 0
  let y = 0
  $: coords = { x: x, y: y }

  function handleClick (e) {
    dragging = !dragging
    console.log('dragging:', dragging)
  }

	function handleMove (e) {
    x += e.detail.dx
    y += e.detail.dy
	}
 
  function dropMarker () {
    start = true
    let done = false
    let dragging = false
  }
</script>

<style>
	.box {
		--width: 100px;
		--height: 100px;
		position: fixed;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		border-radius: 4px;
	cursor: move;
    z-index: 900;
	}
</style>

{#if !start}
  <button type="button" on:click={dropMarker}>Selecionar local</button>
{:else}
  <div class="box"
    use:draggable
    on:toggledrag={handleClick}
    on:drag={handleMove}
    style="transform:
      translate({coords.x}px,{coords.y}px)
      "
  >
    <img src="images/marker-icon.png" alt="marcador de ponto geográfico">
  </div>
{/if}
