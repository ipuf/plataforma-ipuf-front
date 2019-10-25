<script>
  import { createEventDispatcher } from 'svelte'
  import { coords, mode } from '../../utils/stores.js'
  import { arrays } from '../../utils/arrays.js'

  export let done = false

  const dispatch = createEventDispatcher()

  let id_proc
  let classes = arrays.classes
  let pickClass
  let status 
  let insc_imob
  let distritos = arrays.distritos
  let pickDist

  function handleSubmit () {
    done = true
  }

  $: formObj = {
    key: 'proc',
    value: {
      id_proc: id_proc,
      classe: pickClass,
      status: status,
      insc_imob: insc_imob,
      distrito: pickDist
    }
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
  input, select {
    border: 0;
    padding: 2px 0;
    text-transform: uppercase;
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
  input:focus, select:focus {
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
  input:required:invalid+label:after,
  select:required:invalid+label:after {
    content: '*';
  }
  input:focus+label,
  input:not(:placeholder-shown)+label,
  select:focus+label,
  select:not(:invalid)+label {
    font-size: 10px;
    margin-top: 0;
    color: rgb(23,122,190);
  }
  option[value=""][disabled] {
    display: none;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="label-float">
    <input 
      placeholder="" 
      type="text" 
      required
      bind:value={id_proc}
      >
    <label>Identificação</label>
  </div>

  <div class="label-float">
    <select bind:value={pickClass} required>
      <option value="" disabled selected></option>
      {#each classes as { value, text }}
        <option {value}>{text}</option>
      {/each}
    </select>
    <label>Classe</label>
  </div>

  <!-- <div class="label-float">
    <select>
        <option></option>
    </select>
    <label>Subclasse</label>
  </div> -->

  <div class="label-float">
    <input 
      placeholder="" 
      type="text" 
      required
      bind:value={status}
      >
    <label>Status</label>
  </div>

  <div class="label-float">
    <input 
      placeholder="" 
      type="text" 
      required
      bind:value={insc_imob}
      >
    <label>Inscrição Imobiliária</label>
  </div>

  <div class="label-float">  
    <select bind:value={pickDist} required>
      <option value="" disabled selected></option>
      {#each distritos as { value, text }}
        <option {value}>{text}</option>
      {/each}
    </select>
    <label>Distrito</label>
  </div>
</form>

