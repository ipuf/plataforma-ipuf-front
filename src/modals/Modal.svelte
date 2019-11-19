<script>
  import CloseBtn from "./components/CloseBtn.svelte";

  export let component = "";
</script>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 690;
  }
  .modal {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    top: 50%;
    min-width: 350px;
    min-height: 250px;
    max-width: 90vw;
    max-height: 90vh;
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 35px;
    border-radius: 0.5rem;
    background: white;
    z-index: 700;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
  }
</style>

<div class="modal-background" on:click />

<div class="modal">
  <svelte:component this={component} on:close />
  <CloseBtn on:click />
</div>
