<script>
  export let value = ''
  export let req = 'true'
  export let placeholder = ''
  export let label = ''
  export let min = ''
  export let max = ''
  export let step = 1
  export let val = ''
  
  const required = 'required'
</script>

<style>
  input[type=number] {
    font-family: sans-serif;
    position: relative;
    width: 97%;
    /* Full width */
    padding: 12px;
    /* Some padding */
    border: 1px solid #ccc;
    /* Gray border */
    border-radius: 4px;
    /* Rounded borders */
    box-sizing: border-box;
    /* Make sure that padding and width stays in place */
    margin-top: 6px;
    /* Add a top margin */
    margin-bottom: 16px;
    /* Bottom margin */
    resize: vertical;
    /* Allow the user to vertically resize the textarea (not horizontally) */
  }
</style>

<label>
  {label}
  {#if req === 'true'}
    <input type="number" bind:value={value} {placeholder} {required} {min} {max} {step} >
  {:else}
    <input type="number" bind:value={value} {placeholder} {min} {max} {step} >
  {/if}
</label>