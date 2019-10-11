<script>
  import MarkerBtn from '../inputs/MarkerBtn.svelte'
  import { eivs, newCoords } from '../utils/stores.js'
  
  $: lat = $newCoords ? $newCoords[0] : 'lat'
  $: lng = $newCoords ? $newCoords[0] : 'lng'
  
  function handleSubmit () {
    const feature = makeFeature(lat, lng)

    dispatch('message', {
      feature: feature
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
  <MarkerBtn/>
 
  <input type="submit" value="Enviar">
</form>
