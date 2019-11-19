<script>
  import Icon from 'svelte-awesome'
  import { times } from 'svelte-awesome/icons'
</script>

<style>
	span {
		position: absolute;
    display: flex;
		top: 0;
		right: 0;
		margin: 10px;
	}
</style>

<span on:click>
  <Icon data={times} scale=1.25 style="color:rgba(90,91,117,.6);"/>
</span>
