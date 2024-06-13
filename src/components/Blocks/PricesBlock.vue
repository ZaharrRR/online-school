<template>
  <BlockLayout>
    <template #title>Стоимость занятий</template>

    <PricesList :prices="prices" />
  </BlockLayout>
</template>

<script setup>
import BlockLayout from '@/components/Layouts/BlockLayout.vue'

import PricesList from '@/components/Lists/PricesList.vue'

import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

const store = useStore()
const { prices } = storeToRefs(store)
</script>

<style scoped></style>
