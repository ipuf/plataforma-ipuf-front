<script>
  import { createEventDispatcher } from 'svelte'
  import Text from '../inputs/Text.svelte'
  import { makeFeature, encodeCoords } from '../../utils/helpers.js'
  import { testeProps, newCoords } from '../../utils/stores.js'
  
  const dispatch = createEventDispatcher()

  $: lat = $newCoords ? $newCoords[0] : 'lat'
  $: lng = $newCoords ? $newCoords[1] : 'lng'
  $: $testeProps.id = $newCoords ? encodeCoords($newCoords) : ''

  function handleSubmit () {
    const feature = makeFeature($testeProps, lat, lng)

    dispatch('message', {
      dataref: 'teste',
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
  <Text bind:value={$testeProps.a} placeholder="nome" label="Nome:"/>
  <Text bind:value={$testeProps.b} placeholder="idade" label="Idade:"/>
  <Text bind:value={$testeProps.c} placeholder="email" label="Email:"/>
  <p>{lat}</p>
  <p>{lng}</p>
  <p>{$testeProps.id}</p>
  <input type="submit" value="Enviar">
</form>