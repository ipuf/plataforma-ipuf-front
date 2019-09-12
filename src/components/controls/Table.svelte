<script>
  import Icon from 'svelte-awesome'
  import { faTable } from '@fortawesome/free-solid-svg-icons'

  export let zIndex
</script>

<style>
  div {
    display: grid;
    grid-template-columns: 1fr 3fr;
    position: fixed;
    margin-left: 1vw;
    margin-top: 18vh;
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
  <Icon data={faTable} style="color: white;" scale="2"/>
  <p>Tabela de atributos</p>
</div>
  

