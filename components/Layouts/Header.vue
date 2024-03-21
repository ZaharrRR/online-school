<template>
  <header class="container mx-auto px-[45px] py-[36px] flex justify-between">
    <div class="flex gap-[76px] items-center">
      <NuxtLink to="/">
        <span class="text-[40px] font-black">LOGO</span>
      </NuxtLink>

      <nav class="flex gap-[60px] font-light">
        <NuxtLink to="https://t.me/chelovekkq">О нас</NuxtLink>
        <NuxtLink to="https://t.me/chelovekkq">Курсы</NuxtLink>
        <NuxtLink to="https://t.me/chelovekkq">Цены</NuxtLink>
        <NuxtLink to="https://t.me/chelovekkq">Преподаватели</NuxtLink>
      </nav>
    </div>

    <div class="flex items-center gap-[78px]">
      <span class="font-light">+7 (951) 175-1764</span>
      <Button class="border-[#0C73FE] text-[24px] pt-0 pb-1 px-[50px]"
        >Запись</Button
      >
    </div>
  </header>
</template>
