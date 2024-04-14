<template>
  <div class="flex w-full gap-[5px] justify-between">
    <div
      v-for="(cell, index) in cells"
      :key="index"
      :class="{ 'bg-blue-500': cell.filled, 'bg-gray-300': !cell.filled }"
      class="w-full h-8 rounded-[10px]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  value: {
    type: Number as () => number,
    required: true,
    validator: (value: number) => value >= 0 && value <= 100,
  },
});

const cells = computed(() => {
  const numberOfCells = Math.ceil(props.value / 12.5);
  const filledCells = Array.from({ length: numberOfCells }, () => ({
    filled: true,
  }));
  const emptyCells = Array.from({ length: 8 - numberOfCells }, () => ({
    filled: false,
  }));
  return filledCells.concat(emptyCells);
});
</script>

<style>
/* Дополнительные стили могут быть добавлены здесь */
</style>
