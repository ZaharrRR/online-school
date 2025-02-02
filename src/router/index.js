import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CourseView from '@/views/CourseView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import CoursesView from '@/views/CoursesView.vue'
import PricesView from '@/views/PricesView.vue'
import TeachersView from '@/views/TeachersView.vue'

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
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUsView
    },
    {
      path: '/courses',
      name: 'courses',
      component: CoursesView
    },
    {
      path: '/prices',
      name: 'prices',
      component: PricesView
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: TeachersView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Всегда прокручиваем страницу вверх при переходе на новый маршрут
    return { top: 0 }
  }
})

export default router
