import { writable, derived } from 'svelte/store'

export const map = writable('')

export const features = writable({})

export const mode = writable(false)

export const user = writable('')

export const eivs = writable({
  categoria: ['', 'string'],
  processo_num: ['', 'string'],
  processo_ano: ['', 'integer'],
  empreendedor: ['', 'string'],
  empreendimento: ['', 'string'],
  atividade: ['', 'string'],
  area_const: ['', 'float'],
  status: ['', 'string'],
  parecer_aprov_num: ['', 'integer'],
  parec_aprov_ano: ['', 'integer'],
  valor_compens: ['', 'integer'],
  tipo_compens: ['', 'string'],
  nun_tcc: ['', 'integer'],
  ano_tcc: ['', 'integer'],
  execuc_compens: ['', 'string'],
  prazo_exec: ['', 'string'],
  num_termo_receb: ['', 'integer'],
  ano_termo_receb: ['', 'integer'],
  insc_imob: ['', 'string'],
  distrito: ['', 'string'],
  tempo_inic: ['', 'string'],
  tempo_fina: ['', 'string'],
  data_atualiz: ['', 'string']
})

export const newFeature = writable('')

export const newCoords = derived(newFeature,
  $newFeature => $newFeature ? [$newFeature.getLatLng().lat.toPrecision(8), $newFeature.getLatLng().lng.toPrecision(8)] : ''
)
