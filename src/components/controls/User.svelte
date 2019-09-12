<script>
  import Icon from 'svelte-awesome'
  import { faUser } from '@fortawesome/free-solid-svg-icons'

  export let zIndex
</script>

<style>
  div {
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-left: 1vw;
    margin-top: 10vh;
    align-items: center;
    justify-items: center;
    width: 220px;
    height: 60px;
    background: #003366;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .4);
    border-radius: 4px;
    cursor: pointer;
  }
  p {
    color: white;
    font-size: 0.9rem;
  }
</style>

<div on:click style="z-index: {zIndex};">
  <Icon data={faUser} style="color: white;" scale="2"/>
  <p>Perfil do usuário</p>
</div>
