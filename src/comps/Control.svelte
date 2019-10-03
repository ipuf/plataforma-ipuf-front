<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import * as leafside from 'leaflet-sidebar-v2'
  import * as leafdraw from 'leaflet-draw'
  import { db, auth } from '../utils/firebase.js'
  import { loadCss, makeFeatCol, getPopupContent, encodeCoords } from '../utils/helpers.js'
  import { map, newFeature, eivs } from '../utils/stores.js'
  import User from './panels/User.svelte'
  import FormEIV from './panels/FormEIV.svelte'
  
  let user

  auth.onAuthStateChanged((u) => {
    if (u) {
      user = u
    } else {
      user = false
    }
  })

  console.log('user: ', user)

  let sideContainer
  let sidebar
  let mapData
  let newData
  let drawControl
  let editControl
  let dataRef

  function formSubmitted (event) {
    console.log(event.detail.id)
    dataRef = db.collection(event.detail.dataref)
    dataRef.doc(event.detail.id).set(event.detail.feature)
      .then(() => $newFeature = '')
      .then(() => console.log('Creation successful'))
      .then(newData.clearLayers())
      .then(editControl.remove($map))
      .then(drawControl.addTo($map))
      .then(() => Object.keys($eivs).forEach(k => $eivs[k][0] = ''))
      .catch((e) => console.error(e + ', DAMN'))
  }

  onMount(() => {
    const linkF = loadCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css')
    const linkD = loadCss('https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css')
    const linkS = loadCss('https://unpkg.com/leaflet-sidebar-v2@3.2.0/css/leaflet-sidebar.min.css')

    linkS.onload = () => {
      sidebar = L.control.sidebar({ container: sideContainer }).addTo($map)
      mapData = L.featureGroup().addTo($map)
      newData = L.featureGroup().addTo($map)
      
      dataRef = db.collection('eivs')
      const unsubscribe = dataRef.onSnapshot((querySnapshot) => {
        const features = []
        querySnapshot.forEach((doc) => { 
          features.push(doc.data())
        })
        const featCol = makeFeatCol(features)
        if (mapData) { mapData.clearLayers() }
        const geoLayer = L.geoJSON(featCol, {
          coordsToLatLng: (coords) => {  
            return new L.LatLng(coords[0], coords[1], coords[2])
          },
          onEachFeature: (feature, layer) => {
            layer.bindPopup(getPopupContent(feature), { minWidth: 125, maxWidth: 250 })
            layer.addTo(mapData)
          }
        })
      })

      sidebar.on('content', (e) => {
        switch (e.id) {
          case 'login':
            if (drawControl) { $map.removeControl(drawControl) }
            break
         
          case 'formeiv': 
            /* Panel-specific events */
            mapData.on('click', (e) => {
              const featProps = e.layer.feature.properties
              $newFeature = e.layer
              Object.keys($eivs).forEach(k => $eivs[k][0] = featProps[k][0])
            })

            $map.on('click', (e) => {
              Object.keys($eivs).forEach(k => $eivs[k][0] = '')
            })

            if (user) {
              drawControl = new L.Control.Draw({
                edit: {
                  featureGroup: mapData,
                  remove: false,
                },
                draw: {
                  polygon: false,
                  marker: true,
                  circle: false,
                  polyline: false,
                  rectangle: false,
                  circlemarker: false
                }
              })
              $map.addControl(drawControl)
            }
            
            $map.on(L.Draw.Event.CREATED, (e) => {
              $newFeature = e.layer
              newData.addLayer($newFeature)
              if (drawControl) { $map.removeControl(drawControl) }
              editControl = new L.Control.Draw({
                edit: {
                  featureGroup: newData,
                  remove: true,
                },
                draw: false
              })
              $map.addControl(editControl)
            })

            $map.on(L.Draw.Event.EDITED, (e) => {
              e.layers.eachLayer((layer) => {
                console.log(layer)
                if (layer.feature) {
                  layer.feature.geometry.coordinates = [layer.getLatLng().lat.toPrecision(8), layer.getLatLng().lng.toPrecision(8)]
                  $newFeature = layer
                  dataRef.doc(layer.feature.properties.id[0]).set(layer.feature)
                    .then(() => console.log('Edit successful'))
                    .then(() => $newFeature = '')
                    .then(() => Object.keys($eivs).forEach(k => $eivs[k][0] = ''))
                    .catch((e) => console.error(e + ', SHIT'))
                } else {
                  $newFeature = layer
                }
              })
            })
        }
      })

      sidebar.on('closing', (e) => {
        if (editControl) { $map.removeControl(editControl) }
        if (drawControl) { $map.removeControl(drawControl) }
        $newFeature = ''
        newData.clearLayers()
      })
    }

    return () => {
      unsubscribe()
      linkF.parentNode.removeChild(linkF)
      linkD.parentNode.removeChild(linkD)
      linkS.parentNode.removeChild(linkS)
    }
  })

</script>

<style>
  p {
    padding-top: 3%;
    font-family: sans-serif;
  }
</style>

<div bind:this={sideContainer} class="leaflet-sidebar collapsed">
	<!-- nav tabs -->
	<div class="leaflet-sidebar-tabs">
		<!-- top aligned tabs -->
    <ul role="tablist">
      <li><a href="#login" role="tab"><i class="fa fa-user"></i></a></li>
      <li><a href="#formeiv" role="tab"><i class="fa fa-table"></i></a></li>
		</ul>
	</div>

	<!-- panel content -->
	<div class="leaflet-sidebar-content">
  <div class="leaflet-sidebar-pane" id="login">
      <h1 class="leaflet-sidebar-header">
        Usuário
        <span class="leaflet-sidebar-close"><i class="fa fa-caret-left"></i></span>
      </h1>
      <User {user}/>
    </div>
    
    <div class="leaflet-sidebar-pane" id="formeiv">
      <h1 class="leaflet-sidebar-header">
        Formulário EIVs
        <span class="leaflet-sidebar-close"><i class="fa fa-caret-left"></i></span>
      </h1>
      {#if user}
        <FormEIV on:message={formSubmitted}/>
      {:else}
        <p>Somente usuários habilitados podem utilizar o formulário.</p>
      {/if}
    </div>
	</div>
</div>