<template>
  <section id="contact" class="parent">
    <div class="outer_wrapper">
      <div class="text">
        <h1 class="t1">Contact me!</h1>
        <span class="info t5"
          >resume:
          <NuxtLink to="/resume" class="t5 resume"
            >click here for resume</NuxtLink
          >
        </span>

        <span class="info t5"
          >e-mail:
          <a class="email" href="mailto: contact@benjaminrussell.me"
            >Contact@BenjaminRussell.me</a
          ></span
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#contact {
  align-self: center;
}
.text {
  justify-self: center;
  text-align: center;
  .info {
    display: block;
    margin: $gap;
  }
}
.resume {
  color: $accent_color;
}
.email {
  color: $accent_color;
}
</style>
