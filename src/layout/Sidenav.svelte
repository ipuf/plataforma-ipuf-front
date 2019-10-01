<script>
  import Icon from 'svelte-awesome'
  import { beer, arrowRight, arrowLeft } from 'svelte-awesome/icons'

  export let sidenav = false
</script>

<style>
  ul {
    padding: 0;
    list-style-type: none;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px 10px 10px;
    color: #ddd
  }
  li:hover {
    background-color: rgba(255,255,255,0.6);
    cursor: pointer;
  }
</style>

<ul>
  {#if !sidenav}
    <li on:click><Icon data={arrowRight} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
  {:else}
    <li on:click><Icon data={arrowLeft} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon>Pedestres</li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon>Ciclos</li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon>Ônibus</li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
    <li><Icon data={beer} scale=3 style="color: gray;"></Icon></li>
  {/if}
</ul>
