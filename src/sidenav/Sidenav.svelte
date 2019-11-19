<script>
  import { createEventDispatcher } from "svelte";

  import Aside from "./components/Aside.svelte";
  import ModalBtn from "./components/ModalBtn.svelte";
  import ToggleBtn from "./components/ToggleBtn.svelte";

  import Icon from "svelte-awesome";
  import { chevronRight, chevronLeft } from "svelte-awesome/icons";

  import { marker } from "../utils/stores.js";

  export let content = "";
  export let selected = "";

  const dispatch = createEventDispatcher();

  let expanded = false;
</script>

<Aside {expanded}>
  <ToggleBtn on:click={() => (expanded = !expanded)}>
    {#if !expanded}
      <Icon data={chevronRight} scale="2" style="color:rgba(90,91,117,.8);" />
    {:else}
      <Icon data={chevronLeft} scale="2" style="color:rgba(90,91,117,.8);" />
    {/if}
  </ToggleBtn>
  {#each content as { id, icon, text }}
    <ModalBtn
      {expanded}
      {selected}
      {id}
      on:click={() => dispatch('change', { id: id })}>
      <Icon
        data={icon}
        scale="2"
        style="color:{selected.id === id ? 'white' : 'rgba(90,91,117,.8)'};" />
      <p
        style="color:{selected.id === id ? 'white' : 'rgba(90,91,117,.8)'};"
        slot="text">
        {text}
      </p>
    </ModalBtn>
  {/each}
</Aside>
