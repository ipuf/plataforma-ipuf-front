<script>
  import { onMount } from 'svelte'
  import * as jexcel from 'jexcel/dist/jexcel.js'
  import * as jst from 'jsuites/dist/jsuites.js'
  import { features } from '../utils/stores.js'
  import { loadCSS } from '../utils/helpers.js'

  let container  
  let linkJxl
  let linkJst
  let jxl
  
  function getData () {
    const data = []
    const columns = []

    for (const feature of $features) {
      if (columns.length === 0) {
        let colNames = Object.keys(feature.properties).values()
        for (const name in colNames) {
          console.log(name)
          columns.push({ title: name, width: 125 })
        }
      }
      data.push(Object.values(feature.properties))
    }

    return [columns, data]
  }

  onMount(() => {
    linkJxl = loadCSS('https://unpkg.com/jexcel@3.4.4/dist/jexcel.min.css')   
    linkJst = loadCSS('https://unpkg.com/jsuites@2.1.3/dist/jsuites.css')
    linkJxl.onload = () => {
      const [columns, data] = getData()
      jxl = jexcel(container, {
        data: data,
        columns: columns
      })
    }
    // set up event listeners

    return () => jxl = ''
  })
</script>

<div bind:this={container}/>
<button on:click>x</button>
