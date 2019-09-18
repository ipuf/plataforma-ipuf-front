<script>
  const mapas = [
    'EIVs'
  ]

  const forms = [
    'EIVs'
  ]

  const dados = [
    'EIVs'
  ]
</script>

<style>
  ul {
    padding: 0;
    margin-top: 85px;
    list-style-type: none;
  }
  li {
    padding: 20px 20px 20px 40px;
    color: #ddd
  }
  li:hover {
    background-color: rgba(255,255,255,0.2);
    cursor: pointer;
  }
</style>

<ul>
  <li>Perfil</li>
  <li>Mapa
    <ul>
      {#each mapas as mapa}
        <li>{ mapa }</li>
      {/each}
    </ul>
  </li>
  <li>Formulários
    <ul>
      {#each forms as form}
        <li>{ form }</li>
      {/each}
    </ul>
  </li>
  <li>Processos</li>
  <li>Dados
    <ul>
      {#each dados as dado}
        <li>{ dado }</li>
      {/each}
    </ul>
  </li>
</ul>
