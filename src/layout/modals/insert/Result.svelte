<script>
	export let success
</script>

<style>
	.buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: space-between;
		align-items: center;
    align-content: flex-end;
		width: 75%;
		margin: auto; 
  }
	.next {
		flex: 1;
		font-size: 1em;
		border-radius: 2px;
		background-color: #44a64a;
		border: none;
		color: #FFFFFF;
		text-align: center;
		padding: 17.5px;
		transition: all 0.5s;
		cursor: pointer;
	}
	.next span {
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}
	.next span:after {
		content: "\003e";
		position: absolute;
		opacity: 0;
		top: 0;
		right: -20px;
		transition: 0.5s;
	}
	.next:hover span {
		padding-right: 25px;
	}
	.next:hover span:after {
		opacity: 1;
		right: 0;
	}
</style>

<div class="buttons">
	{#if success}
  	<h2>Formulário enviado com sucesso. Clique para inserir o próximo ponto.</h2>
		<button class="next" on:click><span>Próximo ponto</span></button>
	{:else}
		<h2>Erro no envio de formulário. Clique para começar novamente.</h2>
		<button class="next" on:click><span>Recomeçar inserção</span></button>
		<p>Caso não esteja conseguindo enviar o formulário, verifique sua conexão de internet.<br><br>Se sua conexão estiver normal, comunique seu supervisor.</p>
  {/if}
</div>
