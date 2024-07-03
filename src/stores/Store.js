import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    courses: [
      {
        id: 0,
        name: 'Основы языка python',
        description:
          'Научим ребёнка программировать на одном из самых популярных и востребованных языков в мире',
        extradescription: [
          'Цель курса — дать основы программирования на Python и обучить детей самостоятельно решать задачи с нуля.',
          'Мы пройдем концепцию настоящей стажировки в компании, изучим все этапы создания проектов, основные типы данных, логику, циклы, научимся создавать разные проекты: рисование Turtle, игры в Pygame , консольные приложения.'
        ],
        icon: '/courses/python.svg',
        ages: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        requirements: 'Наличие компьютера',
        level: 'Базовый',
        lessons: 32,
        colors: ['#1595FF', '#2ECDFF'],
        tags: ['Python', 'Программирование', 'Создание игр'],
        about: {
          goal: [
            'Цель курса — дать основы программирования на Python и обучить детей самостоятельно решать задачи с нуля.',
            'Мы пройдем концепцию настоящей стажировки в компании, изучим все этапы создания проектов, основные типы данных, логику, циклы, научимся создавать разные проекты: рисование Turtle, игры в Pygame , консольные приложения.'
          ],
          topics: [
            'Базовые знания языка Python для детей',
            'Создание игр и анимации на Pygame Zero',
            'Использование интерактивной консоли Python',
            'Разработка консольных приложений, чат-ботов',
            'Самостоятельное создание и продвижение проекта'
          ]
        },
        projects: [
          {
            title: 'Вова Путин Python',
            img: '/students/president.png'
          },
          {
            title: 'Альтушка для скуфа rampy, pygame',
            img: '/students/altushka.png'
          }
        ],
        program: [
          {
            section: 'М1. Добро пожаловать. Основы программирования',
            subsections: ['первый', 'второй']
          },
          {
            section: 'М2. Логика и циклы',
            subsections: ['первый', 'второй']
          },
          {
            section: 'М3. Углубленная работа с циклами',
            subsections: ['первый', 'второй']
          },
          {
            section: 'М4. Списки с словари. Работа с таблицами',
            subsections: ['первый', 'второй']
          },
          {
            section: 'М5. Pygame. Знакомство',
            subsections: ['первый', 'второй']
          },
          {
            section: 'М6. Pygame. Выбор направления, создание игры',
            subsections: ['первый', 'второй']
          },
          {
            section: 'М7. Создание финального проекта',
            subsections: ['первый', 'второй']
          }
        ]
      },
      {
        id: 1,
        name: 'Создание игр в Scratch',
        description:
          'Ребёнок изучит основы программирования через создание собственных игр и анимации',
        icon: '/courses/scratch.svg',
        ages: [5, 6, 7, 8, 9, 10, 11, 12],
        colors: ['#FF8462', '#FFC565']
      },
      {
        id: 2,
        name: 'Компьютерная грамотность',
        description:
          'Научим ребёнка с пользой использовать компьютер и популярные прикладные программы.',
        icon: '/courses/word.svg',
        ages: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
        colors: ['#3FA2EC', '#1A5EC0']
      },
      {
        id: 3,
        name: 'Python в  Minecraft',
        description: 'Ребёнок нескучным способом изучит основы программирования на языке Python',
        icon: '/courses/minecraft.svg',
        ages: [9, 10, 11, 12, 13, 14],
        colors: ['#97CC67', '#65B62C']
      },
      {
        id: 4,
        name: 'Roblox Studio',
        description:
          'Научим ребёнка создавать компьютерные игры в Roblox и программировать на языке Lua.',
        icon: '/courses/roblox.svg',
        ages: [9, 10, 11, 12, 13, 14],
        colors: ['#FF6187', '#FFA16C']
      },
      {
        id: 5,
        name: 'Создание сайтов',
        description: 'Научим ребёнка создавать собственные сайты в интернете',
        icon: '/courses/chrome.svg',
        ages: [9, 10, 11, 12, 13, 14],
        colors: ['#FFC016', '#00DA5A']
      }
    ],
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
