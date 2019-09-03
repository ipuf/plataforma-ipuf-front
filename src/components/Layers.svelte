<script>
  import { onMount, getContext } from 'svelte'
  import { L, key } from './utils/leaflet.js'
  import { map, features, geom } from './utils/stores.js'
  import { db } from './utils/firebase.js'
  import { makeFeatCol, getPopupContent } from './utils/helpers.js'

  let mapData = L.featureGroup().addTo($map)

  const dataRef = db.collection('teste')
  dataRef.onSnapshot((querySnapshot) => {
    $features = []
    querySnapshot.forEach((doc) => { 
      $features.push(doc.data())
    })
    const featCol = makeFeatCol($features)
    const geoLayer = L.geoJSON(featCol, {
      coordsToLatLng: (coords) => {  
        return new L.LatLng(coords[0], coords[1], coords[2])
      },
      onEachFeature: (feature, layer) => {
        console.log(feature)
        layer._leaflet_id = feature.properties.id
        layer.bindPopup(getPopupContent(feature), { minWidth: 125, maxWidth: 250 })
        layer.addTo(mapData)
      }
    })
  })

</script>