<script>
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome'
  import { faUser } from '@fortawesome/free-solid-svg-icons'

  export let panelOpen
  $: width = panelOpen ? 60 : 220
</script>

<style>
  div {
    display: flex;
    align-items: center;
    height: 60px;
    background: #003366;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .4);
    border-radius: 4px;
    cursor: pointer;
    transition: width 0.4s;
  }
  p {
    margin: auto;
    color: white;
    font-size: 0.9rem;
  }
</style>

<div style="width:{width}px;" on:click>
  <Icon data={faUser} style="color: white; margin-left: 16px;" scale="1.85"/>
  {#if !panelOpen}
    <p in:fade="{{ delay: 200, duration: 400 }}">Perfil do usuário</p>
  {/if}
</div>
