<script> 
  import { fromLonLat } from 'ol/proj'
  import { db } from '../utils/firebase.js'
  import { makeFeatCol } from '../utils/helpers.js'
  import Overlay from './Overlay.svelte'

  let featArray = []
  let featCollection = false

  const dataRef = db.collection('teste')
  dataRef.onSnapshot((querySnapshot) => {
    featArray = []

    querySnapshot.forEach((doc) => { 
      let feature = doc.data()
      feature.geometry.coordinates.reverse()
      feature.geometry.coordinates = fromLonLat(feature.geometry.coordinates)
      featArray.push(feature)
    })

    featCollection = makeFeatCol(featArray)
  })
  
</script>

{#if featCollection}
  <Overlay features={featCollection} />
{/if}
