<script lang="ts">
  export let title: string = "Title";
  export let checked: boolean = false;
</script>

<div class="p-6 card">
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text text-lg">{title}</span>
      <input type="checkbox" bind:checked class="toggle toggle-secondary" />
    </label>
  </div>
</div>
