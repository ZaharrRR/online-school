<template>
  <ModalLayout :is-open="isOpen" @close-modal="$emit('close-modal')">
    <div class="modal-top">
      <h2>Поможем с выбором!</h2>
      <p>
        Оставьте свой номер: мы позвоним, <br />
        чтобы ответить на все ваши вопросы.
      </p>
    </div>

    <ContactForm />
  </ModalLayout>
</template>

<script setup lang="ts">
import ModalLayout from '@/components/Layouts/ModalLayout.vue'
import ContactForm from '@/components/Forms/ContactForm.vue'

defineProps({
  isOpen: Boolean
})

defineEmits(['close-modal'])
</script>

<style scoped>
.modal-top {
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
}

.modal-top h2 {
  font-weight: 800;
  font-size: 36px;
}

.modal-top p {
  font-weight: bold;
  font-size: 20px;
}
</style>
