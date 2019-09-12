<script>
  import User from './User.svelte'
  import Edit from './Edit.svelte'
  import Table from './Table.svelte'
</script>

<style>
  div {
    position: fixed;
    width: 100%;
    z-index: 50;
    top: 0;
    left: 0;
  }
</style>

<div>
  <User/>
  <Edit/>
  <Table/>
</div>
  
