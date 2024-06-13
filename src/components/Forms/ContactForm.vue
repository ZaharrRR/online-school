<template>
  <form>
    <input class="input" type="text" placeholder="Ваше имя" />
    <input class="input" type="email" placeholder="Ваш E-Mail" />
    <input class="input" type="tel" placeholder="+7 000 000-00-00" />

    <button class="btn btn-blue">Консультация</button>
  </form>
</template>

<script setup></script>

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
  width: 40%;
  margin-top: 12px;
  padding: 16px 32px;
}
</style>
