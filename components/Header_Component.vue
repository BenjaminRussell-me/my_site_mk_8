<template>
  <div id="header_holder">
    <header class="parent" :class="{ scrolled: scrollLocation > 100 }">
      <div class="outer_wrapper">
        <img
          class="logo"
          :class="{ logo_scroll: scrollLocation > 100 }"
          :src="displayPic(content.logo.src)"
        />
      </div>
    </header>
    <div id="header_spacer" :class="{ scrolled: scrollLocation > 100 }"></div>
  </div>
</template>

<script>
export default {
  props: {
    scrollLocation: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    content() {
      return this.$store.state.content.header
    },
  },
  methods: {
    scrollTo(location) {
      const loc = document.querySelector(`#${location}`)
      loc.scrollIntoView(true, { behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin header_height {
  height: 6rem;
  transition: 0.5s;
  @media (max-width: $break) {
    height: 6rem;
  }
}

.scrolled {
  height: 3rem !important;
  background: rgba($main_color, 0.8);
  backdrop-filter: blur(5px);
}

header {
  @include header_height;

  width: 100%;
  position: fixed;
  background: $main_color;
  align-items: center;
  box-shadow: $default_shadow;
  color: $light_color;
  z-index: 500;
}
#header_spacer {
  @include header_height;

  width: 100%;
}
.outer_wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media (max-width: $break) {
    justify-content: space-around;
    text-align: center;
    row-gap: $gap;
  }
}

.logo {
  max-height: 5rem;
  transition: 0.5s;
}
.logo_scroll {
  max-height: 2rem;
}
.call_now_holder {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: $gap;
  .call_now {
    white-space: nowrap;
    color: $accent_color;
  }
}
</style>
