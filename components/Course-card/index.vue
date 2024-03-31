<template>
  <div
    class="px-[16px] pt-[24px] h-[360px] text-white"
    :style="`background: rgb(2,0,36);
    background: linear-gradient(90deg, ${colors[0]} 0%, ${colors[1]} 100%);`"
  >
    <div class="flex justify-between">
      <span class="inter-bold text-[24px]">{{ course.name }}</span>
      <!-- <img :src="`~/assets/img/${course.icon}.svg`" alt="" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CourseCardProps } from "./Course-card.types";

const props = defineProps<CourseCardProps>();

const { colors } = props.course;
const { course } = props;
</script>
