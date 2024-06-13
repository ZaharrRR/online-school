<template>
  <div class="card">
    <div class="card-title">
      <h3>{{ card.lessons + ' занятия(й)' }}</h3>
      <span class="gray">{{ 'за ' + card.pricePer * card.lessons + 'р' }}</span>
    </div>

    <div class="card-progress">
      <ProgressBar :progress="card.progress" />
      <span class="gray">{{ card.progress + '% курса' }}</span>
    </div>

    <span class="card-price">
      {{ card.pricePer + '₽' }}
      <br />
      <span>за урок</span>
    </span>

    <button class="btn btn-blue">Выбрать</button>
  </div>
</template>

<script setup>
import ProgressBar from '@/components/ProgressBar.vue'

defineProps({
  card: Object
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 24px;
  gap: 24px;
  border: 3px solid var(--basic-blue);
  border-radius: 18px;
}

.card:hover {
  scale: 1.1;
}

.card-title {
  text-align: center;
}

.card-title h3 {
  font-size: 36px;
  margin-top: 12px;
  margin-bottom: 0;
}

.card-progress {
  width: 100%;
  text-align: center;
}

.gray {
  color: #a4a4a4;
  font-size: 20px;
}

.card-price {
  font-size: 46px;
  font-weight: bold;
  text-align: center;
  color: var(--basic-blue);
}

.card-price span {
  font-size: 32px;
}

.card button {
  width: 75%;
  padding: 16px 24px;
}
</style>
