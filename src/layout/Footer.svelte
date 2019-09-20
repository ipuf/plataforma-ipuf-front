<script>
  import Icon from 'svelte-awesome'
  import { faBars } from '@fortawesome/free-solid-svg-icons'

  export let sidenav
</script>

<style>
  footer {
		height: 50px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
	}
  span {
    cursor: pointer;
    color: #003366;
    transition: all 0.5s ease-in-out;
  }
</style>

<footer>
  <span>
    <Icon data={faBars} scale="1.85"/>
  </span> 
</footer>
