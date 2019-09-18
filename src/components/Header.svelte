<script>
  import { createEventDispatcher } from 'svelte'
  import Icon from 'svelte-awesome'
  import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

  export let sidenav
  
  const dispatch = createEventDispatcher()

  function toggleSide () {
    dispatch('toggleSide', {
      state: !sidenav
    })
  }
</script>

<style>
  span {
    cursor: pointer;
    color: #003366;
    transition: all 0.5s ease-in-out;
  }
  /* .search {
    margin-left: 42px;
  } */
</style>

<span class:sidenav on:click={toggleSide}>
  {#if sidenav}
    <Icon data={faArrowLeft} scale="1.85"/>
  {:else}
    <Icon data={faBars} scale="1.85"/>
  {/if}
</span>  
<!-- <div class="search">Search...</div>
<p>Perfil do usuário</p>
<div class="avatar">Your face</div> -->

