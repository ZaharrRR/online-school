<template>
  <BlockLayout class="hero">
    <div class="hero-info">
      <h1>Детская школа программирования и дизайна</h1>
      <p>Индивидуальные занятия по программированию и дизайну от 5 до 18 лет</p>

      <button class="btn btn-blue" @click="openContactModal">Попробуйте бесплатно</button>
    </div>

    <img class="hero-img" src="@/assets/img/hero-boy.png" alt="Boy" />

    <button v-if="windowWidth < 480" class="btn btn-blue" @click="openContactModal">
      Попробуйте бесплатно
    </button>

    <ContactModal :is-open="isOpenContactModal" @close-modal="closeContactModal" />
  </BlockLayout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BlockLayout from '@/components/Layouts/BlockLayout.vue'
import ContactModal from '@/components/Modals/ContactModal.vue'

const isOpenContactModal = ref(false)

const openContactModal = () => {
  isOpenContactModal.value = true
}

const closeContactModal = () => {
  isOpenContactModal.value = false
}

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
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
}

.hero-info {
  width: 35%;
}

.hero-info h1 {
  font-size: 48px;
}

.hero-info p {
  font-size: 24px;
}

.hero-info button {
  padding: 18px 18px;
  width: 80%;
  margin-top: 36px;
  font-size: 24px;
}

.hero-img {
  width: 65%;
}

@media (max-width: 480px) {
  .hero {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  }

  .hero-info {
    width: 100%;
    margin-bottom: 16px;
  }

  .hero-info h1 {
    font-size: 32px;
  }

  .hero-info p {
    font-size: 16px;
  }

  .hero-info button {
    display: none;
  }

  .hero button {
    padding: 14px;
    width: 80%;
    margin-top: 15px;
    font-size: 16px;
  }

  .hero-img {
    width: 80%;
  }
}
</style>
