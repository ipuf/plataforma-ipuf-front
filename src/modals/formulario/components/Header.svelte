<script>
  export let atual
  export let etapa
</script>

<style>
  .header { 
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 45px;
		background-color: darkblue;
		margin-bottom: 5px;
	}
	h1 {
    font-size: 1.4em;
		font-weight: normal;
		color: white;
    border: none;
  }
	.counter {
		color: white;
	}
</style>

<div class="header">	
	<h1>{ atual }</h1>
	<span class="counter">Etapa { etapa } de 4</span>
</div>