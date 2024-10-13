<template>
  <section class="block">
    <h2>
      <slot name="title" />
    </h2>

    <p class="block-description">
      <slot name="description" />
    </p>

    <slot />
  </section>
</template>

<style scoped>
.block {
  padding: 0 50px;
  margin: 0 auto;

  width: 1366px;
}

.block h2 {
  font-size: 36px;
  margin-bottom: 48px;
}

.block p {
  font-size: 20px;
}

@media (max-width: 1366px) {
  .block {
    width: 768px;
  }
}

@media (max-width: 768px) {
  .block {
    padding: 0 27px;
    width: 480px;
  }
}

@media (max-width: 480px) {
  .block {
    width: 360px;
    margin: 0 auto;
  }

  .block h2 {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .block p {
    font-size: 16px;
  }
}
</style>
