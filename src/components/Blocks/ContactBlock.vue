<template>
  <section class="contact">
    <div class="contact-content">
      <div class="contact-text">
        <h2>Поможем с выбором!</h2>
        <p>Оставьте ваш номер. Мы позвоним, чтобы ответить на ваши вопросы!</p>
      </div>

      <ContactForm class="contact-form" />
    </div>
  </section>
</template>

<script setup>
import ContactForm from '@/components/Forms/ContactForm.vue'
</script>

<style scoped>
.contact {
  background-color: var(--basic-blue);
  color: white;
}

.contact-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  width: var(--screen-lg);
  padding: 75px 50px;
  margin: 0 auto;
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
  max-width: 400px;
}

@media (max-width: 1366px) {
  .contact {
    width: 768px;
  }
}

@media (max-width: 480px) {
  .contact {
    width: 100%;
  }

  .contact-content {
    flex-direction: column;
    justify-content: center;
    gap: 50px;

    width: 100%;
    padding: 40px 26px;
  }

  .contact-text {
    width: 100%;
  }

  .contact-text h2 {
    font-size: 24px;
    font-weight: 800;
  }

  .contact-text p {
    font-size: 16px;
    font-weight: 700;
  }

  .contact-form {
    width: 100%;
    max-width: 100%;
  }
}
</style>
