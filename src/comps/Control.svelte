<script>
  import { onMount, getContext } from 'svelte'
  import { L, key } from '../utils/leaflet.js'
  import { db } from '../utils/firebase.js'
  import { loadCss, makeFeatCol, getPopupContent, encodeCoords } from '../utils/helpers.js'
  import { user, newFeature, eivs } from '../utils/stores.js'
  import { allowedUids } from '../utils/arrays.js'
  import User from './panels/User.svelte'
  import FormEIV from './panels/FormEIV.svelte'
  
  const { getMap } = getContext(key)
  const map = getMap()
  
  let sideContainer
  let sidebar
  let mapData
  let drawControl
  let dataRef

  function formSubmitted (event) {
    dataRef = db.collection(event.detail.dataref)
    dataRef.doc(event.detail.id).set(event.detail.feature)
      .then(() => $newFeature = '')
      .then(() => console.log('Creation successful'))
      .then(drawControl.addTo(map))
      .then(() => {
        Object.keys($eivs).forEach(k => $eivs[k] = '')
      })
      .catch((e) => console.error(e + ', DAMN'))
  }

  onMount(() => {
    const linkF = loadCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css')
    const linkD = loadCss('https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css')
    const linkS = loadCss('https://unpkg.com/leaflet-sidebar-v2@3.2.0/css/leaflet-sidebar.min.css')

    linkS.onload = () => {
      sidebar = L.control.sidebar({ container: sideContainer }).addTo(map)
      mapData = L.featureGroup().addTo(map)
      
      dataRef = db.collection('eivs')
      dataRef.onSnapshot((querySnapshot) => {
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
            layer._leaflet_id = feature.properties.id
            layer.bindPopup(getPopupContent(feature), { minWidth: 125, maxWidth: 250 })
            layer.addTo(mapData)
          }
        })
      })

      sidebar.on('content', (e) => {
        switch (e.id) {
          case 'login':
            if (drawControl) { map.removeControl(drawControl) }
            break
         
          case 'formeiv': 
            /* Panel-specific events */
            mapData.on('click', (e) => {
              const featProps = e.layer.feature.properties
              Object.keys($eivs).forEach(k => $eivs[k][0] = featProps[k][0])
            })

            map.on('click', (e) => {
              Object.keys($eivs).forEach(k => $eivs[k][0] = '')
            })

            if ($user && allowedUids.includes($user.uid)) {
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
              map.addControl(drawControl)
            }
            
            map.on(L.Draw.Event.CREATED, (e) => {
              $newFeature = e.layer
              mapData.addLayer($newFeature)
              drawControl.remove(map)
            })

            map.on(L.Draw.Event.EDITED, (e) => {
              e.layers.eachLayer((layer) => {
                layer.feature.geometry.coordinates = [layer.getLatLng().lat.toPrecision(8), layer.getLatLng().lng.toPrecision(8)]
                $newFeature = layer
                dataRef.doc(layer._leaflet_id).set(layer.feature)
                  .then(() => console.log('Edit successful'))
                  .then(() => $newFeature = '')
                  .then(() => Object.keys($eivs).forEach(k => $eivs[k][0] = ''))
                  .catch((e) => console.error(e + ', SHIT'))
              })
            })
        }
      })

      sidebar.on('closing', (e) => {
        if (drawControl) { map.removeControl(drawControl) }
        $newFeature = ''
      })
    }

    return () => {
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
		<!-- bottom aligned tabs -->
		<ul role="tablist">
			<li><a href="https://github.com/k-onrad/svelte-dash"><i class="fa fa-github"></i></a></li>
		</ul>
	</div>

	<!-- panel content -->
	<div class="leaflet-sidebar-content">
  <div class="leaflet-sidebar-pane" id="login">
      <h1 class="leaflet-sidebar-header">
        Usuário
        <span class="leaflet-sidebar-close"><i class="fa fa-caret-left"></i></span>
      </h1>
      <User/>
    </div>
    
    <div class="leaflet-sidebar-pane" id="formeiv">
      <h1 class="leaflet-sidebar-header">
        Formulário EIVs
        <span class="leaflet-sidebar-close"><i class="fa fa-caret-left"></i></span>
      </h1>
      {#if $user && allowedUids.includes($user.uid)}
        <FormEIV on:message={formSubmitted}/>
      {:else}
        <p>Somente usuários habilitados podem utilizar o formulário.</p>
      {/if}
    </div>
	</div>
</div>