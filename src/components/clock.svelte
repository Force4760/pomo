<script lang="ts">
  import Progress from "./progress.svelte";
  export let minutes: number = 0;
  export let seconds: number = 20;
  export let mode: string = "short";
  export let progress: number = 50;
  export let stopped: boolean = true;

  let style: string = "";
  window.setInterval(updateTimer, 1000);

  function updateTimer() {
    if (!stopped && minutes >= 0) {
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        seconds = 60;
        minutes--;
      }
    }
  }

  function stopClock() {
    if (stopped) {
      stopped = false;
      style = "";
    } else {
      stopped = true;
      style = "grey";
    }
  }
</script>

<div class="container-div" on:click={stopClock}>
  <span class="font-mono text-8xl countdown" style="color: {style}">
    <span style="--value: {minutes};" />:

    <span style="--value: {seconds};" />
  </span>

  <Progress {mode} {progress}></Progress>

  <p class="font-mono text-2xl">{mode}</p>
</div>

<style>
  .container-div {
    width: 90%;
    max-width: 600px;
    margin: auto;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }
  .container-div p {
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    user-select: none;
  }

  @media (min-width: 700px) {
    .container-div {
      top: 45%;
    }
  }
</style>
