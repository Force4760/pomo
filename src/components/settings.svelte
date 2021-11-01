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

<div class="container" on:click={() => (playing = !playing)}>
  <Button title="Settings" {mode} />
  <Modal>
    <Check title="Audio" bind:checked={$audio} />
    <Check title="Clock" bind:checked={$distraction} />
    <Num title="Work" bind:value={$work} />
    <Num title="Short" bind:value={$shortT} />
    <Num title="Long" bind:value={$longT} />
    <Num title="To Long" bind:value={$toLongT} max={10} />
  </Modal>
</div>

<style>
  .container {
    position: absolute;
    top: 0;
    left: 50%;
    height: 100vh;
    width: 100vw;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
