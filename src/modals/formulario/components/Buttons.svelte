<script>
	export let back = true
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
		width: 100%;
		margin-top: 15px;
		margin-bottom: 10px;
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
	.back {
		flex: 1;
		font-size: 1em;
		border-radius: 2px;
		background-color: #44a64a;
		border: none;
		color: #FFFFFF;
		text-align: center;
		padding: 17.5px;
		cursor: pointer;
		margin-right: 10px;
	}
</style>

<div class="buttons">
	{#if back}
  	<button class="back" type="button" on:click><span>Voltar </span></button>
  {/if}
	<button class="next" type="submit"><span>Próximo </span></button>
</div>