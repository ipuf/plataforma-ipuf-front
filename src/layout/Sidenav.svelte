<script>
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome'
  import { beer, bars, chevronLeft, chevronDown } from 'svelte-awesome/icons'
  import { createEventDispatcher } from 'svelte';

  import Alternativos from '../categories/Alternativos.svelte'
  import Bus from '../categories/Bus.svelte'
  import Ciclos from '../categories/Ciclos.svelte'
  import CircViaria from '../categories/CircViaria.svelte'
  import Logistica from '../categories/Logistica.svelte'
  import Pedestres from '../categories/Pedestres.svelte'
  import Taxis from '../categories/Taxis.svelte'

  const dispatch = createEventDispatcher()

  const iconStyles = `
    color: gray;
  `
  const categorias = [
    { id: 'alt', component: Alternativos, color: 'red', icon: beer, text: 'Alternativos' },
    { id: 'bus', component: Bus, color: 'red', icon: beer, text: 'Ônibus' },
    { id: 'cic', component: Ciclos, color: 'red', icon: beer, text: 'Ciclos' },
    { id: 'crc', component: CircViaria, color: 'red', icon: beer, text: 'Circulação Viária' },
    { id: 'log', component: Logistica, color: 'red', icon: beer, text: 'Logística' },
    { id: 'ped', component: Pedestres, color: 'red', icon: beer, text: 'Pedestres' },
    { id: 'tax', component: Taxis, color: 'red', icon: beer, text: 'Táxis' }
  ]

  export let content = false
  let selected = false
  
  function toggleSidebar () {
    if (!selected) {
      content = !content
      dispatch('toggle', { content: content })
    } else {
      selected = false
    }
  }

  function toggleCategory (id) {
    if (selected === id) {
      selected = false
    } else {
      selected = id
    }
    console.log(selected)
  }
</script>

<style>
  .icons {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .content {
    flex: 1;
    display: none;
  }
  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ddd
  }
  li:hover {
    background-color: rgba(255,255,255,0.6);
    cursor: pointer;
  }
  .catHeader {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .toggle {
    margin: 0 4px;
  }
  @media (max-width: 599px) {
    .hidden {
      display: none;
    }
    .content {
      display: flex;
    }
  }
  @media (min-width: 600px) and (max-width: 899px) {
  }
  @media (min-width: 900px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1799px) {
  }
</style>


<div class="icons">
  {#if !content}
    <div class="toggle" on:click={toggleSidebar} in:fade="{{duration: 300}}">
      <Icon data={bars} scale=2 style={iconStyles}/>
    </div>
  {:else}
    <div class="toggle" on:click={toggleSidebar} in:fade="{{delay: 200, duration: 300}}">
      <Icon data={chevronLeft} scale=2 style={iconStyles}/>
    </div>
  {/if}

  <ul class="hidden">
    {#each categorias as categoria}
      <li on:click={() => toggleCategory(categoria.id)}>
        <Icon data={categoria.icon} scale=2 style={iconStyles}/>
      </li>
    {/each}
  </ul>
</div>

{#if content}
  <div class:content in:fade="{{delay: 200, duration: 300}}">
    <ul>
      {#each categorias as categoria (categoria)}
        <li on:click={() => toggleCategory(categoria.id)}>
          <div class="catHeader">
            <p>{categoria.text}</p>
            <Icon data={chevronDown} style={iconStyles}/>
          </div>
          <div class="catContent">
            {#if selected === categoria.id}
              <svelte:component this={categoria.component}/>
            {/if}
          </div>
        </li>
      {/each}
    </ul>
  </div>
{/if}
