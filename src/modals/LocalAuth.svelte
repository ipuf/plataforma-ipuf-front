<script>
  import Icon from 'svelte-awesome'
  import { user } from '../utils/stores.js'
  import { post } from '../utils/helpers.js'
  import UserInfo from './user/UserInfo.svelte'

  let email = ''
  let password = ''

  async function handleSignup (e) {
    console.log(e)
    console.log(e.target)
    console.log(e.target.email.value)
    console.log(e.target.passwd.value)

    if (!e.target.checkValidity()) return

    const response = await post('/signup', {
      email: e.target.email.value,
      password: e.target.passwd.value
    })

    if (response.user) {
      $user = response.user
    }
  }

  function validateEmail (e) {
    const textbox = e.target
    if (textbox.value === '') {
      textbox.setCustomValidity('Email requerido.')
    } else if (textbox.validity.typeMismatch) {
      textbox.setCustomValidity('Por favor, insira um email válido')
    } else {
      textbox.setCustomValidity('')
    }
    return true
  }
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2px;
  }
  form * {
    width: 100%;
  }
  .label-float {
    position: relative;
    padding-top: 13px;
    margin-bottom: 10px;
  }
  input {
    border: 0;
    padding: 2px 0;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(90,91,117,.4);
    min-width: 180px;
    color: rgba(90,91,117,.8);
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -webkit-appearance: none;
    border-radius: 0;
  }
  input:focus {
    border-bottom: 1px solid rgb(23,122,190);
  }
  input::placeholder {
    color: transparent;
  }
  label {
    text-transform: uppercase;
    pointer-events: none;
    position: absolute;
    color: rgba(90, 91, 117, .8);
    font-size: 1.1rem;
    top: 0;
    left: 0;
    margin-top: 18px;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
  }
  input:focus:required:invalid {
    border-bottom: 1px solid darkred;
  }
  input:required:invalid+label:after {
    content: '*';
  }
  input:focus+label,
  input:not(:placeholder-shown)+label {
    font-size: 10px;
    margin-top: 0;
    color: rgb(23,122,190);
  }
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
    background-color: #4CAF50;
    color: white;
    padding: 5px;
    margin: 30px;
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
</style>

<div>
  {#if $user}
    <UserInfo {...$user}/>
    <button on:click={ () => console.log('Logout') }>Logout</button>
  {:else}
    <form 
      on:submit|preventDefault={handleSignup}
      on:invalid={validateEmail}
      on:changed={validateEmail}
      on:input={validateEmail}
    >
        <div class="label-float">
          <input 
            placeholder="Email" 
            type="email"
            id="email"
            required
            bind:value={email}
          >
          <label>Email</label>
        </div>

        <div class="label-float">
          <input 
            placeholder="Senha" 
            type="password"
            id="passwd"
            required
            bind:value={password}
          >
          <label>Senha</label>
        </div>

        <button type="submit">Crie sua conta</button>
    </form>
  {/if}
</div>


