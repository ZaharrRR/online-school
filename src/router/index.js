import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CourseView from '@/views/CourseView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/course/:id',
      name: 'course',
      component: CourseView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Всегда прокручиваем страницу вверх при переходе на новый маршрут
    return { top: 0 }
  }
})

export default router
