<style>
  input[type=text],
  select {
    font-family: sans-serif;
    position: relative;
    width: 100%;
    /* Full width */
    padding: 12px;
    /* Some padding */
    border: 1px solid #ccc;
    /* Gray border */
    border-radius: 4px;
    /* Rounded borders */
    box-sizing: border-box;
    /* Make sure that padding and width stays in place */
    margin-top: 6px;
    /* Add a top margin */
    margin-bottom: 16px;
    /* Bottom margin */
    resize: vertical;
    /* Allow the user to vertically resize the textarea (not horizontally) */
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

<script>
    // import { saveEiv } from './firebase.js'

    export let categorias

    let categoriaSelect = ''
    let propostaInput = ''
    let justificativaInput = ''

    $: formObj = {
        categoria: categoriaSelect,
        proposta: propostaInput,
        justificativa : justificativaInput
    }

    function handleSubmit() {
        console.log(formObj)
        saveEiv(formObj)
    }

    function backPage () {
    dispatch('back', {})
    }

    function sendForm () {
      dispatch('send', formObj)
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label for="lname">Categoria</label><br>
    <select bind:value={categoriaSelect} id="categoriaSelect" placeholder="Categoria" required>
        <option value="" disabled selected>Selecione a categoria</option>
        {#each categorias as categoria}
        <option value={categoria.value}>
            {categoria.text}
        </option>
        {/each}
    </select>
    <br>
    <label for="fname">Proposta</label><br>
    <textarea bind:value={propostaInput} id="proposta" rows="4" cols="50" required></textarea>
    <br>
    <label for="fname">Justificativa</label><br>
    <textarea bind:value={justificativaInput} id="Justificativa" rows="4" cols="50" required></textarea>
    <br> 
    <input type="submit" value="Enviar">
</form>


