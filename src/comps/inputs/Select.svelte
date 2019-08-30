<script>
  export let categoria
  export let req = 'true'
  export let selected = ''
  export let placeholder = ''

  const required = 'required'

</script>

<style>
  select {
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
  {placeholder}
  {#if req === 'true'}
    <select bind:value={selected} {required}>
      <option value="" disabled selected>{placeholder}</option>
      {#each categoria as cat}
        <option value={cat.value}>
          {cat.text}
        </option>
      {/each}
    </select>
  {:else}
    <select bind:value={selected}>
      <option value="" selected>{placeholder}</option>
      {#each categoria as cat}
        <option value={cat.value}>
          {cat.text}
        </option>
      {/each}
    </select>
  {/if}
</label>