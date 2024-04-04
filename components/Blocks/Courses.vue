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

        <div
          class="w-full grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[36px] my-[36px]"
        >
          <div
            v-if="courses"
            :courses="courses"
            v-for="(card, index) in courses"
            :key="index"
          >
            <CourseCard :course="card" />
          </div>
        </div>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Course } from "~/domain/Course";
import BlockLayout from "~/layouts/BlockLayout.vue";

import pythonLogo from "~/assets/img/python-logo.svg";
import scratch_logo from "~/assets/img/scratch_logo.svg";
import word_logo from "~/assets/img/word_logo.svg";
import minecraft_logo from "~/assets/img/minecraft_logo.svg";
import roblox_logo from "~/assets/img/roblox_logo.svg";
import chrome_logo from "~/assets/img/chrome_logo.svg";

const selected = ref("all");

const categories = [
  { name: "all", label: "Все курсы" },
  { name: "5-8yo", label: "от 5 до 8 лет" },
  { name: "9-12yo", label: "от 9 до 12 лет" },
  { name: "13-19yo", label: "от 13 до 19 лет" },
];

const selectorStyle = [
  " w-full py-[16px] text-center text-[24px] truncate text-[#919191] border-b-[3px] border-[var(--dark-gray)] h hover:text-black",
  " w-full py-[16px] text-center text-[24px] truncate font-semibold border-b-[3px] border-[var(--basic-blue)]",
];

const courses: Course[] = [
  {
    id: "0",
    name: "Основы языка python",
    description:
      "Научим ребёнка программировать на одном из самых популярных и востребованных языков в мире",
    icon: pythonLogo,
    years: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    colors: ["#1595FF", "#2ECDFF"],
  },
  {
    id: "1",
    name: "Создание игр в Scratch",
    description:
      "Ребёнок изучит основы программирования через создание собственных игр и анимации",
    icon: scratch_logo,
    years: [5, 6, 7, 8, 9, 10, 11, 12, 13],
    colors: ["#FF8462", "#FFC565"],
  },
  {
    id: "2",
    name: "Компьютерная грамотность",
    description:
      "Научим ребёнка с пользой использовать компьютер и популярные прикладные программы.",
    icon: word_logo,
    years: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    colors: ["#3FA2EC", "#1A5EC0"],
  },
  {
    id: "3",
    name: "Python в  Minecraft",
    description:
      "Ребёнок нескучным способом изучит основы программирования на языке Python",
    icon: minecraft_logo,
    years: [8, 9, 10, 11, 12, 13, 14],
    colors: ["#97CC67", "#65B62C"],
  },
  {
    id: "4",
    name: "Roblox Studio",
    description:
      "Научим ребёнка создавать компьютерные игры в Roblox и программировать на языке Lua.",
    icon: roblox_logo,
    years: [8, 9, 10, 11, 12, 13, 14],
    colors: ["#FF6187", "#FFA16C"],
  },
  {
    id: "5",
    name: "Создание сайтов",
    description: "Научим ребёнка создавать собственные сайты в интернете",
    icon: chrome_logo,
    years: [8, 9, 10, 11, 12, 13, 14],
    colors: ["#FFC016", "#00DA5A"],
  },
];
</script>

<style scoped>
.grid-container {
}
</style>
