<template>
  <div class="bar">
    <div
      class="block"
      v-for="(el, index) in 8"
      :key="index"
      :class="maxBlocks >= index + 1 ? 'active' : ''"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: Number
})

const maxBlocks = Math.floor(props.progress / 12.5)
</script>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
}

.block {
  width: 12.5%;
  height: 32px;
  border-radius: 10px;
  background-color: var(--dark-gray);
}

.active {
  background-color: var(--basic-blue);
}
</style>
