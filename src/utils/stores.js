import { writable, derived } from 'svelte/store'

const map = writable('')

const features = writable({})

const mode = writable(false)

const marker = writable(false)

const coords = derived(
  marker,
  $marker => $marker ? [$marker.getLatLng().lng, $marker.getLatLng().lat]  : []
)

const user = writable('')

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

export { map, features, mode, marker, coords, user }
