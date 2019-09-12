<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import Icon from 'svelte-awesome'
  import { faTimes } from '@fortawesome/free-solid-svg-icons'
  import { auth, googleProvider } from '../utils/firebase.js'
  import { authState } from 'rxfire/auth'
  import { user } from '../utils/stores.js'
  import UserInfo from './UserInfo.svelte'

  export let zIndex

  const unsubscribe = authState(auth).subscribe(u => $user = u)

  function login() {
    auth.signInWithPopup(googleProvider)
      .then((res) => console.log(res.user))
  }
</script>

<style>
  .parent {
    position: fixed;
    left: 50vw;
    top: 50vh;
    transform: translate(-41.5%, -55%);
    display: grid;
    grid-template-columns: minmax(100px, 5fr) minmax(25px, 1fr);
    width: 35vw;
    height: 35vh;
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .25);
  }
  span {
    justify-self: end;
    cursor: pointer;
    margin-top: 5px;
    margin-right: 10px;
    border: 0px
  }
  button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    left: 50%;
  }
  button:hover {
    background-color: #45a049;
  }
</style>

<div class="parent" style="z-index: {zIndex};" transition:fade="{{ duration: 250 }}">
  {#if $user}
    <UserInfo {...$user}/>
    <span on:click>
      <Icon data={faTimes} scale="2"/>
    </span>
    <button on:click={ () => auth.signOut() }>Logout</button>
  {:else}
    <p>Faça login abaixo para habilitar o formulário</p>
    <span on:click>
      <Icon data={faTimes} scale="2"/>
    </span>
    <button on:click={login}>
      Login com Google
    </button>
  {/if}
</div>

