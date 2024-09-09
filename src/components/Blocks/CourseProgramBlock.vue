<template>
  <BlockLayout>
    <template #title>Программа курса</template>

    <div class="list">
      <div v-for="(item, index) in program" :key="index">
        <DropDown :title="item.section">
          <div v-for="(sub, index) in item.subsections" :key="index" class="sub-item">
            {{ sub }}
          </div>
        </DropDown>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import BlockLayout from '@/components/Layouts/BlockLayout.vue'

import DropDown from '@/components/DropDown.vue'

defineProps({
  program: Array
})
</script>

<style scoped>
.list {
  width: fit-content;
}

.sub-item {
  font-size: 18px;

  margin: 12px 0 0 20px;
}
</style>
