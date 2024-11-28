<template>
  <BlockLayout>
    <template #title>Проекты учеников</template>

    <div class="projects">
      <button @click="prevProject">
        <img src="/icons/slide-button-left.svg" alt="slide-button" class="arrow" />
      </button>

      <div v-if="projects && projects.length > 0" class="project">
        <div class="project-student">
          <img :src="projects[currentIndex].studentImg" alt="student" />
          <p>{{ projects[currentIndex].studentName }}</p>
        </div>

        <div class="project-card">
          <img :src="projects[currentIndex].img" alt="project" />
          <p>{{ projects[currentIndex].title }}</p>
        </div>
      </div>

      <button @click="nextProject">
        <img src="/icons/slide-button-right.svg" alt="slide-button" class="arrow" />
      </button>
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlockLayout from '@/components/Layouts/BlockLayout.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

const nextProject = () => {
  if (currentIndex.value < props.projects.length - 1) {
    currentIndex.value++
  }
}

const prevProject = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  gap: 24px;
  width: 100%;
  margin: 24px auto;
  align-items: center;
  justify-content: space-between;
}

.project {
  display: flex;
  align-items: center;
  gap: 24px;
}

.project img {
  width: 100%;
  border-radius: 20px;
  border: 1px solid var(--dark-gray);

  height: 300px;
}

.project-student {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 33%;
}

.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 66%;
}

.btn {
  padding: 8px 16px;
  cursor: pointer;
}

@media (max-width: 480px) {
  .projects {
    margin: 4px auto;
    gap: 12px;
  }

  .project {
    flex-direction: column;
    gap: 12px;
  }

  .project img {
    width: 100%;
    height: fit-content;
    border-radius: 8px;
  }

  .arrow {
    width: 40px;
    height: 40px;
  }

  .project-student {
    width: 100%;
  }

  .project-card {
    width: 100%;
  }
}
</style>
