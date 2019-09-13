import { writable } from 'svelte/store'

export const map = writable('')

export const features = writable({})

export const editMode = writable(false)

export const rendered = writable(false)

export const teste = writable({
  id: '',
  a: '',
  b: '',
  c: ''
})

export const user = writable('')
