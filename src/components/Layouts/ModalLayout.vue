<template>
  <div v-if="isOpen" class="wrapper" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

defineEmits(['close-modal'])

const addBodyClass = () => {
  document.body.classList.add('modal-open')
}

const removeBodyClass = () => {
  document.body.classList.remove('modal-open')
}

onMounted(() => {
  if (props.isOpen) {
    addBodyClass()
  }
})

onUnmounted(() => {
  removeBodyClass()
})

watch(
  () => props.isOpen,
  (newValue) => {
    if (newValue) {
      addBodyClass()
    } else {
      removeBodyClass()
    }
  }
)
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;

  padding: 45px;
  background-color: rgb(0, 0, 0, 0.5);
}

.modal {
  width: 742px;

  background-color: var(--basic-blue);
  color: white;

  padding: 45px;
  border-radius: 20px;
}
</style>
