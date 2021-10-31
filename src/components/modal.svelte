<script lang="ts">
  import {
    work,
    audio,
    shortT,
    longT,
    toLongT,
    distraction,
  } from "./../scripts/pomo.js";

  function reset() {
    $work = 25;
    $audio = true;
    $distraction = true;
    $shortT = 5;
    $longT = 15;
    $toLongT = 4;
  }
</script>

<div class="modal">
  <div class="modal-box">
    <slot />
    <div class="modal-action">
      <label for="" class="btn btn-primary" on:click={reset}>Reset</label>
      <label for="my-modal-2" class="btn">Close</label>
    </div>
  </div>
</div>

<style>
  .modal-toggle {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 20;
  }
</style>
