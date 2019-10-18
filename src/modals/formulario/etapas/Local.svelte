<script>
  import { onMount, createEventDispatcher } from 'svelte'
  import Buttons from '../components/Buttons.svelte'
  
  const dispatch = createEventDispatcher()

  let rua
  let numero_pt
  let gpslog = ''
  let localizacao = []
  
  $: formObj = {
    etapa: 'local',
    body: {
      rua: rua,
      numero_pt: numero_pt,
      localizacao: localizacao
    }
  }

  function getLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Este navegador não suporta o serviço de localização, por favor utilize outro navegador.");
    }
  }

  function showPosition (position) {
    localizacao.push(position.coords.latitude, position.coords.longitude)    
  }

  function showError (error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        gpslog = "User denied the request for Geolocation."
        alert('Por favor, habilite seu GPS e recarregue a página.')
        break;
      case error.POSITION_UNAVAILABLE:
        gpslog = "Location information is unavailable."
        alert('Por favor, habilite seu GPS e recarregue a página..')
        break;
      case error.TIMEOUT:
        gpslog = "The request to get user location timed out."
        alert('Conexão de internet instável. Aguarde um minuto e tente novamente.')
        break;
      case error.UNKNOWN_ERROR:
        gpslog = "An unknown error occurred."
        alert('Erro desconhecido. Aguarde um minuto e tente novamente.')
        break;
    }
  }
  
  function backPage () {
    dispatch('back', {})
	}

  function sendForm () {
    dispatch('send', formObj)
  }
  
  onMount(() => getLocation())
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
		margin-top: 8px;
		margin-bottom: 2px;
		align-self: start;
	}
	input[type="number"], input[type="text"] {
		font-size: 1em;
		align-self: stretch;
    height: 60px;
		border: 1px solid lightgray;
		border-radius: 2px;
	}
</style>

<form action="javascript:void(0);" on:submit={sendForm}>
  <div class="content">
    <h2>Nome da rua:</h2>
    <input type="text" bind:value={rua} placeholder="Rua" required>
    
    <h2>Número do ponto:</h2>
    <input type="number" bind:value={numero_pt} placeholder="Número do ponto" required>
  </div>
  
  <Buttons on:click={backPage} />
</form>
