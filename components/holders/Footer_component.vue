<template>
  <footer class="parent">
    <div class="outer_wrapper">
      <slot></slot>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: linear-gradient(rgba($main_color, 0.5), rgba($main_color, 0.9)),
    url(~/assets/img/bg.png),
    linear-gradient(rgba($main_color, 1), rgba($main_color, 1));
  background-size: cover;
  background-attachment: fixed;
  color: white;
  height: 100vh;
  .outer_wrapper {
    display: grid;
    grid-template-rows: 1fr auto;
  }
}
</style>
