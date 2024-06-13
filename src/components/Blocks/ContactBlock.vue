<template>
  <div class="contact">
    <div class="contact-text">
      <h2>Поможем с выбором!</h2>
      <p>Оставьте ваш номер. Мы позвоним, чтобы ответить на ваши вопросы!</p>
    </div>

    <ContactForm class="contact-form" />
  </div>
</template>

<script setup>
import ContactForm from '@/components/Forms/ContactForm.vue'
</script>

<style scoped>
.contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 75px 120px;
  background-color: var(--basic-blue);
  color: white;
}

.contact-text {
  width: 40%;
}

.contact-text h2 {
  font-size: 40px;
  font-weight: 900;
}

.contact-text p {
  font-size: 24px;
  font-weight: bold;
}

.contact-form {
  width: 40%;
}
</style>
