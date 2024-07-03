<template>
  <div class="card">
    <img :src="card.img" />
    <h4>{{ card.title }}</h4>
    <p>{{ card.description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  card: Object
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card p {
  font-size: 12px;
}
</style>
