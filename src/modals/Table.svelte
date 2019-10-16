<script>
  import { features } from '../utils/stores.js'

  function getData() {
    const dataset = []
    let headers = []
    for (const feature of $features) {
      if (headers.length === 0) {
        headers = Object.keys(feature.properties)
      }
      dataset.push(Object.values(feature.properties))
    }
    return [headers, dataset]
  }
  
  $: [headers, dataset] = $features ? getData() : ''
</script>

<style>
  table {
    margin: auto;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
  }
  th, td#corner {
    background: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
  }
  td, th {
    border-left: 1px solid #cbcbcb;
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: auto;
    padding: 0.5em 1em;
  }
  table:nth-child(2) {
    height: 15px;
  }
  tr:nth-child(even) td {
    background: #f2f2f2;
  }
  tr:hover, tr:hover td{
    background: #E2E2E2;
  }
</style>

<table>
  <tr>
    <td id="corner"></td>
    {#each headers as header}
      <th scope="col">{header}</th>
    {/each}
  </tr>
  {#each dataset as data, i}
    <tr>
      <th scope="row">{i + 1}</th>
      {#each data as cell}
        <td>{cell}</td>
      {/each}
    </tr>
  {/each} 
</table>
