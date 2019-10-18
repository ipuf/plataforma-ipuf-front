<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Map from './map/Map.svelte'
  	import Layers from './map/Layers.svelte'

	import Sidenav from './sidenav/Sidenav.svelte'
	import ModalBtn from './sidenav/ModalBtn.svelte'
	
	import Modal from './modals/Modal.svelte'
	import User from './modals/User.svelte'
	import Test from './modals/Test.svelte'
	import Insert from './modals/Insert.svelte'
	import Edit from './modals/Edit.svelte'
	import Table from './modals/Table.svelte'

	import FormGenerico from './modals/etapas/FormTemplate.svelte'
	import { categoriaCargaLogis, categoriaCiclos, categoriaCirculacaoViaria,
             categoriaIndividualMotorizado, categoriaModosAlternativos,
			 categoriaOnibus, categoriaPedestres, categoriaTaxisAplicativos } from './modals/etapas/arrStores.js'
			 

	import Form from './modals/Form.svelte'


	import Icon from 'svelte-awesome'
	import { cog, user, plus, edit, table } from 'svelte-awesome/icons'

	let expanded = false
	let modal = false
	let selected = false

	// const content = [
	// 	{ id: 'user', icon: user, component: User, text: "Usuário" },
	// 	{ id: 'test', icon: cog, component: Test, text: "Teste inserção" },
	// 	{ id: 'plus', icon: plus,  component: Insert , text: "Inserir processo" },
	// 	{ id: 'edit', icon: edit,  component: Edit, text: "Editar processo" },
	// 	{ id: 'table', icon: table,  component: Table, text: "Visualizar tabela" },
	// ]

	const content = [
		{ id: 'pedestres', icon: cog, component: User, text: "Pedestres" },
		{ id: 'ciclos', icon: cog, component: Test, text: "Ciclos" },
		{ id: 'onibus', icon: cog,  component: Insert , text: "Ônibus" },
		{ id: 'velocidade', icon: cog,  component: Edit, text: "Velocidade" },
		{ id: 'indMoto', icon: cog,  component: Table, text: "Individual Motorizado" },
		{ id: 'circVia', icon: cog,  component: Table, text: "Circulação Viária" },
		{ id: 'carLog', icon: cog,  component: Table, text: "Carga e Logística" },
		{ id: 'taxApp', icon: cog,  component: Table, text: "Táxi e Aplicativos" },
		{ id: 'modAlt', icon: cog,  component: Table, text: "Modos Alternativos" }
	]

	const descricao = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nisi ac dui tincidunt,' +
					  'sit amet dignissim ligula malesuada. Suspendisse condimentum, ex et tempus porttitor, mauris mauris' + 
					  'placerat metus, at eleifend ante elit ut ex. Ut leo velit, sagittis eget imperdiet in, pulvinar et sapien.' +
					  'Aenean elementum est nec tortor auctor, varius luctus nibh sodales. Nunc facilisis tempus mi nec gravida.' +
					  'Fusce eget risus eget metus tempor efficitur ac vel felis. Donec vel mi id massa molestie sagittis.'
</script>

<style>
	:global(html), :global(body) {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #f8f8f8;
	}
	:global(*) {
		font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
	}
</style>

{#if modal}
	<Modal on:click={() => [selected, modal] = [false, false]}>
		<!-- <svelte:component this={modal}/> -->
		<Form/>
		<!-- {descricao} -->
		<!-- <FormGenerico categorias={categoriaCiclos}/> -->
	</Modal>
{/if}

<Sidenav {expanded} on:click={() => expanded = !expanded}>
	{#each content as { id, icon, component, text }}
		<ModalBtn {expanded} {selected} {id} on:click={() => [selected, modal] = [id, component]}>
			<Icon data={icon} scale=2 style="color:{selected === id ? 'white' : 'gray'};"/>
			<p slot="text">{text}</p>
		</ModalBtn>
	{/each}
</Sidenav>

<Map lat={-27.59} lon={-48.54} zoom={12}>
  <Layers/>
</Map>
