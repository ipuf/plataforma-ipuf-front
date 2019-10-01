<script>
  import L from 'leaflet'
  import { features } from '../utils/stores.js'
  import { db } from '../utils/firebase.js'
  import Feature from './Feature.svelte'

  const dataRef = db.collection('teste')
  dataRef.onSnapshot(async (querySnapshot) => {
    $features = []

    querySnapshot.forEach((doc) => { 
      $features.push(doc.data())
    })
  })
</script>

{#if $features}
  {#each $features as feature}
    <Feature {feature} />
  {/each}
{/if}
