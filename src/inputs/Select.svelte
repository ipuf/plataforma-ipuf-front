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
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }
</style>

<label>
  {placeholder}
  {#if req === 'true'}
    <select bind:value={selected} {required}>
      <option value='' disabled selected>{placeholder}</option>
      {#each categoria as cat}
        <option value={cat.value}>
          {cat.text}
        </option>
      {/each}
    </select>
  {:else}
    <select bind:value={selected}>
      <option value='NA' selected>{placeholder}</option>
      {#each categoria as cat}
        <option value={cat.value}>
          {cat.text}
        </option>
      {/each}
    </select>
  {/if}
</label>