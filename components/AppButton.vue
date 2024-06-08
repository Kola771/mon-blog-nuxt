<template>
  <button class="border-2 rounded shadow-sm p-2">
   
    <div class="flex gap-2">
      <slot name="icon" />

      <!-- Slot par défaut -->
      <slot />
    </div>

  </button>
</template>

<script lang="ts" setup>

</script>

<style>

</style>