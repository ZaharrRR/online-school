<template>
  <section class="block">
    <div class="info">
      <div class="left">
        <div class="left-title">
          <img :src="course?.icon" alt="card-icon" />
          <h1>{{ course.name }}</h1>
        </div>

        <p class="left-desc">
          {{ course.description }}
        </p>

        <div class="left-tags">
          <div v-for="tag in course.tags" :key="tag" class="tag">{{ tag }}</div>
        </div>
      </div>

      <div class="right">
        <div class="right-grid">
          <div class="grid-item">
            <p>ВОЗРАСТ</p>
            <strong v-if="course.ages">{{ Math.min(...course.ages) }}+</strong>
          </div>
          <div class="grid-item">
            <p>ТРЕБОВАНИЯ</p>
            <strong>{{ course.requirements }}</strong>
          </div>
          <div class="grid-item">
            <p>УРОВЕНЬ</p>
            <strong>{{ course.level }}</strong>
          </div>
          <div class="grid-item">
            <p>УРОКИ</p>
            <strong>{{ course.lessons }} урока</strong>
          </div>
        </div>

        <button class="btn btn-blue" @click="openContactModal">Записаться на курс</button>
      </div>
    </div>

    <ContactModal :is-open="isOpenContactModal" :course="course" @close-modal="closeContactModal" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import ContactModal from '@/components/Modals/ContactModal.vue'

defineProps({
  course: Object
})

const isOpenContactModal = ref(false)

const openContactModal = () => {
  isOpenContactModal.value = true
}

const closeContactModal = () => {
  isOpenContactModal.value = false
}
</script>

<style scoped>
.block {
  padding: 80px 100px;
  background-color: var(--basic-blue);
}

.info {
  display: flex;
  max-width: 1000px;

  background-color: white;
  border-radius: 26px;
  padding: 32px;
  margin: 0 auto;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  padding: 24px 26px;
  border-right: 1px solid var(--dark-gray);
  width: 60%;
}

.left-title {
  display: flex;
  align-items: center;
  gap: 24px;
}

.left-title p {
  font-size: 20px;
}

.left-tags {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.tag {
  background-color: var(--basic-gray);
  border-radius: 50px;
  padding: 6px 12px;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 36px;

  padding: 24px 26px;
  width: 40%;
}

.right-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
}

.grid-item strong {
  font-size: 20px;
}
.grid-item p {
  font-size: 18px;
  margin-bottom: 16px;
}

.right button {
  width: 75%;
  padding: 16px 24px;
  place-self: center;
}

@media (max-width: 480px) {
  .block {
    padding: 30px 40px;
  }

  .info {
    flex-direction: column;
    max-width: 100%;
    width: 100%;
    padding: 20px;
  }

  .left {
    width: 100%;
    gap: 12px;
    padding: 12px 0;
    padding-bottom: 24px;
    border: none;

    border-bottom: 1px solid var(--dark-gray);
  }

  .left-desc {
    font-size: 14px;
  }

  .left-tags {
    gap: 10px;
  }

  .tag {
    font-size: 12px;
  }

  .right {
    width: 100%;
    gap: 12px;
    padding: 12px 0;
    padding-top: 24px;
  }

  .right button {
    margin-top: 32px;
  }

  .grid-item strong {
    font-size: 18px;
  }
  .grid-item p {
    font-size: 14px;
    margin-bottom: 12px;
  }
}
</style>
