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
    display: block;
    width: 75vw;
    height: 100%;
    margin: 10px 0;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    overflow: auto;
  }
  div {
    max-height: 75px;
    overflow: auto;
  }
  td, th {
    border: 1px solid rgba(90,91,117,.4);
    overflow: auto;
    padding: 12px 15px;
  }
  th, td#corner {
    background: rgba(90,91,117,.1);
    color: rgba(90,91,117,.8);
  }
  
</style>

<table>
  <tr>
    <td id="corner"></td>
    {#each headers as header}
      <th scope="col"><div>{header}</div></th>
    {/each}
  </tr>
  {#each dataset as data, i}
    <tr>
      <th scope="row">{i + 1}</th>
      {#each data as cell}
        <td><div>{cell}</div></td>
      {/each}
    </tr>
  {/each} 
</table>
