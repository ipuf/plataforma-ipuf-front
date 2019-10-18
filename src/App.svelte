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


		 


	import Form from './modals/Form.svelte'

	import Icon from 'svelte-awesome'
	import { cog, user, plus, edit, table } from 'svelte-awesome/icons'

	let expanded = false
	let modal = false
	let selected = false
	let posicao = 0
	// $: posicao = posicaoEixo


	const content = [
		{ id: 'pedestres', icon: cog, component: Form, text: "Pedestres", posicao: 0 },
		{ id: 'ciclos', icon: cog, component: Form, text: "Ciclos", posicao: 1 },
		{ id: 'onibus', icon: cog,  component: Form, text: "Ônibus", posicao: 2 },
		{ id: 'velocidade', icon: cog,  component: Form, text: "Velocidade", posicao: 3 },
		{ id: 'indMoto', icon: cog,  component: Form, text: "Individual Motorizado", posicao: 4 },
		{ id: 'circVia', icon: cog,  component: Form, text: "Circulação Viária", posicao: 5 },
		{ id: 'carLog', icon: cog,  component: Form, text: "Carga e Logística", posicao: 6 },
		{ id: 'taxApp', icon: cog,  component: Form, text: "Táxi e Aplicativos", posicao: 7 },
		{ id: 'modAlt', icon: cog,  component: Form, text: "Modos Alternativos", posicao: 8 }
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
	<Modal on:click={() => [selected, modal, posicao] = [false, false, false]}>
		<Form {posicao} />
	</Modal>
{/if}

<Sidenav {expanded} on:click={() => expanded = !expanded}>
	{#each content as { id, icon, component, text, posicao }}
		<ModalBtn {expanded} {selected} {id} on:click={() => [selected, modal] = [id, component]}>
			<Icon data={icon} scale=2 style="color:{selected === id ? 'white' : 'gray'};"/>
			<p slot="text">{text}</p>
		</ModalBtn>
	{/each}
</Sidenav>



<!-- 
{#if modal && !$mode}
	<Modal on:click={() => [selected, modal] = [false, false]}>
		<svelte:component on:close={() => [selected, modal] = [false, false]} this={modal}/>
	</Modal>
{:else if $mode === 'draw'}
	<Draw/>
{/if}

<Sidenav {expanded} on:click={() => expanded = !expanded}>
	{#each content as { id, icon, component, text }}
		<ModalBtn {expanded} {selected} {id} on:click={() => [selected, modal] = [id, component]}>
			<Icon data={icon} scale=2 style="color:{selected === id ? 'white' : 'gray'};"/>
			<p slot="text">{text}</p>
		</ModalBtn>
	{/each}
</Sidenav> -->



<Map lat={-27.59} lon={-48.54} zoom={12}>
  <Layers/>
</Map>

