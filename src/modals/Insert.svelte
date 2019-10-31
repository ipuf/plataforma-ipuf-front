<script>
  import { createEventDispatcher } from 'svelte'
  import { post } from '../utils/helpers.js'
  
  import AddGeom from './insert/AddGeom.svelte'
	import AddProc from './insert/AddProc.svelte'
  import Result from './insert/Result.svelte'
  import Buttons from './insert/Buttons.svelte'

  export let user = true

  const dispatch = createEventDispatcher()
  const form = []
  let step = 0

  $: done = step === 2 ? true : false
  $: response = done ? sendForm(form) : false
  
  function backPage () {
    step--
    form.pop()
    
    if (step < 0) {
      form.length = 0
      dispatch('close')
    }
  }

  function nextPage (e) {
    form.push({ [e.detail.key]: [e.detail.value] })
    console.log('next', form)
    step++
  }

  function sendForm (form) {
    // API expects JSON
    let sendObj = {}
    for (const obj of form) {
      sendObj = { ...sendObj, ...obj }
    }
    console.log(sendObj)
    return post('http://192.168.173.66/insert', sendObj)
  }
</script>

{#if !user}
	<p>Você precisa ter autorização para isso.</p>
{:else if user && !done}
  <!-- Todos os passos devem implementar dispatch para evento next e back -->
  {#if step === 0}
    <AddGeom on:next={nextPage} on:back={backPage}/>
  {:else if step === 1}
    <AddProc on:next={nextPage} on:back={backPage}/>
  {/if}
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
