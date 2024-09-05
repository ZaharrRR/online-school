<template>
  <div class="dropdown">
    <div class="dropdown-header" @click="toggleDropdown">
      <span class="dropdown-text">{{ title }}</span>
      <span class="dropdown-icon">{{ isOpen ? '-' : '+' }}</span>
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
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  cursor: pointer;
}

.dropdown-text {
  font-size: 16px;
}

.dropdown-icon {
  font-size: 20px;
}

.dropdown-content {
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style>
