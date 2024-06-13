<template>
  <div class="grid">
    <PriceCard v-for="price in prices" :key="price.id" :card="price" />
  </div>
</template>

<script setup>
import PriceCard from '@/components/Cards/PriceCard.vue'

defineProps({
  prices: Array
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  gap: 36px;
  margin-top: 36px;
}
</style>
