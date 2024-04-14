<template>
  <div
    class="flex flex-col justify-between px-[32px] py-[24px] h-[360px] text-white rounded-[20px]"
    :style="`background: rgb(2,0,36);
    background: linear-gradient(to bottom right, ${colors[0]} 0%, ${colors[1]} 100%);`"
  >
    <div>
      <div class="flex justify-between">
        <span class="inter-bold text-[24px] w-[50%]">{{ course.name }}</span>
        <img :src="course.icon" width="100px" />
      </div>

      <p class="inter-semi text-[18px] w-[80%]">
        {{ course.description }}
      </p>
    </div>

    <div class="flex justify-between">
      <div
        class="text-[18px] text-center px-3 p-1 rounded-full inter-regular"
        :style="`border: 2px solid ${colors[0]};`"
      >
        {{ Math.min(...course.years) + "-" + Math.max(...course.years) }}
        лет
      </div>
      <button
        class="text-[18px] rounded-full px-3 py-1 hover:shadow-lg"
        :style="`border: 2px solid ${colors[0]}; background-color: ${colors[0]};`"
      >
        <span>Подробнее</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CourseCardProps } from "./Course-card.types";

const props = defineProps<CourseCardProps>();

const { colors } = props.course;
const { course } = props;
</script>
