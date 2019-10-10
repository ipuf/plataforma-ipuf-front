<script>
  export let value = ''
  export let req = 'true'
  export let label = ''
  export let min = '2000-01-01'
  export let max = '2100-01-01'
  export let step = 1

  const required = 'required' 
</script>

<style>
  input[type=date] {
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
    <input type="date" bind:value={value} {required} {min} {max} {step} >
  {:else}
    <input type="date" bind:value={value} {min} {max} {step} >
  {/if}
  
</label>