<template>
  <form @submit.prevent="handleSubmit">
    <input class="input" type="text" placeholder="Ваше имя" v-model="formData.name" />
    <input class="input" type="email" placeholder="Ваш E-Mail" v-model="formData.email" />
    <input class="input" type="tel" placeholder="+7 000 000-00-00" v-model="formData.phone" />

    <button class="btn btn-blue">Консультация</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  course: String,
  price: String
})

const formData = ref({
  name: '',
  email: '',
  phone: '',
  course: props.course ? props.course : '-',
  price: props.price ? props.price : '-'
})

const handleSubmit = async () => {
  const telegram_message = `Имя: ${formData.value.name}\nПочта: ${formData.value.email}\nТелефон: ${formData.value.phone} \nКурс: ${formData.value.course} \nЦена: ${formData.value.price}`

  const telegram_bot_token = '6935537077:AAFvx7IM7u9mwIM-sbT2A4DJ8SO5MtfoHyc'
  const telegram_chat_id = '897513663'

  const response = await fetch(`https://api.telegram.org/bot${telegram_bot_token}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: telegram_chat_id,
      text: telegram_message
    })
  })

  if (response.ok) {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      course: props.course ? props.course : '-',
      price: props.price ? props.price : '-'
    }
  } else {
    alert('Произошла ошибка при отправке данных.')
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
  padding: 28px;
  background-color: white;
  border-radius: 20px;
}

form input {
  padding: 18px 26px;
}

form button {
  align-self: center;
  width: 50%;
  margin-top: 12px;
  padding: 16px 32px;
}
</style>
