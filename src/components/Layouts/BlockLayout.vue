<template>
  <div class="block">
    <h2>
      <slot name="title" />
    </h2>

    <p>
      <slot name="description" />
    </p>

    <slot />
  </div>
</template>

<style scoped>
.block {
  padding: 0 50px;
}

.block h2 {
  font-size: 36px;
}

.block p {
  font-size: 20px;
}
</style>
