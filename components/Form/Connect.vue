<template>
  <form class="bg-white rounded-[20px] flex flex-col gap-[12px] p-[30px]">
    <input class="form-input" type="text" required placeholder="Ваше имя" />
    <input class="form-input" type="email" required placeholder="Ваш E-Mail" />
    <input
      class="form-input"
      type="tel"
      required
      placeholder="+7(999) 999-99-99"
    />

    <div class="h-[60px] mt-4">
      <Button
        class="btn-blue btn-press text-[15px] mx-auto py-3 w-[75%]"
        type="submit"
        >Консультация
      </Button>
    </div>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped>
.form-input {
  @apply px-[24px] py-[18px] bg-[#F1F3FF] rounded-[30px] text-black border-[2px] border-[#F1F3FF] outline-none;
}

.form-input:focus,
.form-input:active {
  border: 2px solid #0c73fe;
}
</style>
