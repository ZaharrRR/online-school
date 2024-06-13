<template>
  <Header />

  <RouterView />

  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Layouts/HeaderLayout.vue'
import Footer from './components/Layouts/FooterLayout.vue'
</script>

<style scoped></style>
