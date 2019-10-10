<script>
  import Icon from 'svelte-awesome'
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

<div>
  {#if $user}
    <UserInfo {...$user}/>
    <button on:click={ () => auth.signOut() }>Logout</button>
  {:else}
    <p>Faça login abaixo para habilitar a edição</p>
    <button on:click={login}>Login com Google</button>
  {/if}
</div>

