<template>
  <div id="main_wrapper">
    <div class="parent">
      <div class="outer_wrapper">
        <nav>
          <DynamicButton class="tp" @buttonPress="$router.back()"
            >👈 back</DynamicButton
          >
        </nav>
        <div class="holder">
          <div class="glow" />
          <main id="display_text">
            <nuxt />
          </main>
        </div>
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
    .outer_wrapper {
      display: grid;
      grid-template-rows: auto 1fr;
      gap: $gap;
    }
  }
}
$w: clamp(300px, 100%, 550px);
nav {
  width: $w;
  justify-self: center;
}
.holder {
  display: grid;
  width: $w;
  justify-items: center;
  justify-self: center;
  height: 88vh;
}
.glow {
  background: $gradient;
  padding: $s-gap;
  display: grid;
  width: 100%;
  border-radius: $border_radius;
  filter: blur(5px);
  grid-area: 1/1/1/1;
}
main {
  box-shadow: $default_shadow;
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 98%;
  background: white;
  padding: $l_gap ($l_gap * 2);
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  grid-area: 1/1/1/1;
  z-index: 5;
}
</style>
<style lang="scss">
#display_text {
  img {
    width: 100%;
  }
}
</style>
