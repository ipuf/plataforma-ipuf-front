<script>
  import Icon from 'svelte-awesome'
  import { faUser } from '@fortawesome/free-solid-svg-icons'

  function handleClick() {
    alert('User clicked')
  }
</script>

<style>
  div {
    position: fixed;
    display: flex;
    float: left;
    margin-left: 12px;
    margin-top: 74px;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: white;
  }
</style>

<div on:click={handleClick}>
    <Icon data={faUser} scale="1.25"/>
</div>
