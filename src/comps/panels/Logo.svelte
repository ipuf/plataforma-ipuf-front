<script>
  import { onMount, getContext } from 'svelte'
  import { L, key } from '../../utils/leaflet.js'
  
  const { getMap } = getContext(key)
  const map = getMap()

  let container
  let src = './ipuf-01.png'
  let alt = 'Logo IPUF'
  
  L.Control.Watermark = L.Control.extend({
    onAdd: (map) => {
      return container
    },
    onRemove: (map) => {
      // Do nothing
    }
  })

  L.control.watermark = (opts) => {
    return new L.Control.Watermark(opts)
  }

  onMount(() => {
    const watermark = L.control.watermark({ position: 'bottomright' }).addTo(map)
  })
</script>

<style>
  img { 
    width: 200px; 
  }
</style>

<img bind:this={container} {src} {alt}/>