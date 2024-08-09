<template>
  <div v-if="isOpen" class="wrapper" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="modal-top">
        <h2>Поможем с выбором!</h2>
        <p>
          Оставьте свой номер: мы позвоним, <br />
          чтобы ответить на все ваши вопросы.
        </p>
      </div>

      <ContactForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/Forms/ContactForm.vue'

defineProps({
  isOpen: Boolean
})

defineEmits(['close-modal'])
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  overflow-y: hidden;

  padding: 45px;
  background-color: rgb(0, 0, 0, 0.5);
}

.modal {
  width: 742px;

  background-color: var(--basic-blue);
  color: white;

  padding: 45px;
  border-radius: 20px;
}

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
