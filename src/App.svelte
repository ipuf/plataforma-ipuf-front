<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Map from './map/Map.svelte'
	import Layers from './map/Layers.svelte'
	import Draw from './map/Draw.svelte'

	import Sidenav from './sidenav/Sidenav.svelte'
	import ModalBtn from './sidenav/ModalBtn.svelte'
	
	import Modal from './modals/Modal.svelte'
	import User from './modals/User.svelte'
	import Insert from './modals/Insert.svelte'
	import Edit from './modals/Edit.svelte'
	import Table from './modals/Table.svelte'

	import Icon from 'svelte-awesome'
	import { cog, user, plus, edit, table } from 'svelte-awesome/icons'

	import { mode, marker } from './utils/stores.js'

	let expanded = false
	let modal = false
	let selected = false

	const content = [
		{ id: 'user', icon: user, component: User, text: "Usuário" },
		{ id: 'plus', icon: plus,  component: Insert , text: "Inserir processo" },
		{ id: 'edit', icon: edit,  component: Edit, text: "Editar processo" },
		{ id: 'table', icon: table,  component: Table, text: "Visualizar tabela" },
	]

	function changeModal (newSelection, newModal) {
		[ selected, modal ] = [ newSelection, newModal ]
		if (newSelection === false) {
      if ($marker) $marker.remove()
      $marker = false
		}
	}

	function exitMode (e) {
		console.log(e.key)
		if (e.key === "Escape") {
			$mode = false
		}
	}
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

<svelte:body on:keypress={(e) => exitMode(e)}/>

{#if modal && !$mode}
	<Modal on:click={() => changeModal(false, false)}>
		<svelte:component this={modal}/>
	</Modal>
{:else if $mode === 'draw'}
	<Draw/>
{/if}

{#if !$mode}
	<Sidenav {expanded} on:click={() => expanded = !expanded}>
		{#each content as { id, icon, component, text }}
			<ModalBtn {expanded} {selected} {id} on:click={() => changeModal(id, component)}>
				<Icon data={icon} scale=2 style="color:{selected === id ? 'white' : 'gray'};"/>
				<p slot="text">{text}</p>
			</ModalBtn>
		{/each}
	</Sidenav>
{/if}

<Map lat={-27.59} lon={-48.54} zoom={12}>
	<Layers/>
</Map>
