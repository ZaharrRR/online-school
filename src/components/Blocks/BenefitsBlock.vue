<template>
  <BlockLayout>
    <template #title>Как проходит обучение</template>

    <BenefitsList :benefits="benefits" />
  </BlockLayout>
</template>

<script setup>
import BlockLayout from '@/components/Layouts/BlockLayout.vue'

import BenefitsList from '@/components/Lists/BenefitsList.vue'

import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

const store = useStore()
const { benefits } = storeToRefs(store)
</script>

<style scoped></style>
