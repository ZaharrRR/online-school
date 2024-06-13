<template>
  <BlockLayout class="hero">
    <div class="hero-info">
      <h1>Детская школа программирования и дизайна</h1>
      <p>Индивидуальные занятия по программированию и дизайну от 5 до 18 лет</p>

      <button class="btn btn-blue">Попробуйте бесплатно</button>
    </div>

    <img class="hero-img" src="@/assets/img/hero-boy.png" alt="Boy" />
  </BlockLayout>
</template>

<script setup>
import BlockLayout from '@/components/Layouts/BlockLayout.vue'
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
}

.hero-info {
  width: 35%;
}

.hero-info h1 {
  font-size: 48px;
}

.hero-info p {
  font-size: 24px;
}

.hero-info button {
  padding: 18px 18px;
  width: 80%;
  margin-top: 36px;
  font-size: 24px;
}

.hero-img {
  width: 65%;
}
</style>
