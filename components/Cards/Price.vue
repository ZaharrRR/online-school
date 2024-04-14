<template>
  <div
    class="flex flex-col gap-[24px] border-[#0C73FE] border-[3px] rounded-[20px] p-[24px]"
  >
    <div class="flex flex-col items-center">
      <span class="proxima-bold text-[36px]">{{ price.lessons }} занятия</span>
      <span class="text-[#A4A4A4] proxima-regular">за {{ price.price }}р</span>
    </div>

    <div class="flex flex-col items-center">
      <ProgressBar :value="price.completion" />

      <span class="text-[#A4A4A4] proxima-regular"
        >{{ price.completion }}% курса
      </span>
    </div>

    <div class="flex flex-col items-center proxima-bold text-[#0C73FE]">
      <span class="text-[42px]">{{ price.price / price.lessons }} ₽</span>
      <span class="text-[32px]">за урок</span>
    </div>

    <div class="h-[60px]">
      <Button class="btn-blue btn-press text-[15px] mx-auto py-3 w-[75%]"
        >Выбрать
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Price } from "~/domain/Prices";
import type { PriceCardProps } from "./Price-card.types";

const props = defineProps<PriceCardProps>();
const price = ref<Price>(props.price);
</script>

<style scoped></style>
