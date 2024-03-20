<template>
  <div class="container mx-auto px-[80px] py-[36px] flex justify-between">
    <div class="flex gap-[76px] items-center">
      <span class="text-[48px] font-black">LOGO</span>

      <nav class="flex gap-[55px]">
        <NuxtLink class="text-[24px] font-light">О нас</NuxtLink>
        <NuxtLink class="text-[24px] font-light">Курсы</NuxtLink>
        <NuxtLink class="text-[24px] font-light">Цены</NuxtLink>
        <NuxtLink class="text-[24px] font-light">Преподаватели</NuxtLink>
      </nav>
    </div>

    <div class="flex items-center gap-[42px]">
      <span class="text-[24px] font-light">+7 (951) 175-1764</span>
      <Button
        class="border-[#0C73FE] text-[24px] text-center pt-0 pb-1 px-[46px]"
        >Запись</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
