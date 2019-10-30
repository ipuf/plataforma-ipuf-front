import { writable, derived } from 'svelte/store'
import { Util } from 'leaflet'

const map = writable('')

const features = writable({})

const mode = writable(false)

const marker = writable(false)

const coords = derived(
  marker,
  $marker => $marker ? [
    Util.formatNum($marker.getLatLng().lng),
    Util.formatNum($marker.getLatLng().lat)
  ] : []
)

const user = writable('')

export { map, features, mode, marker, coords, user }
