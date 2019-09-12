<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import * as jexcel from 'jexcel/dist/jexcel.js'
  import * as jst from 'jsuites/dist/jsuites.js'
  import { features } from '../utils/stores.js'
  import { loadCSS } from '../utils/helpers.js'
  import Icon from 'svelte-awesome'
  import { faTimes } from '@fortawesome/free-solid-svg-icons'

  export let zIndex

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
        console.log(colNames)
        for (const name of colNames) {
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

<style>
  .parent {
    position: fixed;
    left: 50vw;
    top: 50vh;
    transform: translate(-41.5%, -55%);
    display: grid;
    grid-template-columns: minmax(25px, 1fr) minmax(100px,15fr) minmax(25px, 1fr);
    width: 75vw;
    height: 75vh;
    background-color: white;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, .25);
  }
  span {
    justify-self: end;
    cursor: pointer;
    margin-top: 5px;
    margin-right: 10px;
    border: 0px
  }
</style>

<div class="parent" style="z-index: {zIndex};" transition:fade="{{ duration: 250 }}">
  <div></div>
  <div bind:this={container}/>
  <span on:click>
    <Icon data={faTimes} scale="2"/>
  </span>
</div>