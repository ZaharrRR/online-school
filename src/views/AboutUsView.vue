<template>
  <div class="about-section">
    <div class="about-content">
      <h2>О нашей школе</h2>
      <p>
        Мы — онлайн-школа программирования, которая помогает людям всех возрастов освоить
        современные технологии и стать востребованными специалистами в IT-индустрии. Наша миссия —
        сделать обучение программированию доступным, интересным и эффективным.
      </p>
      <p>
        Наши курсы разработаны практикующими экспертами, которые делятся своим опытом и знаниями. Мы
        используем современные методики обучения, чтобы каждый студент мог достичь своих целей.
      </p>
      <div class="about-stats">
        <div class="stat">
          <h3>5+</h3>
          <p>лет опыта</p>
        </div>
        <div class="stat">
          <h3>1000+</h3>
          <p>выпускников</p>
        </div>
        <div class="stat">
          <h3>10+</h3>
          <p>курсов</p>
        </div>
      </div>
      <RouterLink to="/courses">
        <button
          class="btn"
          :style="`border: 2px solid #0c73fe; background-color: #0c73fe; color: white;`"
        >
          Наши курсы
        </button>
      </RouterLink>
    </div>
    <!-- <img class="about-img" src="/path/to/about-image.png" alt="О нас" /> -->
  </div>
</template>

<script setup lang="ts">
// Логика, если необходима
</script>

<style scoped>
.about-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 120px;
  background-color: #f5f9ff;
  border-radius: 18px;
  margin: 40px auto;
  max-width: 1200px;
}

.about-content {
  max-width: 60%;
}

.about-content h2 {
  font-size: 32px;
  color: #0c73fe;
  margin-bottom: 20px;
}

.about-content p {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
}

.about-stats {
  display: flex;
  gap: 40px;
  margin: 30px 0;
}

.stat {
  text-align: center;
}

.stat h3 {
  font-size: 28px;
  color: #0c73fe;
  margin-bottom: 8px;
}

.stat p {
  font-size: 14px;
  color: #666;
}

.btn {
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #095bbd !important;
}

.about-img {
  max-width: 35%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1280px) {
  .about-section {
    padding: 40px 80px;
  }

  .about-content h2 {
    font-size: 28px;
  }

  .about-content p {
    font-size: 14px;
  }

  .stat h3 {
    font-size: 24px;
  }

  .stat p {
    font-size: 12px;
  }

  .btn {
    font-size: 14px;
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  .about-section {
    flex-direction: column;
    padding: 20px;
    text-align: center;
  }

  .about-content {
    max-width: 100%;
  }

  .about-content h2 {
    font-size: 24px;
  }

  .about-content p {
    font-size: 12px;
  }

  .about-stats {
    flex-direction: column;
    gap: 20px;
  }

  .stat h3 {
    font-size: 20px;
  }

  .stat p {
    font-size: 10px;
  }

  .btn {
    font-size: 12px;
    padding: 8px 16px;
  }

  .about-img {
    max-width: 80%;
    margin-top: 20px;
  }
}
</style>
