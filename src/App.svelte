<script lang="ts">
  import Settings from "./components/settings.svelte";
  import Clock from "./components/clock.svelte";
  import { longT, shortT, toLongT, work } from "./scripts/pomo";

  const SECS: number = 59;

  let mode: String = "work";
  let isStopped: boolean = true;
  let minutes: number = $work;
  let seconds: number = 60;
  let times: number = $work;
  let maximum: number = minutes;

  let bg: String = "rgba(0, 0, 0, 0.65)";

  function stop() {
    isStopped = !isStopped;
  }

  function setLong() {
    mode = "long";
    minutes = $longT - 1;
    maximum = $longT;
    seconds = SECS;
  }
  function setShort() {
    mode = "short";
    minutes = $shortT - 1;
    maximum = $shortT;
    seconds = SECS;
  }
  function setWork() {
    mode = "work";
    minutes = $work - 1;
    maximum = $work;
    seconds = SECS;
    times++;
  }

  function handleMode() {
    if (mode === "work") {
      if (times % $toLongT === 0) {
        setLong();
      } else {
        setShort();
      }
    } else {
      setWork();
    }
  }

  window.setInterval(updateTimer, 1000);
  function updateTimer() {
    if (!isStopped && minutes >= 0) {
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        seconds = SECS;
        minutes--;
      } else {
        handleMode();
      }
    }
  }
</script>

<main>
  <Clock
    {mode}
    {minutes}
    {seconds}
    progress={(100 * (minutes * SECS + seconds)) / (maximum * SECS)}
  />

  <div
    class="stop"
    style="background-color: {isStopped ? bg : ''};"
    on:click={stop}
  />

  <Settings {mode} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  .stop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: background-color ease 0.5s;
  }
</style>
