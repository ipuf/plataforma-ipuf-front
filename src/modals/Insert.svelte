<script>
  import { postObj } from '../utils/helpers.js'
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  
  import Err from './insert/Error.svelte'
  import AddGeom from './insert/AddGeom.svelte'
	import AddProc from './insert/AddProc.svelte'
	import Eiv1 from './insert/Eiv1.svelte'
  import Eiv2 from './insert/Eiv2.svelte'
  import Eiv3 from './insert/Eiv3.svelte'
  import Eiv4 from './insert/Eiv4.svelte'
  import Result from './insert/Result.svelte'
  
  export let user = false

  const form = []
  let done = false
  let step = 1
  let phases = [
    AddGeom,
    AddProc,
    Eiv1,
    Eiv2,
    Eiv3,
    Eiv4,
    Result
  ]

  $: current = phases[step]

  function backPage () {
    if (step > 0) {
      step -=1
    } else if (step === 0) {
      //unmount Insert Modal
    }
  }

  function nextPage (e) {
    form.push(e.detail.body)
    //console.log(form) //debugging
    step += 1
  }

  function insertObj (e) {
    form.push(e.detail.body)
    //console.log(form) //debugging
    
    // API expects JSON
    let postObj = {}
    for (obj in form) {
      postObj = { ...postObj, ...obj }
    }
    
    postObj(postObj)
  }
</script>

<!-- <div transition:slide="{{ easing: quintOut }}">
	<Local on:send={nextPage} on:back={backPage} />
</div> -->	
<!-- Check if user is authenticated -->
<!-- {#if !user}
  <!-- Modal should unmount insert -->
  <!-- <Modal {Err} on:click={() => {}}/> -->