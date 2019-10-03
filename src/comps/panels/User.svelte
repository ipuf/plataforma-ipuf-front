<script>
  import Profile from './Profile.svelte'
  import { auth, googleProvider } from '../../utils/firebase.js'

  export let user

  function signIn () {
    auth.signInWithPopup(googleProvider)
  }

  function signOut () {
    auth.signOut()
      .then(() => console.log('User logged out'))
      .catch((e) => console.error(e))
  }
</script>

<style>
  section {
    padding-top: 3%;
    font-family: sans-serif;
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

<section>
  {#if user}
    <Profile {...user}/>
    <button on:click={signOut}>Logout</button>
  {:else}
    <p>Faça login abaixo para habilitar o formulário</p>
    <button on:click={signIn}>
      Login com Google
    </button>
  {/if}
</section>
