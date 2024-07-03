<template>
  <BlockLayout>
    <template #title>Как проходит урок?</template>

    <div v-if="cards" class="going-block">
      <GoingCard v-for="card in cards" :key="card.title" :card="card" class="item" />
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import BlockLayout from '@/components/Layouts/BlockLayout.vue'
import GoingCard from '@/components/Cards/GoingCard.vue'

const cards = [
  {
    title: 'Пробное занятие',
    description:
      'Пробное занятие абсолютно бесплатно. За его время учитель познакомится с учеником, поможет определиться с целями, а также будет изучена вступительная тема',
    img: '/rectangle.png'
  },
  {
    title: 'Практический подход',
    description:
      'На каждом уроке ученик изучает новую тему, закрепляет знания на практике, а затем выполняет домашнее задание. Раз в неделю преподаватель сообщает родителям об успеваемости ребенка.',
    img: '/rectangle.png'
  },
  {
    title: 'Создание проекта',
    description:
      'На середине курса ученик выбирает тему своего собственного проекта и начинает работу над ним',
    img: '/rectangle.png'
  },
  {
    title: 'Презентация проекта',
    description: 'Ученик публикует свой проект в интернете и представляет его на выпускном курсе',
    img: '/rectangle.png'
  }
]
</script>

<style scoped>
.going-block {
  display: flex;
  width: fit-content;
  margin: 0 auto;
  gap: 36px;
}

.item {
  width: 220px;
}
</style>
