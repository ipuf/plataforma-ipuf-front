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
	select {
		font-size: 1em;
		color: gray;
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

<script>
	import { createEventDispatcher } from 'svelte'
	// import Switch from '../components/Switch.svelte'
	// import Buttons from '../components/Buttons.svelte'
	
  const dispatch = createEventDispatcher()
	
	let existe = 1 // 1 = existe, 0 = não existe
	let modeloSelecionado
	let modelos = ['A', 'B', 'C', 'D', 'E', 'F']
	let qualidade
	let largura_maior
	let largura_menor

	$: formObj = {
    etapa: 'abrigo',
    body: {
			existe: existe,
			modelo: modeloSelecionado,
			qualidade: qualidade,
			larg_maior: largura_maior,
			larg_menor: largura_menor
    }
  }

	function backPage () {
    dispatch('back', {})
	}
	
  function sendForm () {
    dispatch('send', formObj)
  }
</script>




<form action="javascript:void(0);" on:submit={sendForm}>
  <label for="search">Nome:</label>
  <input type="text" id="nome" required />

  <label for="search">CPF:</label>
  <input type="text" id="cpf" required />

  <label for="email">Email:</label>
  <input type="email" id="email" required />

  <label for="cep">CEP:</label>
  <input type="text" id="cep" required />

  <label for="telefone">Telefone:</label>
  <input type="text" id="telefone" />

  <label for="endereco">Endereço:</label>
  <input type="endereco" id="endereco" />

  <!-- <button on:click={Page}>Search</button> -->
  <button class="next" type="button" on:click={() => dispatch('next', formObj)}><span>Próximo </span></button>
  <!-- <button type="submit">Search</button> -->
  <!-- <Buttons on:click={backPage} /> -->
</form>
