<template>
  <header>
    <a class="logo" href="/">ПРОГА</a>

    <nav>
      <!-- <a href="">О нас</a> -->
      <a @click="scrollTo('courses-block')">Курсы</a>
      <a @click="scrollTo('prices-block')">Цены</a>
      <!-- <a href="">Преподаватели</a> -->
    </nav>

    <div class="contacts">
      <span>+7 (951) 175-1753</span>
      <button class="btn" @click="openContactModal">Запись</button>
    </div>

    <ContactModal :is-open="isOpenContactModal" @close-modal="closeContactModal" />
  </header>
</template>

<script setup>
import { ref } from 'vue'

import router from '@/router'

import ContactModal from '@/components/Modals/ContactModal.vue'

const isOpenContactModal = ref(false)

const openContactModal = () => {
  isOpenContactModal.value = true
}

const closeContactModal = () => {
  isOpenContactModal.value = false
}

function scrollTo(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  } else {
    router.push({ name: 'home' })
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 50px;
}

.logo {
  font-size: 40px;
  font-weight: bold;
}

nav {
  display: flex;
  align-items: center;
  gap: 36px;
}

nav a {
  cursor: pointer;
}

nav a:hover {
  text-decoration: underline;
}

.contacts {
  display: flex;
  align-items: center;
  gap: 24px;
}

.contacts button {
  border-color: var(--basic-blue);
  padding: 8px 36px;
  font-weight: 500;
}
</style>
