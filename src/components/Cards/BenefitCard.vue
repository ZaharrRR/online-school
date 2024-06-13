<template>
  <div class="card" :style="cardStyle">
    <img :src="card.icon" alt="card-icon" />

    <div class="card-text">
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  card: Object,
  cardIndex: Number
})

const cardStyle = computed(() => ({
  flexDirection: props.cardIndex % 2 === 0 ? 'row' : 'row-reverse',
  justifyContent: props.cardIndex % 2 === 0 ? 'flex-start' : 'space-between'
}))
</script>

<style scoped>
.card {
  display: flex;
  align-items: start;
  gap: 64px;
}

.card-text h3 {
  font-size: 32px;
}

.card-text p {
  font-size: 20px;
}
</style>
