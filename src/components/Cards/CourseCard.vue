<template>
  <div
    class="card"
    :style="`background: rgb(2,0,36);
    background: linear-gradient(to bottom right, ${card.colors[0]} 0%, ${card.colors[1]} 100%);`"
  >
    <h3>{{ card.name }}</h3>

    <p>{{ card.description }}</p>

    <div class="card-btns">
      <span class="card-age" :style="`border: 2px solid ${card.colors[0]};`">
        {{ Math.min(...card.ages) + '-' + Math.max(...card.ages) + ' лет' }}
      </span>

      <RouterLink :to="`/course/${card.id}`">
        <button
          class="btn"
          :style="`border: 2px solid ${card.colors[0]}; background-color: ${card.colors[0]}`"
        >
          Подробнее
        </button>
      </RouterLink>
    </div>

    <img class="card-img" :src="card.icon" alt="card-icon" />
  </div>
</template>

<script setup>
defineProps({
  card: Object
})
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 40px;
  border-radius: 18px;
  color: white;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-16px);
}

.card h3 {
  font-size: 24px;
  width: 75%;
  margin-top: 12px;
  margin-bottom: 12px;
}

.card p {
  width: 75%;
  flex: 1;
}

.card-btns {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}

.card-btns button {
  color: white;
}

.card-age {
  border: 2px solid;
  border-radius: 50px;
  padding: 8px 16px;
}

.card-img {
  position: absolute;
  right: 40px;
  top: 20px;
}

@media (max-width: 480px) {
  .card {
    gap: 16px;
    padding: 16px 18px;
  }

  .card h3 {
    font-size: 16px;
    width: 60%;
  }

  .card p {
    font-size: 12px;
  }

  .card-btns {
    margin-top: 8px;
  }

  .card-btns button {
    font-size: 10px;
  }

  .card-age {
    border: 2px solid;
    border-radius: 50px;
    padding: 8px 16px;
    font-size: 10px;
  }

  .card-img {
    width: 60px;
    right: 25px;
    top: 12px;
  }
}
</style>
