<template>
  <BlockLayout>
    <div class="flex flex-col gap-[24px]">
      <div>
        <span class="text-[36px] proxima-bold">Стоимость занятий</span>
      </div>

      <div class="relative">
        <div class="overflow-x-auto whitespace-nowrap scroll-smooth">
          <div
            class="inline-block p-4 xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full"
            v-for="(card, index) in prices"
            :key="index"
          >
            <CardsPrice :price="card" />
          </div>
        </div>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import type { Price } from "~/domain/Prices";
import BlockLayout from "~/layouts/BlockLayout.vue";

const prices: Price[] = [
  {
    id: "65366456",
    lessons: 4,
    price: 3040,
    completion: 12.5,
  },
  {
    id: "74556556",
    lessons: 8,
    price: 5760,
    completion: 25,
  },
  {
    id: "5543456",
    lessons: 16,
    price: 10880,
    completion: 50,
  },
  {
    id: "5634543",
    lessons: 32,
    price: 20480,
    completion: 100,
  },
];
</script>

<style scoped></style>
