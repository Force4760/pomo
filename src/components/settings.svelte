<script lang="ts">
  import Modal from "./modal.svelte";
  import Check from "./check.svelte";
  import Num from "./number.svelte";
  import Button from "./button.svelte";
  export let mode: String = "work";
  export let playing: boolean = false;
  import {
    work,
    shortT,
    longT,
    toLongT,
    audio,
    distraction,
  } from "./../scripts/pomo.js";
</script>

<Button title="Settings" {mode} />
<Modal>
  <Check title="Audio" bind:checked={$audio} />
  <Check title="Clock" bind:checked={$distraction} />
  <Num title="Work" bind:value={$work} />
  <Num title="Short" bind:value={$shortT} />
  <Num title="Long" bind:value={$longT} />
  <Num title="To Long" bind:value={$toLongT} max={10} />
</Modal>
