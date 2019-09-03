import { writable, derived } from 'svelte/store'

export const map = writable('')

export const features = writable([])

export const user = writable('')

export const geom = derived(features,
  $features => Array.isArray($features) ? $features.forEach(feature => feature.geometry.coordinates) : 'shit'
)

export const teste = writable({
  id: '',
  a: '',
  b: '',
  c: ''
})
