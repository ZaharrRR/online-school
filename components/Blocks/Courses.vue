<template>
  <BlockLayout>
    <div class="flex flex-col gap-[24px]">
      <div>
        <span class="text-[36px] proxima-bold">Курсы</span>
      </div>

      <div>
        <p>
          Онлайн-занятия по программированию и дизайну для детей, школьников и
          подростков
        </p>
      </div>

      <div>
        <div class="flex w-100">
          <div
            class="w-1/4"
            v-for="(category, index) in categories"
            :key="index"
          >
            <button
              :class="
                selected === category.name ? selectorStyle[1] : selectorStyle[0]
              "
              @click="selected = category.name"
            >
              {{ category.label }}
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import BlockLayout from "~/layouts/BlockLayout.vue";

const selected = ref("all");

const categories = [
  { name: "all", label: "Все курсы" },
  { name: "5-8yo", label: "от 5 до 8 лет" },
  { name: "9-12yo", label: "от 9 до 12 лет" },
  { name: "13-19yo", label: "от 13 до 19 лет" },
];

const selectorStyle = [
  " w-full py-[16px] text-center text-[24px] text-[#919191] border-b-[3px] border-[var(--dark-gray)] h hover:text-black",
  " w-full py-[16px] text-center text-[24px] font-semibold border-b-[3px] border-[var(--basic-blue)]",
];
</script>

<style scoped></style>
