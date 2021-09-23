<template>
  <div id="main_wrapper">
    <div class="parent">
      <div class="outer_wrapper">
        <nav>
          <DynamicButton class="tp" @buttonPress="$router.back()"
            >👈 back</DynamicButton
          >
        </nav>
        <main id="display_text">
          <nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicButton from '../components/holders/Dynamic_Button.vue'
export default {
  components: {
    DynamicButton,
  },
}
</script>

<style lang="scss" scoped>
#main_wrapper {
  height: 100vh;
  .parent {
    height: 100%;
    .outer_wrapper {
      height: 100%;
      display: grid;
      grid-template-rows: auto 1fr;
      gap: $gap;
    }
  }
}
$w: clamp(300px, 60%, 800px);
nav {
  width: $w;
  justify-self: center;
}
main {
  width: $w;
  box-shadow: $default_shadow;
  height: 98%;
  justify-self: center;
  background: white;
  padding: $gap;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
