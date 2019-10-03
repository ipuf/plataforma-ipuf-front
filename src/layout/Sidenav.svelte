<script>
  import Icon from 'svelte-awesome'
  import { beer, bars, times, chevronDown } from 'svelte-awesome/icons'
  import { createEventDispatcher } from 'svelte';

  import Alternativos from '../categories/Alternativos.svelte'
  import Bus from '../categories/Bus.svelte'
  import Ciclos from '../categories/Ciclos.svelte'
  import CircViaria from '../categories/CircViaria.svelte'
  import Logistica from '../categories/Logistica.svelte'
  import Pedestres from '../categories/Pedestres.svelte'
  import Taxis from '../categories/Taxis.svelte'

  const dispatch = createEventDispatcher()
  
  export let expanded = false
  let selected = false
  
  const categorias = [
    { id: 'alt', component: Alternativos, color: 'red', icon: beer, text: 'Alternativos' },
    { id: 'bus', component: Bus, color: 'red', icon: beer, text: 'Ônibus' },
    { id: 'cic', component: Ciclos, color: 'red', icon: beer, text: 'Ciclos' },
    { id: 'crc', component: CircViaria, color: 'red', icon: beer, text: 'Circulação Viária' },
    { id: 'log', component: Logistica, color: 'red', icon: beer, text: 'Logística' },
    { id: 'ped', component: Pedestres, color: 'red', icon: beer, text: 'Pedestres' },
    { id: 'tax', component: Taxis, color: 'red', icon: beer, text: 'Táxis' }
  ]

  function toggleSidebar () {
    if (!selected) {
      expanded = !expanded
      dispatch('toggle', {
        expanded: expanded
      })
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
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
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
  .menu {
    display: flex;
    padding: 0;
    margin: 10px;
  }
  @media (max-width: 599px) {
    ul {
      display: none;
    }
    .expanded {
      display: flex
    }
  }
  @media (min-width: 600px) and (max-width: 899px) {
  }
  @media (min-width: 900px) and (max-width: 1199px) {
  }
  @media (min-width: 1200px) and (max-width: 1799px) {
  }
</style>

{#if !expanded}
  <span class="menu" on:click={toggleSidebar}><Icon data={bars} scale=2 style="color: gray;"/></span>
  <ul class:expanded>
    {#each categorias as categoria}
      <li on:click={() => selected = categoria.component}><Icon data={categoria.icon} scale=2 style="color: gray;"/></li>
    {/each}
  </ul>
{:else}
  <span class="menu" on:click={toggleSidebar}><Icon data={times} scale=2 style="color: gray;"/></span>
  <ul class:expanded>
    {#each categorias as categoria (categoria)}
      <li on:click={() => toggleCategory(categoria.id)}>
        <div class="catHeader">
          <Icon data={categoria.icon} scale=2.25 style="color: gray;"/>
          <p>{categoria.text}</p><Icon data={chevronDown} style="color: gray;"/>
        </div>
        <div class="catContent">
          {#if selected === categoria.id}
            <svelte:component this={categoria.component}/>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
{/if}