<template>
  <section class="block">
    <div class="info">
      <div class="left">
        <div class="left-title">
          <img :src="course?.icon" alt="card-icon" />
          <h1>{{ course.name }}</h1>
        </div>

        <p>
          {{ course.description }}
        </p>

        <div class="left-tags">
          <div v-for="tag in course.tags" :key="tag" class="tag">{{ tag }}</div>
        </div>
      </div>

      <div class="right">
        <div class="right-grid">
          <div class="grid-item">
            <p>ВОЗРАСТ</p>
            <strong v-if="course.ages">{{ Math.min(...course.ages) }}+</strong>
          </div>
          <div class="grid-item">
            <p>ТРЕБОВАНИЯ</p>
            <strong>{{ course.requirements }}</strong>
          </div>
          <div class="grid-item">
            <p>УРОВЕНЬ</p>
            <strong>{{ course.level }}</strong>
          </div>
          <div class="grid-item">
            <p>УРОКИ</p>
            <strong>{{ course.lessons }} урока</strong>
          </div>
        </div>

        <button class="btn btn-blue">Записаться на курс</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  course: Object
})
</script>

<style scoped>
.block {
  padding: 80px 100px;
  background-color: var(--basic-blue);
}

.info {
  display: flex;
  max-width: 1000px;

  background-color: white;
  border-radius: 26px;
  padding: 32px;
  margin: 0 auto;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  padding: 24px 26px;
  border-right: 1px solid var(--dark-gray);
  width: 60%;
}

.left-title {
  display: flex;
  align-items: center;
  gap: 24px;
}

.left-title p {
  font-size: 20px;
}

.left-tags {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.tag {
  background-color: var(--basic-gray);
  border-radius: 50px;
  padding: 8px 16px;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 36px;

  padding: 24px 26px;
  width: 40%;
}

.right-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
}

.grid-item strong {
  font-size: 22px;
}
.grid-item p {
  font-size: 18px;
}

.right button {
  width: 75%;
  padding: 16px 24px;
  place-self: center;
}
</style>
