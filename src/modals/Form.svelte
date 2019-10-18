<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import { slide } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'

	// import { db } from './utils/firebase.js'

    import FormTemplate from './etapas/FormTemplate'
    import Cadastro from './etapas/Cadastro.svelte'

	// import Header from './formulario/etapas/Header.svelte'
	import Local from './formulario/etapas/Local.svelte'
	import Passeio from './formulario/etapas/Passeio.svelte'
	import Abrigo from './formulario/etapas/Abrigo.svelte'
	import Midias from './formulario/etapas/Midias.svelte'
	import Result from './formulario/etapas/Result.svelte'

	let form = {}
	let auth = false
	let done = false
	let success = false
	let uid = ''
	let etapa = 0
	let titulos = ['Local','Calçada','Ponto','Propaganda']

	$: atual = titulos[etapa]

	function backPage () {
		if (etapa > 0) {
			setTimeout(() => etapa -= 1, 300)
		} else if (etapa === 0) {
			setTimeout(() => auth = false, 300)
		}
	}

	function nextPage (e) {
		form[e.detail.etapa] = e.detail.body
		if (!auth) {
			uid = e.detail.body.id
			return setTimeout(() => auth = true, 300)
		}
		setTimeout(() => etapa += 1, 300)
	}

	function sendForm (e) {
		form[e.detail.etapa] = e.detail.body
		console.log(form)
		db.collection(uid).add(form)
			.then(() => {
				done = true
				success = true
			})
			.catch((e) => {
				done = true
				success = false
			})
	}

	function nextForm (e) {
		etapa = 0
		form = {}
		done = false
		return setTimeout(() => success = '', 300)
	}
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		background: #F7F7F7;
		font-family: 'Roboto', sans-serif
	}
	div {
		height: 100%;
		width: 100%;
	}
</style>

<!-- {#if !auth}
	<div transition:slide="{{ easing: quintOut }}">
		<Auth on:send={nextPage} />
	</div>
{:else if auth && !done }
	
{:else if auth && done}
	<div transition:slide="{{ easing: quintOut }}">
		<Result {success} on:click={nextForm} />
	</div>
{/if} -->


<!-- <Header {atual} {etapa}/>
{#if etapa === 0}
    <div transition:slide="{{ easing: quintOut }}">
        <Local on:send={nextPage} on:back={backPage} />
    </div>		
{:else if etapa === 1}
    <div transition:slide="{{ easing: quintOut }}">
        <Passeio on:send={nextPage} on:back={backPage} />
    </div>
{:else if etapa === 2}
    <div transition:slide="{{ easing: quintOut }}">
        <Abrigo on:send={nextPage} on:back={backPage} />
    </div>
{:else if etapa === 3}
    <div transition:slide="{{ easing: quintOut }}">
        <Midias on:send={sendForm} on:back={backPage} />
    </div>
{/if}
 -->




{#if etapa === 0}
    <div transition:slide="{{ easing: quintOut }}">
        <Cadastro on:send={nextPage} on:back={backPage} />
    </div>		
{:else if etapa === 1}
    <div transition:slide="{{ easing: quintOut }}">
        <FormTemplate on:send={nextPage} on:back={backPage} />
    </div>
{:else if etapa === 2}
    <div transition:slide="{{ easing: quintOut }}">
        <Abrigo on:send={nextPage} on:back={backPage} />
    </div>
{:else if etapa === 3}
    <div transition:slide="{{ easing: quintOut }}">
        <Midias on:send={sendForm} on:back={backPage} />
    </div>
{/if}