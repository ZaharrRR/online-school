<template>
  <div>
    <header class="border">
      <LayoutsHeader />
    </header>

    <div class="container mx-auto border">
      <slot />
    </div>

    <footer class="bg-[#212121] text-white">
      <div class="container mx-auto px-[80px] py-[32px]">footer</div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
