<script>
  import { createEventDispatcher } from 'svelte'
  import Switch from '../components/Switch.svelte'
  import Buttons from '../components/Buttons.svelte'
  
  const dispatch = createEventDispatcher()
  
  let existe
  let qualidade
  let calcerta
  let largura_maior
  let largura_menor

  $: formObj = {
    etapa: 'passeio',
    body: {
      existe: existe,
      qualidade: qualidade,
      calcerta: calcerta,
      largura_maior: largura_maior,
      largura_menor: largura_menor
    }
  }

  function backPage () {
    dispatch('back', {})
  }

  function sendForm () {
    dispatch('send', formObj)
  }
</script>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		margin: auto;
		width: 75%;
	}
	h2 {
		font-size: 1em;
		font-weight: normal;
		color: gray;
		margin-top: 8px;
		margin-bottom: 2px;
		align-self: start;
	}
	input[type="radio"] {
		font-size: 1em;
    opacity: 0;
    height: 1px;
		margin: 0;
  }
	input[type="number"] {
		font-size: 1em;
		align-self: stretch;
    height: 60px;
		border: 1px solid lightgray;
		border-radius: 2px;
	}
	label {
		display: flex;
		font-size: 1em;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
	}
	p {
		text-align: center;
		margin: auto;
	}
</style>

<form action="javascript:void(0);" on:submit={sendForm}>
  <h2>Calçada existe:</h2>
  <Switch>
    <label slot="good">
      <p>Sim</p>
      <input type="radio" name="existe" bind:group={existe} value={'sim'} required>
    </label>
    <label slot="bad">
      <p>Não</p>
      <input type="radio" name="existe" bind:group={existe} value={'não'} required>
    </label>
  </Switch>

  <h2>Estado da calçada:</h2>
  <Switch estados={3}>
    <label slot="good">
      <p>Bom</p>
      <input type="radio" name="qualidade" bind:group={qualidade} value={'noref'} required>
    </label>
    <label slot="medium">
      <p>Precisa de reforma</p>
      <input type="radio" name="qualidade" bind:group={qualidade} value={'ref'} required>
    </label>
    <label slot="bad">
      <p>Não há / arruinada</p>
      <input type="radio" name="qualidade" bind:group={qualidade} value={'troca'} required>
    </label>
  </Switch>

  <h2>Padrão Calçada Certa:</h2>
  <Switch>
    <label slot="good">
      <p>Sim</p>
      <input type="radio" name="calcerta" bind:group={calcerta} value={'sim'} required>
    </label>
    <label slot="bad">
      <p>Não</p>
      <input type="radio" name="calcerta" bind:group={calcerta} value={'não'} required>
    </label>
  </Switch>

  <h2>Dimensões (em centímetros):</h2>
  <input type="number" bind:value={largura_maior} placeholder="Largura do trecho mais largo" min="0" max="2000" required>
  <input type="number" bind:value={largura_menor} placeholder="Largura do trecho mais estreito" min="0" max="2000" required>
    
  <Buttons on:click={backPage} />
</form>
