<script>
  import { createEventDispatcher } from 'svelte'
  import Buttons from '../components/Buttons.svelte'
  
  const dispatch = createEventDispatcher()

  let id_fiscal

  function sendForm () {
    if (id_fiscal.match(/(FISC[0-9]*)/)) {
      dispatch('send', { 
        etapa: 'fiscal',
        body: {
          id: id_fiscal 
        }
      })
    } else {
      alert('ID inválido.')
    }
  }
</script>

<style>
	form {
    flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: auto;
		width: 75%;
	}
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
	h2 {
		font-size: 1em;
		font-weight: normal;
		color: gray;
		margin-top: 10px;
		margin-bottom: 5px;
		align-self: start;
	}
	input[type="text"] {
		font-size: 1em;
		align-self: stretch;
    height: 60px;
		border: 1px solid lightgray;
		border-radius: 2px;
    margin: 0;
	}
</style>

<form action="javascript:void(0);" on:submit={sendForm}>
  <div class="content">
    <h2>Insira seu número de identificação:</h2>
    <input type="text" bind:value={id_fiscal} placeholder="Código de fiscalização" required>
  </div>
  
  <Buttons back={false}/>
</form>
