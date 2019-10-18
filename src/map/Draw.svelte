<script>
  import { onMount } from 'svelte'
  import MousePosition from 'ol/control/MousePosition'
  import { createStringXY } from 'ol/coordinate'
  import { map, mode } from '../utils/stores.js'

  function changeCursor () {
    const css = document.createElement("style")
    css.type = "text/css"
    css.innerHTML = "* { cursor: crosshair !important; }"
    document.body.appendChild(css)
  }

  const mousePositionControl = new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: 'EPSG:4326'
  })

  $map.addControl(mousePositionControl)

  onMount(() => {
    changeCursor()
    var projectionSelect = document.getElementById('projection');
    projectionSelect.addEventListener('change', (event) => {
      mousePositionControl.setProjection(event.target.value);
    });

    var precisionInput = document.getElementById('precision');
    precisionInput.addEventListener('change', (event) => {
      var format = createStringXY(event.target.valueAsNumber);
      mousePositionControl.setCoordinateFormat(format);
    });
  })
</script>

<div id="mouse-position"></div>
<form>
  <label>Projection </label>
  <select id="projection">
    <option value="EPSG:4326">EPSG:4326</option>
    <option value="EPSG:3857">EPSG:3857</option>
  </select>
  <label>Precision </label>
  <input id="precision" type="number" min="0" max="12" value="4"/>
</form>
<button class="next" type="button" on:click={() => $mode = false}><span>Cancelar </span></button>