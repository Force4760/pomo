<script lang="ts">
  export let title: string = "Title";
  export let value: number = 25;
  export let max: number = 60;
  export let min: number = 1;
  export let step: number = 1;

  function confirm() {
    if (typeof value !== "number") {
      value = max;
    } else if (value < min) {
      value = min;
    } else if (value > max) {
      value = max;
    }
  }
</script>

<div class="p-6 card">
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text text-lg">{title}</span>
      <input
        type="number"
        bind:value
        {max}
        {min}
        {step}
        on:change={confirm}
        inputmode="numeric"
        class="input input-secondary input-bordered"
      />
    </label>
  </div>
</div>
