<template>
  <ModalLayout :is-open="isOpen" @close-modal="$emit('close-modal')">
    <div class="modal-top">
      <h2>Поможем с выбором!</h2>
      <p>
        Оставьте свой номер: мы позвоним, <br />
        чтобы ответить на все ваши вопросы.
      </p>
    </div>

    <div v-if="course" class="modal-info">Выбранный курс: {{ course.name }}</div>

    <div v-if="price" class="modal-info">Выбранная цена: {{ price }}</div>

    <ContactForm :course="course.name" :price="price" />
  </ModalLayout>
</template>

<script setup lang="ts">
import ModalLayout from '@/components/Layouts/ModalLayout.vue'
import ContactForm from '@/components/Forms/ContactForm.vue'

defineProps({
  isOpen: Boolean,
  course: Object,
  price: String
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

.modal-info {
  font-weight: 600;
  font-size: 20px;

  margin: 16px 0;
}
</style>
