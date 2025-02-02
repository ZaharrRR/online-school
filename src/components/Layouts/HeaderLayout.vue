<template>
  <header>
    <div class="header-top">
      <RouterLink class="logo" to="/">
        <img src="/logo.svg" alt="logo" />
      </RouterLink>

      <button @click="tuggleBurger()" class="burger-button">
        <img src="/icons/burger-menu.svg" alt="" />
      </button>
    </div>

    <nav :class="['header-burger', isBurgerMenuOpen == true ? 'visible' : '']">
      <a @click="scrollTo('courses-block')" class="burger-item">Курсы</a>
      <a @click="scrollTo('prices-block')" class="burger-item">Цены</a>
      <a class="burger-item">+7 (951) 175-1753</a>
    </nav>

    <nav class="header-nav">
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
import { RouterLink } from 'vue-router'

const isOpenContactModal = ref(false)

const isBurgerMenuOpen = ref(false)

const tuggleBurger = () => {
  isBurgerMenuOpen.value = !isBurgerMenuOpen.value
}

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

.burger-button {
  display: none;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 36px;
}

.header-nav a {
  cursor: pointer;
}

.header-nav a:hover {
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

.header-burger {
  display: none;
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
    flex-direction: column;
    gap: 12px;
  }

  .burger-button {
    display: block;
  }

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    width: 100%;
  }

  .logo img {
    width: 150px;
  }

  .header-burger {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 4px;

    transition: 0.3s;
  }

  .burger-item {
    display: none;
    font-size: 20px;
    padding: 20px 50px;
    border-bottom: 1px solid var(--dark-gray);
  }

  .visible {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    height: 195px;
  }

  .visible .burger-item {
    display: block;
  }

  .header-nav {
    display: none;
  }

  .contacts {
    display: none;
  }

  .contacts button {
    border-color: var(--basic-blue);
    padding: 8px 36px;
    font-weight: 500;
  }
}
</style>
