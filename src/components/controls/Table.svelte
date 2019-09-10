<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import * as jexcel from 'jexcel/dist/jexcel.js'
  import * as jst from 'jsuites/dist/jsuites.js'
  import { map, features } from '../utils/stores.js'
  import { loadCSS } from '../utils/helpers.js'
  import Icon from 'svelte-awesome'
  import { faTable } from '@fortawesome/free-solid-svg-icons'

  export let position = 'topleft'
  let container
  let spreadsheet  
  let linkJxl
  let linkJst
  let jxl
  
  let width = 44
  let height = 44
  let table = false

  function getData () {
    const data = []
    const columns = []

    for (const feature of $features) {
      if (columns.length === 0) {
        for (const key in Object.keys(feature.properties)) {
          columns.push({ title: key.toString() })
          console.log(key)
          console.log(columns)
        }
      }
      data.push(Object.values(feature.properties))
    }

    return [columns, data]
  }

  function handleOpen () {
    if (!table) {
      table = true
      width = 1850
      height = 600
      linkJxl = loadCSS('https://unpkg.com/jexcel@3.4.4/dist/jexcel.min.css')   
      linkJst = loadCSS('https://unpkg.com/jsuites@2.1.3/dist/jsuites.css')
      linkJxl.onload = () => {
        const [columns, data] = getData()
        jxl = jexcel(spreadsheet, {
          data: data,
          columns: columns
        })
      }
    }  
  } 
  
  function handleClose () {
    table = false
    width = 44
    height = 44
    jxl = ''
    linkJxl.parentNode.removeChild(linkJxl)
    linkJst.parentNode.removeChild(linkJst)
  }

  L.Control.ViewTable = L.Control.extend({
    onAdd: (map) => {

      return container
    },
    onRemove: (map) => {
      // Do nothing
    }
  })

  L.control.viewTable = (opts) => {
    return new L.Control.ViewTable(opts)
  }

  onMount(() => {
    const viewTable = L.control.viewTable({ position: position }).addTo($map)
  })
</script>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
</style>

<div bind:this={container} 
  class="leaflet-bar leaflet-control leaflet-control-custom"
  style="width: {width}px; height: {height}px;">
  {#if !table}
    <div on:click={handleOpen}>
      <Icon data={faTable} scale="1.25"/>
    </div>
  {:else}
    <div bind:this={spreadsheet}/>
    <button on:click={handleClose}>x</button>
  {/if}
</div>
