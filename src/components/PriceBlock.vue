<template>
  <div class="price-block" :style="blockStyle">
    <div class="block-tags">
      <div v-for="tag in tags" :key="tag.value" :class="['tag', { 'tag-accent': tag.accent }]">
        {{ tag.value }}
      </div>
    </div>
    <div class="block-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="block-benefits">
      <div v-for="benefit in benefits" :key="benefit" class="benefit">
        {{ benefit }}
      </div>
    </div>
    <hr />
    <div class="block-price">
      <div class="value">{{ formattedPrice }} ₽</div>
      <div class="subtitle">{{ price.subtitle }}</div>
    </div>
    <div class="block-button">
      <button class="button" @click="$emit('submit', props.title)">записаться</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  benefits: Array,
  price: Object,
  tags: Array,
  backgroundColor: String,
  color: String,
  borderColor: String,
  boxShadow: String
})

defineEmits(['submit'])

const blockStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
  color: props.color,
  borderColor: props.borderColor,
  boxShadow: props.boxShadow
}))

const formattedPrice = computed(() => {
  return props.price.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
})
</script>

<style scoped>
.price-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 480px;
  padding: 32px 42px;
  border-radius: 60px;
  border: 1px solid;
}

.block-tags {
  display: flex;
  gap: 15px;
}

.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  border-radius: 50px;
  border: 2px solid;
  font-size: 18px;
  font-weight: bold;
}

.tag-accent {
  background-color: #ff5319;
  border-color: #ff5319;
}

.block-title h2 {
  font-size: 36px;
  font-weight: bold;
  margin: 0;
}

.block-benefits {
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin: 24px 0;
}

.block-benefits .benefit {
  font-size: 18px;
  font-weight: bold;
  position: relative;
  padding-left: 50px;
}

.benefit::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
}

.all-lessons .benefit::before {
  background-color: white;
}

.one-lesson .benefit::before {
  background-color: black;
}

.block-price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.block-price .value {
  font-size: 48px;
  font-weight: 800;
}

.block-price .subtitle {
  font-weight: 500;
}

.block-button {
  display: flex;
  justify-content: center;
}

.button {
  width: 75%;
  background-color: #ff5319;
  color: white;
  border-radius: 20px;
  padding: 16px;
  font-size: 32px;
  font-weight: bold;
  transition: 0.2s;
}

.button:hover {
  scale: 1.1;
}
</style>
