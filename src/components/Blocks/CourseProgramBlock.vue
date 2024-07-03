<template>
  <BlockLayout>
    <template #title>Программа курса</template>

    <div class="list">
      <div v-for="(item, index) in program" :key="index" class="item">
        <span>{{ item.section }}</span>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import BlockLayout from '@/components/Layouts/BlockLayout.vue'

defineProps({
  program: Array
})
</script>

<style scoped>
.list {
  width: fit-content;
}

.item {
  display: flex;
  gap: 16px;
  align-items: center;

  font-size: 32px;
  padding: 24px 0;
  border-top: 1px solid var(--dark-gray);
}
</style>
