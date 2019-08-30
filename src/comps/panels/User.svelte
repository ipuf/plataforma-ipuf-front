<script>
  import { auth, googleProvider } from '../../utils/firebase.js'
  import { authState } from 'rxfire/auth'
  import { user } from '../../utils/stores.js'
  import Profile from '../inputs/Profile.svelte'

  const unsubscribe = authState(auth).subscribe(u => $user = u)

  function login() {
    auth.signInWithPopup(googleProvider)
      .then((res) => console.log(res.user))
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
  {#if $user}
    <Profile {...$user}/>
    <button on:click={ () => auth.signOut() }>Logout</button>
  {:else}
    <p>Faça login abaixo para habilitar o formulário</p>
    <button on:click={login}>
      Login com Google
    </button>
  {/if}
</section>

