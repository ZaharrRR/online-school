<template>
  <main>
    <CourseInfo :course="course" />
    <CourseAbout v-if="course.about" :about="course.about" />
    <!-- <CourseStudentProjects />
    <CourseGoing />
    <CourseProgram /> -->
    <ContactBlock />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import ContactBlock from '@/components/Blocks/ContactBlock.vue'
import CourseInfo from '@/components/Blocks/CourseInfoBlock.vue'
import CourseAbout from '@/components/Blocks/CourseAboutBlock.vue'

import { useRoute } from 'vue-router'

import { useStore } from '@/stores/Store'

const store = useStore()

const route = useRoute()
const courseId = Number(route.params.id)

const course = ref({})

onMounted(async () => {
  const respose = await store.getCourse(courseId)

  if (respose) {
    course.value = respose
  }
})
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 64px;
}
</style>
