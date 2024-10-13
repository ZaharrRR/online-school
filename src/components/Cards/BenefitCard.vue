<template>
  <div v-if="windowWidth > 480" class="card" :style="cardStyle">
    <img :src="card.icon" alt="card-icon" />

    <div class="card-text">
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
    </div>
  </div>

  <div v-else class="card">
    <div class="card-title">
      <img :src="card.icon" alt="card-icon" />
      <h3>{{ card.title }}</h3>
    </div>

    <p>{{ card.description }}</p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

import { computed } from 'vue'

const props = defineProps({
  card: Object,
  cardIndex: Number
})

const cardStyle = computed(() => ({
  flexDirection: props.cardIndex % 2 === 0 ? 'row' : 'row-reverse',
  justifyContent: props.cardIndex % 2 === 0 ? 'flex-start' : 'space-between'
}))

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

.card-title {
  display: flex;
  gap: 22px;
  align-items: center;
}

@media (max-width: 480px) {
  .card {
    flex-direction: column;
    gap: 16px;

    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 14px;
  }

  img {
    width: 65px;
    height: 65px;
  }

  .card h3 {
    font-size: 20px;
    margin: auto 0;
  }

  .card p {
    font-size: 14px;
  }
}
</style>
