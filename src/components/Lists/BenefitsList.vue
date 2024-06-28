<template>
  <div class="list">
    <BenefitCard
      v-for="(benefit, index) in benefits"
      :key="benefit.id"
      :card="benefit"
      :card-index="index"
    />
  </div>
</template>

<script setup>
import BenefitCard from '@/components/Cards/BenefitCard.vue'

defineProps({
  benefits: Array
})
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 100px;
}
</style>
