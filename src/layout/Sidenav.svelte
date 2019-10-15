<script>
  import { createEventDispatcher } from 'svelte'
  import Icon from 'svelte-awesome'
  import { chevronRight, chevronLeft, cog, user, plus, edit, table } from 'svelte-awesome/icons'
  import Btn from './sidenav/Btn.svelte'

  const dispatch = createEventDispatcher()

  export let modal
  let expanded = false

  function toggleModal (modal) {
    dispatch('modal', {
      selected: modal
    })
  }
</script>

<style>
  aside {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
		z-index: 600;
		background: #fff;
		width: 70px;
		overflow-x: hidden;
		transition: all 0.3s ease-in-out;
    border-radius: 3px;
	}
	.expanded {
		width: 225px;
    transition: all 0.3s ease-in-out;
	}
</style>

<aside class:expanded>
  <Btn {modal} on:click={() => expanded = !expanded}>
    {#if !expanded}
      <Icon data={chevronRight} scale=2 style="color:'gray'};"/>
    {:else}
      <Icon data={chevronLeft} scale=2 style="color:'gray'};"/>
    {/if}
  </Btn>
  <Btn {expanded} {modal} content={'cog'} on:click={() => toggleModal('cog')}>
    <Icon data={cog} scale=2 style="color:{modal === 'cog' ? 'white' : 'gray'};"/>
    <p slot="text">Teste inserção</p>
  </Btn>
  <Btn {expanded} {modal} content={'user'} on:click={() => toggleModal('user')}>
    <Icon data={user} scale=2 style="color:{modal === 'user' ? 'white' : 'gray'};"/>
    <p slot="text">Usuário</p>
  </Btn>
  <Btn {expanded} {modal} content={'insert'} on:click={() => toggleModal('insert')}>
    <Icon data={plus} scale=2 style="color:{modal === 'plus' ? 'white' : 'gray'};"/>
    <p slot="text">Inserir processo</p>
  </Btn>
  <Btn {expanded} {modal} content={'edit'} on:click={() => toggleModal('edit')}>
    <Icon data={edit} scale=2 style="color:{modal === 'edit' ? 'white' : 'gray'};"/>
    <p slot="text">Editar processo</p>
  </Btn>
  <Btn {expanded} {modal} content={'table'} on:click={() => toggleModal('table')}>
    <Icon data={table} scale=2 style="color:{modal === 'table' ? 'white' : 'gray'};"/>
    <p slot="text">Tabela de atributos</p>
  </Btn>
</aside>
