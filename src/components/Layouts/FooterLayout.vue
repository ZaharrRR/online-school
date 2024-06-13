<template>
  <footer>
    <div class="logo-info">
      <a href="/">LOGO</a>
      <p>® 2024 "Название" - школа программирования и дизайна</p>
    </div>

    <div class="contacts">
      <div class="contacts-head">
        <p>+7 (951) 175-1764</p>
        <a href="/">info@pornhub.com</a>
      </div>

      <div class="contacts-social">
        <a href="">
          <img src="/social/TT.svg" alt="" />
        </a>
        <a href="">
          <img src="/social/VK.svg" alt="" />
        </a>
        <a href="">
          <img src="/social/YT.svg" alt="" />
        </a>
        <a href="">
          <img src="/social/telegram.svg" alt="" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;

  background-color: var(--footer-black);
  color: white;
  padding: 24px 50px;
  margin-top: 100px;
}

a {
  color: white;
}

.logo-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 300;
}

.logo-info a {
  font-size: 40px;
  font-weight: bold;
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 50px;
  font-weight: 300;
}

.contacts-social {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
