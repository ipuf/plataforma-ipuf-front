<script>
  import { slide } from 'svelte/transition'
  import { features } from '../utils/stores.js'


  let query = ''
  let headers
  let dataset

  function getData() {
    const dataset = []
    let headers = []
    for (const feature of $features) {
      if (headers.length === 0) {
        headers = Object.keys(feature.properties)
      }
      dataset.push(Object.values(feature.properties))
    }
    console.log(dataset)
    return [headers, dataset]
  }

  $: if ($features) {
    [headers, dataset] = getData()
    if (query) {
      // checa se string é válida como número
      if (!isNaN(query)) {
        // converte string p num
        query = +query
      }
      //filtra rows que não contiverem o valor da query
      dataset = dataset.filter(row => row.includes(query))
    }
  } else {
    console.log('damn')
  }
</script>

<style>
  table {
    display: block;
    width: 75vw;
    height: 100%;
    margin: 10px 0;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    overflow: auto;
  }
  th, #corner {
    background: rgba(90,91,117,.1);
    color: rgba(90,91,117,.8);
  }
  td, th {
    border: 1px solid rgba(90,91,117,.4);
    overflow: auto;
    padding: 12px 15px;
  }
  div {
    max-height: 75px;
    overflow: auto;
  }
  .headers, .rows {
    font-weight: 800;
    text-transform: uppercase;
  }
  .cells {
    font-weight: 400;
  }
</style>

<input bind:value={query} type="text" placeholder="Pesquise por um atributo">

<table>
  <tr>
    <td id="corner"></td>
    {#each headers as header}
      <th scope="col"><div class="headers">{header}</div></th>
    {/each}
  </tr>
  {#each dataset as data, i}
    <tr>
      <th scope="row"><div class="rows">{i + 1}</div></th>
      {#each data as cell}
        <td><div class="cells">{cell}</div></td>
      {/each}
    </tr>
  {/each} 
</table>
