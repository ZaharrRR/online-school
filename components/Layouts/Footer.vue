<template>
  <footer class="bg-[#212121] text-white">
    <div class="container mx-auto px-[45px] py-[22px] flex justify-between">
      <div class="flex flex-col justify-between">
        <NuxtLink to="/">
          <span class="text-[32px] font-black">LOGO</span>
        </NuxtLink>

        <span class="text-[14px]"
          >® 2024 "Название" - школа программирования и дизайна</span
        >
      </div>

      <div class="flex flex-col gap-[36px]">
        <div class="text-[14px] flex flex-col items-end">
          <span>+7 (951) 175-1764</span>
          <a
            class="border-b border-[#555555] font-light hover:bg-[#353535]"
            href="mailto:zaharr39zzoo@gmail.com"
            >zaharr39zzoo@gmail.com</a
          >
        </div>

        <div class="flex gap-[10px] justify-end">
          <NuxtLink to="https://t.me/chelovekkq"
            ><img src="/assets/img/TikTok_logo.svg" alt="TikTok_logo"
          /></NuxtLink>
          <NuxtLink to="https://t.me/chelovekkq"
            ><img src="/assets/img/VK_logo.svg" alt="VK_logo"
          /></NuxtLink>
          <NuxtLink to="https://t.me/chelovekkq"
            ><img src="/assets/img/YT_logo.svg" alt="YT_logo"
          /></NuxtLink>
          <NuxtLink to="https://t.me/chelovekkq"
            ><img src="/assets/img/Telegram_logo.svg" alt="Telegram_logo"
          /></NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
