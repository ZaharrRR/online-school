import { defineStore } from 'pinia'

import { courses } from '@/school.json'

export const useStore = defineStore('store', {
  state: () => ({
    courses: courses,
    prices: [
      {
        id: 0,
        lessons: 4,
        pricePer: 760,
        progress: 12.5
      },
      {
        id: 1,
        lessons: 8,
        pricePer: 720,
        progress: 25
      },
      {
        id: 2,
        lessons: 16,
        pricePer: 680,
        progress: 50
      },
      {
        id: 3,
        lessons: 32,
        pricePer: 640,
        progress: 100
      }
    ],
    benefits: [
      {
        id: 0,
        title: 'Уроки 1 на 1 с преподавателем',
        description:
          'Выбирая индивидуальные занятия "один на один" с преподавателем, ваш ребенок получит персонализированный подход и достигнет отличных результатов в короткие сроки.',
        icon: '/benefits/one-by-one.svg'
      },
      {
        id: 1,
        title: 'Всегда поможем',
        description:
          'Мы понимаем как важно вовремя ответить на вопрос, помочь справиться с возникшей трудностью и поэтому трепетно относимся к сопровождению ученика вне занятий.',
        icon: '/benefits/help.svg'
      },
      {
        id: 2,
        title: 'Поддерживаем интерес',
        description:
          'Увлекательный и творческий подход к изложению материала, а также адаптация программы обучения под навыки и интересы ученика позволяют добиваться целенаправленной сконцентрированной деятельности в течение длительного времени.',
        icon: '/benefits/support.svg'
      },
      {
        id: 3,
        title: 'Задаём, проверяем и разбираему домашку',
        description:
          'После каждого занятия мы даем домашние задания, которые обязательно проверяем. Все ошибки подробно разбираем и отвечаем на вопросы в процессе выполнения домашнего задания.',
        icon: '/benefits/questions.svg'
      },
      {
        id: 4,
        title: 'Не забываем о родителях',
        description:
          'Регулярно отправляем родителям отчёт, в котором рассказываем о результатах занятий, домашнем работы и прогрессе ученика.',
        icon: '/benefits/family.svg'
      }
    ]
  }),
  getters: {},
  actions: {
    getCourse(id) {
      return this.courses.find((course) => course.id === id)
    }
  }
})
