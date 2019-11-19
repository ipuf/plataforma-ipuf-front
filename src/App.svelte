<script>
  import Map from "./map/Map.svelte";
  import Draw from "./modes/Draw.svelte";
  import Sidenav from "./sidenav/Sidenav.svelte";
  import Modal from "./modals/Modal.svelte";

  import User from "./modals/auth/Auth.svelte";
  import Insert from "./modals/insert/Insert.svelte";
  import Edit from "./modals/edit/Edit.svelte";
  import Table from "./modals/table/Table.svelte";
  import { user, plus, edit, table } from "svelte-awesome/icons";

  import { mode, marker } from "./utils/stores.js";

  const content = [
    {
      id: "user",
      icon: user,
      component: User,
      text: "Usuário"
    },
    {
      id: "plus",
      icon: plus,
      component: Insert,
      text: "Inserir processo"
    },
    {
      id: "edit",
      icon: edit,
      component: Edit,
      text: "Editar processo"
    },
    {
      id: "table",
      icon: table,
      component: Table,
      text: "Visualizar tabela"
    }
  ];

  let selected = false;

  function selectModal(e) {
    selected = content.find(m => m.id === e.detail.id);
  }

  function clearModal() {
    selected = false;
    if ($marker) {
      $marker.remove();
      $marker = false;
    }
  }

  $: component = selected ? selected.component : false;
</script>

<style>
  :global(html),
  :global(body) {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    font-size: 13px;
    transform-origin: 0 0;
  }
  :global(*) {
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }
  :global(button) {
    border: 1 px solid transparent;
    border-radius: 0.5rem;
    line-height: 1.65;
    padding: 0.75rem 1.55rem;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.3s ease;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
  }
  :global(button):not(:disabled) {
    cursor: pointer;
  }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Raleway:400,600,800|Montserrat:500,600|Roboto&display=swap"
    rel="stylesheet" />
</svelte:head>
<svelte:body
  on:keydown={e => {
    if (e.key === 'Escape') $mode = false;
  }} />

{#if !$mode}
  {#if selected}
    <Modal {component} on:click={clearModal} on:close={clearModal} />
  {/if}
  <Sidenav {content} {selected} on:change={selectModal} />
{:else if $mode === 'draw'}
  <Draw />
{/if}

<Map lat={-27.59} lon={-48.54} zoom={12} />
