<template>
  <BlockLayout id="prices-block">
    <template #title>Стоимость занятий</template>

    <div class="prices">
      <PriceBlock
        class="all-lessons"
        :title="allLessons.title"
        :benefits="allLessons.benefits"
        :price="allLessons.price"
        :tags="allLessons.tags"
        background-color="var(--basic-blue)"
        color="white"
        border-color="var(--basic-blue)"
        box-shadow="10px 10px 0 0 var(--dark-blue)"
        @submit="submitPrice"
      />

      <PriceBlock
        class="one-lesson"
        :title="oneLesson.title"
        :benefits="oneLesson.benefits"
        :price="oneLesson.price"
        :tags="oneLesson.tags"
        background-color="white"
        color="black"
        border-color="black"
        box-shadow="10px 10px 0 0 black"
        @submit="submitPrice"
      />
    </div>

    <ContactModal
      :is-open="isOpenContactModal"
      :price="currentPrice"
      @close-modal="closeContactModal"
    />
  </BlockLayout>
</template>

<script setup>
import { ref } from 'vue'

import BlockLayout from '@/components/Layouts/BlockLayout.vue'
import PriceBlock from '@/components/PriceBlock.vue'

import ContactModal from '@/components/Modals/ContactModal.vue'

const isOpenContactModal = ref(false)

const currentPrice = ref('')

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

const submitPrice = (title) => {
  console.log(title)
  currentPrice.value = title
  openContactModal()
}

const openContactModal = () => {
  isOpenContactModal.value = true
}

const closeContactModal = () => {
  isOpenContactModal.value = false
}
</script>

<style scoped>
.prices {
  display: flex;
  justify-content: space-around;
  gap: 32px;
}

@media (max-width: 480px) {
  .prices {
    flex-direction: column;
  }
}
</style>
