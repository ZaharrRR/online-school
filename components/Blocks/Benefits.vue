<template>
  <BlockLayout>
    <div class="flex flex-col gap-[85px]">
      <div>
        <span class="text-[36px] proxima-bold">Как проходит обучение</span>
      </div>

      <div class="flex flex-col gap-[75px] text-[#2D2D2D]">
        <div class="flex md:gap-[120px] gap-[32px]">
          <img
            class="md:w-[184px] w-[92px]"
            src="/assets/img/Benefits/manPC.svg"
            alt="manPC"
          />

          <div class="flex flex-col sm:gap-[24px] gap-[12px]">
            <span class="proxima-bold md:text-[32px] text-[24px]"
              >Уроки 1 на 1 с преподавателем</span
            >
            <span class="md:text-[20px] text-[14px]"
              >Выбирая индивидуальные занятия "один на один" с преподавателем,
              ваш ребенок получит персонализированный подход и достигнет
              отличных результатов в короткие сроки.
            </span>
          </div>
        </div>

        <div class="flex md:gap-[120px] gap-[32px]">
          <div class="flex flex-col sm:gap-[24px] gap-[12px]">
            <span class="proxima-bold md:text-[32px] text-[24px]"
              >Всегда поможем</span
            >
            <span class="md:text-[20px] text-[14px]"
              >Мы понимаем как важно вовремя ответить на вопрос, помочь
              справиться с возникшей трудностью и поэтому трепетно относимся к
              сопровождению ученика вне занятий.
            </span>
          </div>

          <img
            class="md:w-[184px] w-[92px]"
            src="/assets/img/Benefits/question.svg"
            alt="manPC"
          />
        </div>

        <div class="flex md:gap-[120px] gap-[32px]">
          <img
            class="md:w-[184px] w-[92px]"
            src="/assets/img/Benefits/funny.svg"
            alt="manPC"
          />

          <div class="flex flex-col sm:gap-[24px] gap-[12px]">
            <span class="proxima-bold md:text-[32px] text-[24px]"
              >Поддерживаем интерес</span
            >
            <span class="md:text-[20px] text-[14px]"
              >Увлекательный и творческий подход к изложению материала, а также
              адаптация программы обучения под навыки и интересы ученика
              позволяют добиваться целенаправленной сконцентрированной
              деятельности в течение длительного времени.
            </span>
          </div>
        </div>

        <div class="flex md:gap-[120px] gap-[32px]">
          <div class="flex flex-col md:gap-[24px] gap-[12px]">
            <span class="proxima-bold sm:text-[32px] text-[24px]"
              >Задаём, проверяем и разбираему домашку</span
            >
            <span class="md:text-[20px] text-[14px]"
              >После каждого занятия мы даем домашние задания, которые
              обязательно проверяем. Все ошибки подробно разбираем и отвечаем на
              вопросы в процессе выполнения домашнего задания.
            </span>
          </div>

          <img
            class="md:w-[184px] w-[92px]"
            src="/assets/img/Benefits/graduate.svg"
            alt="manPC"
          />
        </div>

        <div class="flex md:gap-[120px] gap-[32px]">
          <img
            class="md:w-[184px] w-[92px]"
            src="/assets/img/Benefits/parrent.svg"
            alt="manPC"
          />

          <div class="flex flex-col sm:gap-[24px] gap-[12px]">
            <span class="proxima-bold md:text-[32px] text-[24px]"
              >Не забываем о родителях</span
            >
            <span class="md:text-[20px] text-[14px]"
              >Регулярно отправляем родителям отчёт, в котором рассказываем о
              результатах занятий, домашнем работы и прогрессе ученика.
            </span>
          </div>
        </div>
      </div>
    </div>
  </BlockLayout>
</template>

<script setup lang="ts">
import BlockLayout from "~/layouts/BlockLayout.vue";
</script>

<style scoped></style>
