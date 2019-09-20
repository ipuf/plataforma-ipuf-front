<script>
  export let sidenav

  const dados = [
    {
      name: 'EIVs',
      map: true,
      form: true
    }
  ]
</script>

<style>
  aside {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 25%;
		overflow-y: auto;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
		transition: all 0.5s ease-in-out;
		z-index: 1;
	}
  ul {
    padding: 0;
    list-style-type: none;
  }
  li {
    padding: 10px;
    color: #ddd
  }
  li:hover {
    background-color: rgba(255,255,255,0.2);
    cursor: pointer;
  }
</style>

<aside>
  <ul>
    <li>Perfil</li>
    <li>Dados
      <ul>
        {#each dados as dado}
          <ul>{ dado.name }
            <li>Tabela</li>
            {#if dado.map}
              <li>Mapas</li>
            {/if}
            {#if dado.form}
              <li>Formulários</li>
            {/if}
          </ul>
        {/each}
      </ul>
    </li>
    <li>Processos</li>
  </ul>
</aside>
