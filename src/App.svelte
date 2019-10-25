<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,600,800|Montserrat:500,600|Roboto&display=swap" rel="stylesheet">
</svelte:head>

<script>
	import Map from './map/Map.svelte'
	import Layers from './map/Layers.svelte'
	import Draw from './map/Draw.svelte'

	import Sidenav from './sidenav/Sidenav.svelte'
	import ModalBtn from './sidenav/ModalBtn.svelte'
	import ToggleBtn from './sidenav/ToggleBtn.svelte'
	
	import Modal from './modals/Modal.svelte'
	import CloseBtn from './modals/CloseBtn.svelte'
	import User from './modals/User.svelte'
	import Insert from './modals/Insert.svelte'
	import Edit from './modals/Edit.svelte'
	import Table from './modals/Table.svelte'

	import Icon from 'svelte-awesome'
	import { 
		cog, 
		user, 
		plus, 
		edit, 
		table, 
		chevronRight, 
		chevronLeft 
	} from 'svelte-awesome/icons'
	
	import { fade } from 'svelte/transition'

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
		if (newSelection === false && $marker) {
      $marker.remove()
      $marker = false
		}
	}

	function exitMode (e) {
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
		font-size: 13px;
  	transform-origin: 0 0;
	}
	:global(*) {
		font-family: 'Raleway', sans-serif;
		font-weight: 600;
		box-sizing: border-box;
		text-rendering: optimizeLegibility;
	}
	:global(button) {
		border: 1 px solid transparent;
		border-radius: .5rem;
		line-height: 1.65;
		padding: 0.75rem 1.55rem;
		text-align: center;
		text-transform: uppercase;
		transition: all .3s ease;
		user-select: none;
		vertical-align: middle;
		white-space: nowrap;
	}
	:global(button):not(:disabled) {
		cursor: pointer;
	}
	p {
		font-weight: 600;
	}
</style>

<svelte:body on:keydown={(e) => exitMode(e)}/>

{#if !$mode}
	{#if modal}
		<Modal on:click={() => changeModal(false, false)}>
			<svelte:component on:close={() => changeModal(false, false)} this={modal}/>
			<CloseBtn on:click={() => changeModal(false, false)}/>
		</Modal>
	{/if}

	<Sidenav {expanded}>
		<ToggleBtn on:click={() => expanded = !expanded}>
			{#if !expanded}
				<Icon data={chevronRight} scale=2 style="color:rgba(90,91,117,.8);"/>
			{:else}
				<Icon data={chevronLeft} scale=2 style="color:rgba(90,91,117,.8);"/>
			{/if}
		</ToggleBtn>
		{#each content as { id, icon, component, text }}
			<ModalBtn {expanded} {selected} {id} on:click={() => changeModal(id, component)}>
				<Icon data={icon} scale=2 style="color:{selected === id ? 'white' : 'rgba(90,91,117,.8)'};"/>
				<p 
					in:fade={{ delay: 200, duration: 200 }}
					out:fade={{ duration: 200 }}
					style="color:{selected === id ? 'white' : 'rgba(90,91,117,.8)'};" 
					slot="text"
					>
					{text}
				</p>
			</ModalBtn>
		{/each}
	</Sidenav>
{:else if $mode === 'draw'}
	<Draw/>
{/if}

<Map lat={-27.59} lon={-48.54} zoom={12}>
	<Layers/>
</Map>
