<template>
  <main>
    <Hero />
    <Courses />
    <Prices />
    <Benefits />
    <Contacts />
  </main>
</template>

<script setup>
import Hero from '@/components/Blocks/HeroBlock.vue'
import Courses from '@/components/Blocks/CoursesBlock.vue'
import Prices from '@/components/Blocks/PricesBlock.vue'
import Contacts from '@/components/Blocks/ContactBlock.vue'
import Benefits from '@/components/Blocks/BenefitsBlock.vue'
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 64px;
}
</style>
