<template>
  <header>
    <a class="logo" href="/">ПРОГА</a>

    <nav>
      <a href="">О нас</a>
      <a href="">Курсы</a>
      <a href="">Цены</a>
      <a href="">Преподаватели</a>
    </nav>

    <div class="contacts">
      <span>+7 (951) 175-1764</span>
      <button class="btn">Запись</button>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 50px;
}

.logo {
  font-size: 40px;
  font-weight: bold;
}

nav {
  display: flex;
  align-items: center;
  gap: 36px;
}

.contacts {
  display: flex;
  align-items: center;
  gap: 24px;
}

.contacts button {
  border-color: var(--basic-blue);
  padding: 8px 36px;
  font-weight: 500;
}
</style>
