<template>
  <div v-if="windowWidth > 480" class="grid">
    <CourseCard v-for="course in courses" :key="course.id" :card="course" />
  </div>

  <div v-else>
    <DropDown title="Программиорвание">
      <div class="list">
        <CourseCard v-for="course in courses" :key="course.id" :card="course" :is-small="true" />
      </div>
    </DropDown>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

import CourseCard from '@/components/Cards/CourseCard.vue'

import DropDown from '@/components/DropDown.vue'

defineProps({
  courses: Array
})

const windowWidth = ref(window.innerWidth)

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-auto-rows: 1fr;
  gap: 36px;
  margin-top: 36px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 28px 0;
  width: 100%;
}
</style>
