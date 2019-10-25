<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import { features } from '../utils/stores.js'
  import { db } from '../utils/firebase.js'
  import Marker from './Marker.svelte'

  /* const dataRef = db.collection('teste')
  dataRef.onSnapshot(async (querySnapshot) => {
    $features = []

    querySnapshot.forEach((doc) => { 
      $features.push(doc.data())
    })
  }) */

  async function getFeatures () {
    const features = []

    try {
      const response = await fetch('http://192.168.173.66/get')
      const data = await response.json()
      for (let feature of data) features.push(feature)
      return features
    } catch (e) {
      return console.error(e)
    }
  }

  onMount(async () => {
    $features = await getFeatures()
    console.log($features)
  })
</script>

{#if $features}
  {#each $features as feature}
    <Marker {feature} />
  {/each}
{/if}
