<style>
  .btn {
    margin: 0px;
    padding: 10px;
    height: 75px;
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
  }
  .icon {
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<button type="button" class="btn" on:click>
  <span class="icon">
    <slot />
  </span>
</button>
