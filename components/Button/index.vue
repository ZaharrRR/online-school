<template>
  <button class="flex rounded-full px-5 py-1 border">
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style>
.btn-default {
  @apply bg-[#0C73FE] text-sm font-bold text-white px-[36px] py-3;
}
</style>
