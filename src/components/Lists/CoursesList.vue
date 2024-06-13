<template>
  <div class="grid">
    <CourseCard v-for="course in courses" :key="course.id" :card="course" />
  </div>
</template>

<script setup>
import CourseCard from '@/components/Cards/CourseCard.vue'

defineProps({
  courses: Array
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: 1fr;
  gap: 36px;
  margin-top: 36px;
}
</style>
