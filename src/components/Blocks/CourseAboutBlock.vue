<template>
  <BlockLayout>
    <template #title>Об этом курсе</template>
    <div class="about">
      <div class="about-goal">
        <p v-for="(p, index) in about.goal" :key="index">{{ p }}</p>
      </div>
      <div class="about-topics">
        <h3>ОСНОВНЫЕ ТЕМЫ</h3>
        <div v-for="(topic, index) in about.topics" :key="index" class="topic">
          <img src="/icons/check.svg" alt="" />
          <span>{{ topic }}</span>
        </div>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import BlockLayout from '@/components/Layouts/BlockLayout.vue'

defineProps({
  about: Object
})
</script>

<style scoped>
.about {
  display: flex;
  gap: 24px;
  justify-content: space-between;
}

.about-goal {
  width: 40%;
}

.about-goal p {
  font-size: 20px;
}

.about-topics {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 350px;

  background-color: #0c71f9;
  color: white;
  border-radius: 26px;
  padding: 28px;
  margin-right: 50px;

  font-size: 14px;
  font-weight: 500;

  transform: translate(0em, -20%);
}

.about-topics h3 {
  margin: 0;
  font-size: 12px;
  font-weight: 200;
}

.topic {
  display: flex;
  align-items: start;
  gap: 18px;

  padding: 4px 8px;
}
</style>
