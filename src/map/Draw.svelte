<script>
  import { onMount } from 'svelte'

  function changeCursor () {
    const css = document.createElement("style")
    css.type = "text/css"
    css.innerHTML = "* { cursor: crosshair !important; }"
    document.body.appendChild(css)
  }

  onMount(() => {
    changeCursor()
  })
</script>

<style>
  p {
    position: absolute;
    z-index: 1000;
  }
</style>
<p>this</p>