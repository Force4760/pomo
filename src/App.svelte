<script lang="ts">
  import Settings from "./components/settings.svelte";
  import Clock from "./components/clock.svelte";

  let settings = {
    work: 25,
    short: 5,
    long: 15,
    toLong: 4,
    audio: true,
    reset: () => {
      this.work = 25;
      this.short = 5;
      this.long = 15;
      this.toLong = 4;
      this.audio = true;
    },
  };
</script>

<main>
  <Clock />
  <Settings bind:settings />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
