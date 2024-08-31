<template>
  <BlockLayout>
    <template #title>Стоимость занятий</template>

    <div class="prices">
      <div class="price-block" style="background-color: var(--basic-blue); color: white">
        <div class="block-tags">
          <div
            v-for="tag in allLessons.tags"
            :key="tag.value"
            class="tag"
            :class="{ 'tag-accent': tag.accent }"
          >
            {{ tag.value }}
          </div>
        </div>
        <div class="block-benefits">
          <div v-for="benefit in allLessons.benefits" :key="benefit" class="benefit">
            {{ benefit }}
          </div>
        </div>
        <div class="block-price">
          <div class="value">{{ allLessons.price.value }}</div>
          <div class="subtitle">{{ allLessons.price.subtitle }}</div>
        </div>
        <div class="block-button">
          <button class="btn">записаться</button>
        </div>
      </div>

      <div class="price-block">
        <div class="block-tags">
          <div
            v-for="tag in allLessons.tags"
            :key="tag.value"
            class="tag"
            :class="{ 'tag-accent': tag.accent }"
          >
            {{ tag.value }}
          </div>
        </div>
        <div class="block-benefits">
          <div v-for="benefit in oneLesson.benefits" :key="benefit" class="benefit">
            {{ benefit }}
          </div>
        </div>
        <div class="block-price">
          <div class="value">{{ oneLesson.price.value }}</div>
          <div class="subtitle">{{ oneLesson.price.subtitle }}</div>
        </div>
        <div class="block-button">
          <button class="btn">записаться</button>
        </div>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup>
import BlockLayout from '@/components/Layouts/BlockLayout.vue'

const allLessons = {
  title: 'Весь курс',
  benefits: [
    'индивидуальные занятия',
    'личный менеджер',
    'домашняя работа и ее проверка',
    'длительность занятия - 50 минут',
    '32 занятия'
  ],
  price: {
    value: 22400,
    subtitle: '700 ₽ за занятие'
  },
  tags: [
    {
      value: 'выгодно',
      accent: true
    },
    {
      value: 'онлайн',
      accent: false
    }
  ]
}

const oneLesson = {
  title: 'Одно занятие',
  benefits: [
    'индивидуальные занятия',
    'личный менеджер',
    'домашняя работа и ее проверка',
    'длительность занятия - 50 минут',
    '1 занятия'
  ],
  price: {
    value: 800,
    subtitle: 'курс рассчитан на 32 занятия'
  },
  tags: [
    {
      value: 'онлайн',
      accent: false
    }
  ]
}
</script>

<style scoped>
.prices {
  display: flex;
  justify-content: space-around;
  gap: 32px;
}

.price-block {
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 32px 42px;
  border-radius: 60px;
}
</style>
