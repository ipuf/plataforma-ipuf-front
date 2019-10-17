<script>
  import { createEventDispatcher } from 'svelte'
  import { postObj } from '../utils/helpers.js'
  
  import Err from './insert/Error.svelte'
  import AddGeom from './insert/AddGeom.svelte'
	import AddProc from './insert/AddProc.svelte'
	import Eiv1 from './insert/Eiv1.svelte'
  import Eiv2 from './insert/Eiv2.svelte'
  import Eiv3 from './insert/Eiv3.svelte'
  import Eiv4 from './insert/Eiv4.svelte'
  import Result from './insert/Result.svelte'
  
  export let user = true

  const dispatch = createEventDispatcher()
  const form = []
  const phases = [
    AddGeom,
    AddProc,
  ]
  let step = 0

  $: current = phases[step]
  $: done = step === phases.length ? true : false
  $: response = done ? sendForm(form) : false
  
  function backPage () {
    step -=1
    form.pop()

    if (step < 0) {
      form.length = 0
      dispatch('close')
    }
  }

  function nextPage (e) {
    form.push({ [e.detail.key]: [e.detail.value] })
    step += 1
  }

  function sendForm (form) {
    // API expects JSON
    let postObj = {}
    for (obj in form) {
      postObj = { ...postObj, ...obj }
    }

    return postObj('http://192.168.173.66/insert', postObj)
  }
</script>

{#if !user}
	<p>Você precisa ter autorização para isso.</p>
{:else if user && !done}
  <div>
    <!-- All phases must dispatch a back and next event -->
    <svelte:component on:back={backPage} on:next={nextPage} this={current}/>
  </div>		
{:else if user && done}
	<div>
    {#await response}
      <p>Enviando processo...</p>
    {:then ok}
		  <Result result={true} on:close />
    {:catch error}
      <Result result={error} on:close />
    {/await}
	</div>
{/if}
