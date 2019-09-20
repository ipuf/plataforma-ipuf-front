<script>
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome'
  import { faTimes } from '@fortawesome/free-solid-svg-icons'
  import { auth, googleProvider } from '../utils/firebase.js'
  import { user } from '../utils/stores.js'
  import { authState } from 'rxfire/auth'
  import UserInfo from './UserInfo.svelte'

  const unsubscribe = authState(auth).subscribe(u => $user = u)

  function login() {
    auth.signInWithPopup(googleProvider)
  }
</script>

<style>
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;
  }
  span {
    position: relative;
    top: 0;
    right: 0;
    margin-top: 5px;
    margin-right: 10px;
    cursor: pointer;
    border: none;
  }
  button {
    align-self: end;
    background-color: #4CAF50;
    color: white;
    padding: 5px;
    margin-bottom: 20px;
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  p {
    text-align: center;
    font-size: 0.9rem;
    margin-left: 30px;
    margin-right: 30px;
  }
</style>

<div transition:fade>
  {#if $user}
    <UserInfo {...$user}/>
    <span on:click> <Icon data={faTimes} scale="1.85"/> </span>
    <button on:click={ () => auth.signOut() }>Logout</button>
  {:else}
    <p>Faça login abaixo para habilitar a edição</p>
    <span on:click> <Icon data={faTimes} scale="1.85"/> </span>
    <button on:click={login}>Login com Google</button>
  {/if}
</div>

