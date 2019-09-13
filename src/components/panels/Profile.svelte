<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome'
  import { faTimes } from '@fortawesome/free-solid-svg-icons'
  import { auth, googleProvider } from '../utils/firebase.js'
  import { user } from '../utils/stores.js'
  import { authState } from 'rxfire/auth'
  import UserInfo from './UserInfo.svelte'

  export let zProfile

  $: logged = $user ? true : false

  const unsubscribe = authState(auth).subscribe(u => $user = u)

  function login() {
    auth.signInWithPopup(googleProvider)
      .then((res) => console.log(res.$user))
  }
</script>

<style>
  div {
    display: grid;
    justify-items: center;
    align-items: center;
    width: 20vw;
    height: 20vh;
    background:  	#F8F8F8;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .4);
    border-radius: 6px;
    transition: all 0.4s;
    overflow: auto;
  }
  .logged {
    width: 30vw;
    height: 30vh;
  }
  span {
    position: fixed;
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

<div class:logged transition:fade style="z-index:{zProfile};">
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

