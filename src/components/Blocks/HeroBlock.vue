<template>
  <BlockLayout class="hero">
    <div class="hero-info">
      <h1>Детская школа программирования и дизайна</h1>
      <p>Индивидуальные занятия по программированию и дизайну от 5 до 18 лет</p>

      <button class="btn btn-blue" @click="openContactModal">Попробуйте бесплатно</button>
    </div>

    <img class="hero-img" src="@/assets/img/hero-boy.png" alt="Boy" />

    <ContactModal :is-open="isOpenContactModal" @close-modal="closeContactModal" />
  </BlockLayout>
</template>

<script setup>
import { ref } from 'vue'
import BlockLayout from '@/components/Layouts/BlockLayout.vue'
import ContactModal from '@/components/Modals/ContactModal.vue'

const isOpenContactModal = ref(false)

const openContactModal = () => {
  isOpenContactModal.value = true
}

const closeContactModal = () => {
  isOpenContactModal.value = false
}
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
</style>
