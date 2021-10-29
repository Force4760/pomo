<script lang="ts">
    export let title: String = "Settings";
    export let mode: String = "short"
</script>

{#if mode === "work"}
    <a href="/components/modal#my-modal" class="btn btn-down btn-primary">{title}</a>
{:else if mode === "short"}
    <a href="/components/modal#my-modal" class="btn btn-down btn-accent">{title}</a>
{:else}
    <a href="/components/modal#my-modal" class="btn btn-down btn-secondary">{title}</a>
{/if}

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
  
    