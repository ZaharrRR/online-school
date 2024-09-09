<template>
  <div class="dropdown">
    <div class="dropdown-header" @click="toggleDropdown()">
      <span>{{ title }}</span>
      <img src="/icons/pluss.svg" alt="pluss" />
    </div>
    <div v-if="isOpen" class="dropdown-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)

function toggleDropdown() {
  this.isOpen = !this.isOpen
}
</script>

<style scoped>
.dropdown {
  overflow: hidden;
}

.dropdown-header {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  font-size: 32px;
  padding: 24px 0;
  border-top: 1px solid var(--dark-gray);

  cursor: pointer;
}

.dropdown-content {
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style>
