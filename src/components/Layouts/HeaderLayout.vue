<template>
  <header>
    <a class="logo" href="/">
      <img src="/logo.svg" alt="logo" />
    </a>

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

  margin: 0 auto;

  padding: 40px 50px;
  width: var(--screen-lg);
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

@media (max-width: 1366px) {
  header {
    width: var(--screen-md);
  }
}

@media (max-width: 768px) {
  header {
    padding: 0 20px;
    width: var(--screen-sm);
  }
}

@media (max-width: 480px) {
  header {
    padding: 20px 27px;
    width: 100%;
  }

  nav {
    display: none;
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
    display: none;
    align-items: center;
    gap: 24px;
  }

  .contacts button {
    border-color: var(--basic-blue);
    padding: 8px 36px;
    font-weight: 500;
  }
}
</style>
