<template>
  <BlockLayout>
    <div class="flex justify-between items-center">
      <div class="w-[50%] flex flex-col gap-[46px]">
        <span class="proxima-bold text-[48px]"
          >Детская школа программирования и дизайна</span
        >
        <p class="proxima-regular text-[28px]">
          Индивидуальные занятия по программированию и дизайну от 5 до 18 лет
        </p>
        <div class="h-[100px] center">
          <Button class="btn-blue btn-press text-[24px]"
            >Попробуйте бесплатно</Button
          >
        </div>
      </div>

      <div class="w-[50%]">
        <img src="/assets/img/hero-child.svg" alt="hero-child" />
      </div>
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import BlockLayout from "~/layouts/BlockLayout.vue";
</script>

<style scoped></style>
