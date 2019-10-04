<script>
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome'
  import { beer, chevronRight, chevronLeft, chevronDown } from 'svelte-awesome/icons'
  import { createEventDispatcher } from 'svelte';

  import Alternativos from '../modals/Alternativos.svelte'
  import Bus from '../modals/Bus.svelte'
  import Ciclos from '../modals/Ciclos.svelte'
  import CircViaria from '../modals/CircViaria.svelte'
  import Logistica from '../modals/Logistica.svelte'
  import Pedestres from '../modals/Pedestres.svelte'
  import Taxis from '../modals/Taxis.svelte'

  export let expanded = false
  let selected = false

  const dispatch = createEventDispatcher()
  const categorias = [
    { component: Alternativos, icon: beer, text: 'Alternativos' },
    { component: Bus, icon: beer, text: 'Ônibus' },
    { component: Ciclos, icon: beer, text: 'Ciclos' },
    { component: CircViaria, icon: beer, text: 'Circulação Viária' },
    { component: Logistica, icon: beer, text: 'Logística' },
    { component: Pedestres, icon: beer, text: 'Pedestres' },
    { component: Taxis, icon: beer, text: 'Táxis' },
    { component: Taxis, icon: beer, text: 'Táxis' },
    { component: Taxis, icon: beer, text: 'Táxis' },
    { component: Taxis, icon: beer, text: 'Táxis' }
  ]
 
  function toggleSidebar () {
    expanded = !expanded
    dispatch('toggle', { expanded: expanded })
  }

  function toggleCategory (component) {
    dispatch('select', { selected: component })
  }
</script>

<style>
  .btns {
    margin: 0;
    padding: 0;
    height: 45px;
    align-self: flex-start;
    display: flex;
    align-items: center;
  }
  p {
    flex: 1;
    margin-left: 15px;
  }
</style>

<span class="btns" on:click={() => toggleSidebar()} in:fade="{{delay: 300, duration: 300}}">
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
