<script>
  import { createEventDispatcher } from 'svelte'
  import Select from '../inputs/Select.svelte'
  import Text from '../inputs/Text.svelte'
  import Number from '../inputs/Number.svelte'
  import Date from '../inputs/Date.svelte'
  import { inputArrays } from '../../utils/arrays.js'
  import { makeFeature, encodeCoords } from '../../utils/helpers.js'
  import { eivs, newCoords } from '../../utils/stores.js'
  
  const dispatch = createEventDispatcher()

  $: lat = $newCoords ? $newCoords[0] : 'lat'
  $: lng = $newCoords ? $newCoords[1] : 'lng'
  $: $eivs.id = $newCoords ? encodeCoords($newCoords) : ''
  
  function handleSubmit () {
    const feature = makeFeature($eivs, lat, lng)

    dispatch('message', {
      dataref: 'eivs',
      feature: feature,
      id: feature.properties.id
    })
  }
</script>

<style>
  form {
    padding-top: 3%;
    font-family: sans-serif;
  }
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input[type=submit]:hover {
    background-color: #45a049;
  }
  input::placeholder {
    color: rgb(150, 150, 150);
  }
</style>

<form on:submit|preventDefault={handleSubmit}>

  <Select categoria={inputArrays.categorias} bind:selected={$eivs.categoria[0]} placeholder="Tipo de estudo de impacto"/>
  <Number bind:value={$eivs.processo_num[0]} placeholder="Ex.: 115.398" label="Número do processo" min="0" />
  <Number bind:value={$eivs.processo_ano[0]} placeholder="Ex.: 2019" label="Ano do processo" min="1900" max="2100" />
  <Text bind:value={$eivs.empreendedor[0]} placeholder="Ex.: Construtora ABC" label="Nome do empreendedor"/>
  <Text bind:value={$eivs.empreendimento[0]} placeholder="Ex.: Residencial XYZ" label="Nome do empreendimento"/>
  <Text bind:value={$eivs.atividade[0]} placeholder="Ex.: Comercial" label="Atividade do empreendimento"/>
  <Number bind:value={$eivs.area_const[0]} placeholder="Ex.: 14.359,35" label="Área total construída do empreendimento (m²)" step="0.01" min="0.00" max="1000000.00" req='false'/>
  <Select categoria={inputArrays.status} bind:selected={$eivs.status[0]} placeholder="Situação do processo"/>
  <Number bind:value={$eivs.parecer_aprov_num[0]} placeholder="Ex.: 295" label="Número do parecer de aprovação" min="0" req='false'/>
  <Number bind:value={$eivs.parec_aprov_ano[0]} placeholder="Ex.: 2019" label="Ano do parecer de aprovação" min="1900" max="2100" req='false' />
  <Number bind:value={$eivs.valor_compens[0]} placeholder="Ex.: 350" label="Valor das medidas de mitigação e/ou compensação (CUB)" min="0" req='false' />
  <Select categoria={inputArrays.compensação} bind:selected={$eivs.tipo_compens[0]} placeholder="Tipo de mitigação e/ou compensação" req='false' />
  <Number bind:value={$eivs.nun_tcc[0]} placeholder="Ex.: 22" label="Número do termo de compromisso de compensação" min="0" req='false' />
  <Number bind:value={$eivs.ano_tcc[0]} placeholder="Ex.: 2019" label="Ano do termo de compromisso de compensação" min="1900" max="2100" req='false' />
  <Select categoria={inputArrays.situação} bind:selected={$eivs.execuc_compens[0]} placeholder="Situação da execução do termo de compromisso" req='false' />
  <Date bind:value={$eivs.prazo_exec[0]} label="Data de execução" req='false' />
  <Number bind:value={$eivs.num_termo_receb[0]} placeholder="Ex.: 15" label="Número do termo de recebimento" min="0" req='false' />
  <Number bind:value={$eivs.ano_termo_receb[0]} placeholder="Ex.: 2019" label="Ano do termo de recebimento"min="1900" max="2100" req='false' />
  <Number bind:value={$eivs.insc_imob[0]} placeholder="Ex.: 11075947593" label="Inscrição imobiliária" min="10000000000" />
  <Select categoria={inputArrays.distritos} bind:selected={$eivs.distrito[0]} placeholder="Nome do distrito"/>
  <Date bind:value={$eivs.tempo_inic[0]} label="Data de início do processo no IPUF"/>
  <Date bind:value={$eivs.tempo_fina[0]} label="Data de finalização do processo no IPUF" req='false' />
  <Date bind:value={$eivs.data_atualiz[0]} label="Última data de atualização do processo para controle"/>
  
  <input type="submit" value="Enviar">
</form>