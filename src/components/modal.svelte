<script lang="ts">
  import { work, audio, shortT, longT, toLongT } from "./../scripts/pomo.js";

  function reset() {
    $work = 25;
    $audio = true;
    $shortT = 5;
    $longT = 15;
    $toLongT = 4;
  }
</script>

<div id="my-modal" class="modal">
  <div class="modal-box">
    <slot />
    <div class="modal-action">
      <div class="btn btn-primary" on:click={reset}>Reset</div>
      <a href="/components/modal#" class="btn">Close</a>
    </div>
  </div>
</div>
