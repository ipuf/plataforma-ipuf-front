<script>
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome'
  import { beer, chevronRight, chevronLeft, chevronDown } from 'svelte-awesome/icons'
  import { createEventDispatcher } from 'svelte';

  import Alternativos from '../categories/Alternativos.svelte'
  import Bus from '../categories/Bus.svelte'
  import Ciclos from '../categories/Ciclos.svelte'
  import CircViaria from '../categories/CircViaria.svelte'
  import Logistica from '../categories/Logistica.svelte'
  import Pedestres from '../categories/Pedestres.svelte'
  import Taxis from '../categories/Taxis.svelte'

  export let expanded = false

  const dispatch = createEventDispatcher()
  const iconStyles = `
    color: gray;
  `
  const categorias = [
    { component: Alternativos, icon: beer, text: 'Alternativos' },
    { component: Bus, icon: beer, text: 'Ônibus' },
    { component: Ciclos, icon: beer, text: 'Ciclos' },
    { component: CircViaria, icon: beer, text: 'Circulação Viária' },
    { component: Logistica, icon: beer, text: 'Logística' },
    { component: Pedestres, icon: beer, text: 'Pedestres' },
    { component: Taxis, icon: beer, text: 'Táxis' }
  ]

  let selected = false
  
  function toggleSidebar () {
    if (!selected) {
      expanded = !expanded
      dispatch('toggle', { expanded: expanded })
    } else {
      selected = false
    }
  }

  function toggleCategory (component) {
    if (selected === component) {
      selected = false
    } else if (selected != component && !expanded) {
      expanded = !expanded
      dispatch('toggle', { expanded: expanded })
      selected = component
    } else {
      selected = component
    }
    console.log(selected)
  }
</script>

<style>
  .btns {
    margin: 0;
    padding: 0;
    height: 37.5px;
    align-self: flex-start;
    display: flex;
    align-items: center;
  }
  p {
    flex: 1;
    margin-left: 15px;
  }
</style>

<span class="btns" on:click={toggleSidebar} in:fade="{{delay: 300, duration: 300}}">
  {#if !expanded}
    <Icon data={chevronRight} scale=2 style="color:gray; margin-left: 6px;"/>
  {:else}
    <Icon data={chevronLeft} scale=2 style="color:gray; margin-left: 6px;"/>
  {/if}
</span>

{#each categorias as categoria}
  <span class="btns" on:click={() => toggleCategory(categoria.component)}>
    <Icon data={categoria.icon} scale=2 style="color:gray;"/>
    {#if expanded}
      <p in:fade="{{delay: 300, duration: 300}}">{categoria.text}</p>
    {/if}
  </span>
{/each}

{#if selected}
  <svelte:component this={selected}/>
{/if}
