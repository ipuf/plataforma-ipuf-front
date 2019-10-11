<script>
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome'
  import { cog, user, plus, edit, table } from 'svelte-awesome/icons'

  import Modal from './Modal.svelte'
  import TestBtn from '../modals/TestBtn.svelte'
  import Profile from '../modals/Profile.svelte'
  import Insert from '../modals/Insert.svelte'
  import View from '../modals/View.svelte'
  import Table from '../modals/Table.svelte'

  const modes = [
    { component: TestBtn, icon: cog, text: 'Botão teste' },
    { component: Profile, icon: user, text: 'Usuário' },
    { component: Insert, icon: plus, text: 'Inserir processo' },
    { component: View, icon: edit, text: 'Editar processo' },
    { component: Table, icon: table, text: 'Visualizar tabela' },
  ]

  let expanded = false 
  let selected = false
  let clicked = ''
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
	}
  .btns {
    margin: 0;
    padding: 30px 10px;
    height: 50px;
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 35px;
    display: flex;
    align-items: center;
  }
  p {
    flex: 1;
    margin-left: 10px;
  }
  .clicked {
    background-color: darkblue;
  }
  .clicked * {
    color: white;
  }
</style>

<aside 
  class:expanded 
  on:mouseenter={() => expanded = true} 
  on:mouseleave={() => expanded = false}
  >
  {#each modes as mode}
    <span 
      class:clicked="{selected === mode.component}"
      class="btns" 
      on:click={() => selected === mode.component ? selected = false : selected = mode.component}
      >
        <span class="icon">
          <Icon data={mode.icon} scale=2 style="color:{selected === mode.component ? 'white' : 'gray'};"/>
        </span>
        {#if expanded}
          <p in:fade="{{delay: 300, duration: 200}}">{mode.text}</p>
        {/if}
    </span>
  {/each}
</aside>

{#if selected}
	<Modal {selected} on:click={() => selected = false}/>
{/if}
