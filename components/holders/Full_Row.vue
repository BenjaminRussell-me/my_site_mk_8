<template>
  <section>
    <div class="outer_wrapper">
      <slot></slot>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
section {
  color: white;
  background: linear-gradient(rgba($main_color, 0.6), rgba($main_color, 0.9)),
    url(~/assets/img/bg.png),
    linear-gradient(rgba($main_color, 1), rgba($main_color, 1));
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  padding: $gap;
  .outer_wrapper {
    min-height: 200px;
    display: grid;
    gap: $gap;
  }
}
</style>
