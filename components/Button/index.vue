<template>
  <button class="flex justify-content: center rounded-full px-5 py-1 border">
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style>
.btn-blue {
  font-family: "Inter", sans-serif;
  font-weight: 700;

  @apply bg-[var(--basic-blue)] text-white;
}

.btn-blue:hover {
  @apply shadow-lg shadow-blue-500/50;
}

.btn-press {
  transition: border 0.5s ease;

  @apply border-b-[6px] border-[var(--dark-blue)];
}

.btn-press:active {
  border-bottom: 0;
}
</style>
