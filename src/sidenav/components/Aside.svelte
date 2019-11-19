<script>
  export let expanded;
</script>

<style>
  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
    z-index: 600;
    background: #fff;
    width: 70px;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all 0.3s ease-in-out;
    border-radius: 0 0.5rem 0.5rem 0;
  }
  .expanded {
    width: 225px;
    transition: all 0.3s ease-in-out;
  }
  @media only screen and (max-width: 600px) {
    .expanded {
      width: 100vw;
      transition: all 0.3s ease-in-out;
      border-radius: 0;
    }
  }
</style>

<aside class:expanded>
  <slot />
</aside>
