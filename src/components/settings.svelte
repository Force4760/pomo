<script lang="ts">
  import Modal from "./modal.svelte";
  import Check from "./check.svelte";
  import Num from "./number.svelte";
  export let title: string = "Settings";
  import { work, shortT, longT, toLongT, audio } from "./../scripts/pomo.js";
</script>

<a href="/components/modal#my-modal" class="btn btn-down btn-primary">{title}</a
>

<Modal>
  <Check title="Audio" bind:checked={$audio} />
  <Num title="Work" bind:value={$work} min={1} />
  <Num title="Short" bind:value={$shortT} />
  <Num title="Long" bind:value={$longT} />
  <Num title="To Long" bind:value={$toLongT} min={1} max={10} />
</Modal>

<style>
  .btn-down {
    position: absolute;
    bottom: 5%;
    left: 50%;
    translate: -50%;
  }

  .btn-down:focus {
    transform: none;
  }
</style>
