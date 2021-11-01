<script lang="ts">
  export let title: String = "Settings";
  export let mode: String = "short";
</script>

{#if mode === "work"}
  <label for="my-modal-2" class="btn btn-down btn-primary modal-button"
    >{title}</label
  >
  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
{:else if mode === "short"}
  <label for="my-modal-2" class="btn btn-down btn-accent modal-button"
    >{title}</label
  >
  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
{:else}
  <label for="my-modal-2" class="btn btn-down btn-secondary modal-button"
    >{title}</label
  >
  <input type="checkbox" id="my-modal-2" class="modal-toggle" />
{/if}

<style>
  .btn-down {
    position: absolute;
    bottom: 5%;
    margin: auto;
  }
</style>
