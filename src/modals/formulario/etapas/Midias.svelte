<script>
	import { createEventDispatcher } from 'svelte'
	import Switch from '../components/Switch.svelte'
	import Checkswitch from '../components/Checkswitch.svelte'
	import Buttons from '../components/Buttons.svelte'

	const dispatch = createEventDispatcher()
	
	let dimensao
	let ladoUm = { prop: 0, faces: []}
	let ladoDois = { prop: 0, faces: []}
	let fundos = { prop: 0, faces: []}

	$: formObj = {
		etapa: 'midia',
		body: {
			ladoUm: ladoUm,
			ladoDois: ladoDois,
			fundos: fundos,
			dimensao: dimensao
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
	input[type="radio"], input[type="checkbox"] {
		font-size: 1em;
    opacity: 0;
    height: 1px;
		margin: 0;
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
	<h2>Lateral 1:</h2>
	<Switch>
		<label slot="good">
			<input type="radio" bind:group={ladoUm.prop} value={1}>
			<p>Possui midia</p>
		</label>
		<label slot="bad" for="l10">
			<input type="radio" bind:group={ladoUm.prop} value={0}>
			<p>Não possui midia</p>
		</label>
	</Switch>

	{#if ladoUm.prop === 1}
		<h2>Faces com mídia (Lateral 1):</h2>
		<Checkswitch>
			<label slot="one" for="lf1">
				<input type="checkbox" name="lf1" bind:group={ladoUm.faces} value={'interna'}>
				<p>Dentro</p>
			</label>
			<label slot="two" for="lf2">
				<input type="checkbox" name="lf2" bind:group={ladoUm.faces} value={'externa'}>
				<p>Fora</p>
			</label>
		</Checkswitch>
	{/if}

	<h2>Lateral 2:</h2>
	<Switch>
		<label slot="good">
			<input type="radio" bind:group={ladoDois.prop} value={1}>
			<p>Possui midia</p>
		</label>
		<label slot="bad">
			<input type="radio" bind:group={ladoDois.prop} value={0}>
			<p>Não possui midia</p>
		</label>
	</Switch>

	{#if ladoDois.prop === 1}
		<h2>Faces com mídia (Lateral 2):</h2>
		<Checkswitch>
			<label slot="one" for="lf21">
				<input type="checkbox" name="lf21" bind:group={ladoDois.faces} value={'interna'}>
				<p>Dentro</p>
			</label>
			<label slot="two" for="lf22">
				<input type="checkbox" name="lf22" bind:group={ladoDois.faces} value={'externa'}>
				<p>Fora</p>
			</label>
		</Checkswitch>
	{/if}

	<h2>Fundos:</h2>
	<Switch>
		<label slot="good">
			<input type="radio" bind:group={fundos.prop} value={1}>
			<p>Possui midia</p>
		</label>
		<label slot="bad">
			<input type="radio" bind:group={fundos.prop} value={0}>
			<p>Não possui midia</p>
		</label>
	</Switch>

	{#if fundos.prop === 1}
		<h2>Faces com mídia (Fundos):</h2>
		<Checkswitch>
			<label slot="one" for="ff1">
				<input type="checkbox" name="ff1" bind:group={fundos.faces} value={'interna'}>
				<p>Dentro</p>
			</label>
			<label slot="two" for="ff2">
				<input type="checkbox" name="ff2" bind:group={fundos.faces} value={'externa'}>
				<p>Fora</p>
			</label>
		</Checkswitch>
	{/if}

	<h2>Dimensão da mídia de fundos (tipo):</h2>
	<Switch estados={3}>
		<label slot="good">
			<input type="radio" bind:group={dimensao} value={'retrato'}>
			<p>Retrato</p>
		</label>
		<label slot="medium">
			<input type="radio" bind:group={dimensao} value={'box'}>
			<p>Box</p>
		</label>
		<label slot="bad">
			<input type="radio" bind:group={dimensao} value={'box'}>
			<p>Não há</p>
		</label>
	</Switch>
	
	<Buttons on:click={backPage} />
</form>
