<template>
  <ModalLayout :is-open="isOpen" @close-modal="$emit('close-modal')">
    <div class="modal-top">
      <h2>Поможем с выбором!</h2>

      <button @click="$emit('close-modal')" class="btn btn-blue close">X</button>

      <p>
        Оставьте свой номер: мы позвоним, <br />
        чтобы ответить на все ваши вопросы.
      </p>
    </div>

    <div v-if="course" class="modal-info">Выбранный курс: {{ course.name }}</div>

    <div v-if="price" class="modal-info">Выбранная цена: {{ price }}</div>

    <ContactForm :course="course ? course.name : ''" :price="price" />
  </ModalLayout>
</template>

<script setup lang="ts">
import ModalLayout from '@/components/Layouts/ModalLayout.vue'
import ContactForm from '@/components/Forms/ContactForm.vue'

defineProps({
  isOpen: Boolean,
  course: {
    type: Object,
    required: false
  },
  price: {
    type: String,
    required: false
  }
})

defineEmits(['close-modal'])
</script>

<style scoped>
.modal-top {
  margin: 0 auto;
  text-align: center;
  margin-bottom: 50px;
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
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

@media (max-width: 480px) {
  .modal-top {
    margin-bottom: 20px;
  }

  .modal-top h2 {
    font-size: 24px;
  }

  .modal-top p {
    font-size: 14px;
  }

  .modal-info {
    font-size: 14px;
  }
}
</style>
