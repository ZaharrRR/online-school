<template>
  <footer>
    <div class="logo-info">
      <a href="/">
        <img src="/logo-rev.svg" alt="logo" />
      </a>
      <p>® 2024 "Название" - школа программирования и дизайна</p>
    </div>

    <div class="contacts">
      <div class="contacts-head">
        <p>+7 (951) 175-1753</p>
        <a href="/">info@proga.com</a>
      </div>

      <div class="contacts-social">
        <a href="https://tiktok.com/@progaschool">
          <img src="/social/TT.svg" alt="" />
        </a>
        <a href="https://vk.com/proga_school">
          <img src="/social/VK.svg" alt="" />
        </a>
        <a href="https://www.youtube.com/@proga-school">
          <img src="/social/YT.svg" alt="" />
        </a>
        <a href="https://t.me/proga_school">
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

@media (max-width: 480px) {
  footer {
    display: flex;
    justify-content: space-between;

    background-color: var(--footer-black);
    color: white;
    padding: 20px 27px;
  }

  a {
    color: white;
  }

  .logo-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 300;
    font-size: 12px;
  }

  .logo-info a {
    font-size: 28px;
    font-weight: bold;
  }

  .logo-info img {
    width: 150px;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-weight: 300;
  }

  .contacts-head {
    font-size: 12px;
  }

  .contacts-social {
    display: flex;
    align-items: center;
    gap: 6px;
  }
}
</style>
