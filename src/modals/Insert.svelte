<script>
  import { postObj } from '../utils/helpers.js'
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  
  import Err from './insert/Error.svelte'
  import Phase1 from './insert/Phase1.svelte'
	import Phase2 from './insert/Phase2.svelte'
	import Phase3 from './insert/Phase3.svelte'
	import Phase4 from './insert/Phase4.svelte'
  import Result from './insert/Result.svelte'
  
  export let user = false

  const form = []
  let done = false
  let step = 1
  let phases = [
    Phase1,
    Phase2,
    Phase3,
    Phase4,
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

<!-- Check if user is authenticated -->
<!-- {#if !user}
  <!-- Modal should unmount insert -->
  <!-- <Modal {Err} on:click={() => {}}/> -->