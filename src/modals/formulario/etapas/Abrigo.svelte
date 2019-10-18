<script>
	import { createEventDispatcher } from 'svelte'
	import Switch from '../components/Switch.svelte'
	import Buttons from '../components/Buttons.svelte'
	
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

<form action="javascript:void(0);" on:submit={sendForm}>
	<h2>Abrigo existe:</h2>
	<Switch>
		<label slot="good">
			<input type="radio" name="existe" bind:group={existe} value={1} required>
			<p>Sim</p>
		</label>
		<label slot="bad">
			<input type="radio" name="existe" bind:group={existe} value={0} required>
			<p>Não</p>
		</label>
	</Switch>
	
	<h2>Modelo:</h2>
		<select bind:value={modeloSelecionado}>
		<option value='' selected disabled>Selecionar modelo</option>
		{#each modelos as modelo}
			<option value={modelo}>
				{'Modelo: ' + modelo}
			</option>
		{/each}
	</select>

	<h2>Estado de conservação:</h2>
	<Switch estados={3}>
		<label slot="good">
			<p>Boa</p>
			<input type="radio" name="qualidade" bind:group={qualidade} value={'boa'} required>
		</label> 
		<label slot="medium">
			<p>Precisa de reforma</p>
			<input type="radio" name="qualidade" bind:group={qualidade} value={'media'} required>
		</label>
		<label slot="bad">
			<p>Não há / arruinado</p>
			<input type="radio" name="qualidade" bind:group={qualidade} value={'ruim'} required>
		</label>
	</Switch>

	<h2>Dimensões (em centímetros):</h2>
	<input type="number" bind:value={largura_maior} placeholder="Fundo" min="0" max="2000" required>
	<input type="number" bind:value={largura_menor} placeholder="Lateral" min="0" max="2000" required>

	<Buttons on:click={backPage} />
</form>