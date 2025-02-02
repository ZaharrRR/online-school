<template>
  <div class="teachers-section">
    <h2>Наши преподаватели</h2>
    <p class="section-description">
      Наши преподаватели — это опытные профессионалы с многолетним опытом в IT-индустрии. Они не
      только делятся знаниями, но и вдохновляют студентов на достижение новых высот.
    </p>
    <div class="teachers-grid">
      <div
        v-for="teacher in teachers"
        :key="teacher.id"
        class="teacher-card"
        :style="`border: 2px solid ${teacher.color};`"
      >
        <img class="teacher-img" :src="teacher.image" :alt="teacher.name" />
        <h3>{{ teacher.name }}</h3>
        <p class="teacher-specialization">{{ teacher.specialization }}</p>
        <p class="teacher-description">{{ teacher.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const teachers = [
  {
    id: 1,
    name: 'Иван Иванов',
    specialization: 'Full-Stack разработчик',
    description: 'Опыт работы — 8 лет. Специализируется на JavaScript, React и Node.js.',
    image: '/teacher1.jpg',
    color: '#0c73fe'
  },
  {
    id: 2,
    name: 'Анна Петрова',
    specialization: 'Data Scientist',
    description: 'Опыт работы — 6 лет. Работает с Python, Machine Learning и Big Data.',
    image: '/teacher2.jpg',
    color: '#0c73fe'
  },
  {
    id: 3,
    name: 'Сергей Сидоров',
    specialization: 'DevOps инженер',
    description: 'Опыт работы — 10 лет. Эксперт в Docker, Kubernetes и CI/CD.',
    image: '/teacher3.jpg',
    color: '#0c73fe'
  }
]
</script>

<style scoped>
.teachers-section {
  padding: 60px 120px;
  border-radius: 18px;
  margin: 40px auto;
  max-width: 1200px;
}

.teachers-section h2 {
  font-size: 32px;
  color: #0c73fe;
  text-align: center;
  margin-bottom: 20px;
}

.section-description {
  font-size: 16px;
  color: #333;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.teacher-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.teacher-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.teacher-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 4px solid #0c73fe;
}

.teacher-card h3 {
  font-size: 20px;
  color: #0c73fe;
  margin-bottom: 10px;
}

.teacher-specialization {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.teacher-description {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 20px;
}

@media (max-width: 1280px) {
  .teachers-section {
    padding: 40px 80px;
  }

  .teachers-section h2 {
    font-size: 28px;
  }

  .section-description {
    font-size: 14px;
  }

  .teacher-card h3 {
    font-size: 18px;
  }

  .teacher-specialization,
  .teacher-description {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .teachers-section {
    padding: 20px;
  }

  .teachers-section h2 {
    font-size: 24px;
  }

  .section-description {
    font-size: 12px;
  }

  .teachers-grid {
    grid-template-columns: 1fr;
  }

  .teacher-card {
    padding: 15px;
  }

  .teacher-img {
    width: 100px;
    height: 100px;
  }

  .teacher-card h3 {
    font-size: 16px;
  }

  .teacher-specialization,
  .teacher-description {
    font-size: 10px;
  }
}
</style>
