<template>
  <div class="row">
    <button
      v-for="age in ages"
      :key="age.name"
      :class="selectedAge.name === age.name ? 'active' : ''"
      @click="selectedAge = age"
    >
      {{ age.name }}
    </button>
  </div>
</template>

<script setup>
const selectedAge = defineModel()

defineProps({
  ages: Array
})
</script>

<style scoped>
.row {
  display: flex;
}

.row button {
  padding: 10px 20px;
  width: 100%;
  border-bottom: 5px solid var(--basic-gray);
  font-size: 20px;
  color: var(--basic-gray);
}

.active {
  border-bottom: 5px solid var(--basic-blue) !important;
  color: var(--text-black) !important;
  font-weight: 600;
}
</style>
