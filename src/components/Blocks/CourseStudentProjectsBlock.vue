<template>
  <BlockLayout>
    <template #title>Проекты учеников</template>

    <div class="projects">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <img :src="project.img" alt="project" />
        <p>{{ project.title }}</p>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import BlockLayout from '@/components/Layouts/BlockLayout.vue'

defineProps({
  projects: Object
})
</script>

<style scoped>
.projects {
  display: flex;
  gap: 24px;
  width: fit-content;
  margin: 24px auto;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project p {
  width: 50%;
  text-align: center;
}
</style>
