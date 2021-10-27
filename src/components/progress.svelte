<script lang="ts">
    export let progress: number = 50;
    export let mode: String = "short"
</script>

{#if mode === "work"}
<progress class="progress progress-primary" value={progress} max="100"/>
{:else if mode === "short"}
<progress class="progress progress-accent" value={progress} max="100"/>
{:else}
<progress class="progress progress-secondary" value={progress} max="100"/>
{/if}
<style>
    progress{
        background-color: #2a2e37;
    }
    progress {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
</style>