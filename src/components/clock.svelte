<script lang="ts">
  import { distraction } from "./../scripts/pomo";
  import Progress from "./progress.svelte";
  export let minutes: number = 0;
  export let seconds: number = 20;
  export let mode: String = "work";
  export let progress: number = 50;
</script>

<div class="container-div">
  <span
    class="font-mono text-8xl countdown"
    style="color: {$distraction ? '' : '#3d4451'}"
  >
    <span style="--value: {minutes};" />:

    <span style="--value: {seconds};" />
  </span>
  <Progress {mode} {progress} />

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
