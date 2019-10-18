<script>
  import { onMount } from 'svelte'
  import Feature from 'ol/Feature'
  import Overlay from 'ol/Overlay'
  import VectorLayer from 'ol/layer/Vector'
  import VectorSource from 'ol/source/Vector'
  import GeoJSON from 'ol/format/GeoJSON'
  import { map } from '../utils/stores.js'

  export let features
  console.log(features)
  /* var geojsonObject = {
    'type': 'FeatureCollection',
    'crs': {
      'type': 'name',
      'properties': {
        'name': 'EPSG:3857'
      }
    },
    'features': [{
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [0, 0]
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': [[4e6, -2e6], [8e6, 2e6]]
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': [[4e6, 2e6], [8e6, -2e6]]
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'Polygon',
        'coordinates': [[[-5e6, -1e6], [-4e6, 1e6], [-3e6, -1e6]]]
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'MultiLineString',
        'coordinates': [
          [[-1e6, -7.5e5], [-1e6, 7.5e5]],
          [[1e6, -7.5e5], [1e6, 7.5e5]],
          [[-7.5e5, -1e6], [7.5e5, -1e6]],
          [[-7.5e5, 1e6], [7.5e5, 1e6]]
        ]
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'MultiPolygon',
        'coordinates': [
          [[[-5e6, 6e6], [-5e6, 8e6], [-3e6, 8e6], [-3e6, 6e6]]],
          [[[-2e6, 6e6], [-2e6, 8e6], [0, 8e6], [0, 6e6]]],
          [[[1e6, 6e6], [1e6, 8e6], [3e6, 8e6], [3e6, 6e6]]]
        ]
      }
    }, {
      'type': 'Feature',
      'geometry': {
        'type': 'GeometryCollection',
        'geometries': [{
          'type': 'LineString',
          'coordinates': [[-5e6, -5e6], [0, -5e6]]
        }, {
          'type': 'Point',
          'coordinates': [4e6, -5e6]
        }, {
          'type': 'Polygon',
          'coordinates': [[[1e6, -6e6], [2e6, -4e6], [3e6, -6e6]]]
        }]
      }
    }]
  } */

  let popup
  let props = false
  let closer
  
  onMount(() => {
    const source = new VectorSource({
      features: (new GeoJSON()).readFeatures(features)
    })

    const layer = new VectorLayer({
      source: source
    })

    const overlay = new Overlay({
      element: popup,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    })

    $map.addLayer(layer)
    $map.addOverlay(overlay)
    $map.on('singleclick', (event) => {
      const feature = $map.forEachFeatureAtPixel(event.pixel, (feature, layer) => { return feature })
      if (feature) {
          const coords = feature.getGeometry().getCoordinates()
          props = feature.getProperties()
          console.log(props)
          overlay.setPosition(coords)
      } else {
          props = false
          overlay.setPosition(undefined)
          closer.blur()
      }
    })

    closer.onclick = () => {
      overlay.setPosition(undefined)
      closer.blur
      return false
    }
    
    return () => {
      $map.removeLayer(layer)
      $map.removeOverlay(overlay)
    }
  })
</script>

<style>
  .ol-popup {
    position: absolute;
    background-color: white;
    -webkit-filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
    filter: drop-shadow(0 1px 4px rgba(0,0,0,0.2));
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #cccccc;
    bottom: 12px;
    left: -50px;
    min-width: 280px;
  }
  .ol-popup:after, .ol-popup:before {
    top: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  .ol-popup:after {
    border-top-color: white;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
  }
  .ol-popup:before {
    border-top-color: #cccccc;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
  }
  .ol-popup-closer {
    text-decoration: none;
    position: absolute;
    top: 2px;
    right: 8px;
  }
  .ol-popup-closer:after {
    content: "✖";
  }
</style>

{#if features}
  <div bind:this={popup} class="ol-popup">
    <span bind:this={closer} class="ol-popup-closer"/>
      <div bind:this={props}>
        <table>
          {#each Object.entries(props) as [key, value]}
            <tr><th scope="row">{key}</th><td><p>{value}</p></td></tr>
          {/each}
        </table>
      </div>
  </div>
{/if}
