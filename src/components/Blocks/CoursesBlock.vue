<template>
  <BlockLayout>
    <template #title>Курсы</template>
    <template #description
      >Онлайн-занятия по программированию и дизайну для детей, школьников и подростков
    </template>

    <CoursesAges v-model="selectedAge" :ages="ages" />
    <CoursesList :courses="filterdCourses" />
  </BlockLayout>
</template>

<script setup>
import { ref, computed } from 'vue'

import BlockLayout from '@/components/Layouts/BlockLayout.vue'

import CoursesAges from './CoursesAges.vue'
import CoursesList from '../Lists/CoursesList.vue'

import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

const store = useStore()
const { courses } = storeToRefs(store)

const ages = [
  {
    name: 'Все курсы',
    code: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    name: '5-8 лет',
    code: [5, 6, 7, 8]
  },
  {
    name: '9-12 лет',
    code: [9, 10, 11, 12]
  },
  {
    name: '13-18 лет',
    code: [13, 14, 15, 16, 17, 18]
  }
]

const selectedAge = ref(ages[0])

const filterdCourses = computed(() => {
  return courses.value.filter((el) => el.ages.some((age) => selectedAge.value.code.includes(age)))
})
</script>

<style scoped></style>
