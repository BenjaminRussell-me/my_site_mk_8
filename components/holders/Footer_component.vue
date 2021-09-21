<template>
  <footer class="parent">
    <div class="outer_wrapper">
      <slot></slot>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: $main_color;
  color: white;
  height: 100vh;
  .outer_wrapper {
    display: grid;
    grid-template-rows: 1fr auto;
  }
}
</style>
