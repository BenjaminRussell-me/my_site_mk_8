<template>
  <section class="parent">
    <div class="wrapper">
      <div
        class="hero_left"
        :style="{
          background: `url(${displayPic(content.portrait.src)})`,
        }"
      >
        <span class="t1">{{ content.left }}</span>
      </div>
      <div class="hero_right">
        <div class="text_holder">
          <h1 class="t1">my name is Benjamin</h1>
          <p class="t4 dates">
            I have been a proffesional developer for
            <span class="date"> {{ date_time.year }} years,</span>
            <span class="date"> {{ date_time.month }} months,</span>
            <span class="date"> {{ date_time.day }} days,</span>
            <span class="date"> {{ date_time.hour }} hours,</span>
            <span class="date">{{ date_time.min }} minutes </span> and
            <span class="date"> {{ date_time.sec }} seconds.</span>
          </p>
          <div class="gotos">
            <div class="gototext">
              <span class="tp">learn more about me?</span>
              <br />
              <DynamicButton
                class="tp"
                @buttonPress="scrollTo('about'), $emit('about')"
                >Click here for about me</DynamicButton
              >
            </div>

            <div class="gototext">
              <span class="tp"
                >or maybe we skip all that <br />and go straight to e-mailing
                😉</span
              >
              <br />
              <DynamicButton
                class="tp"
                @buttonPress="scrollTo('contact'), $emit('contact')"
                >Click here to contact me
              </DynamicButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DynamicButton from './holders/Dynamic_Button.vue'
export default {
  components: {
    DynamicButton,
  },
  data() {
    return {
      date_time: {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        min: 0,
        sec: 0,
      },
    }
  },
  computed: {
    content() {
      return this.$store.state.content.hero
    },
    headlines() {
      return this.$store.state.headlines
    },
    hlSet() {
      return this.headlines.inUse
    },
  },
  mounted() {
    this.set_date()
    window.setInterval(() => {
      this.set_date()
    }, 1000)
  },

  methods: {
    scrollTo(location) {
      const loc = document.querySelector(`#${location}`)
      loc.scrollIntoView(true, { behavior: 'smooth' })
    },
    set_date() {
      const startDate = 1530628200000
      const year = { secs: 31536000, name: 'year' }
      const month = { secs: 2592000, name: 'month' }
      const day = { secs: 86400, name: 'day' }
      const hour = { secs: 3600, name: 'hour' }
      const min = { secs: 60, name: 'min' }
      const fullDate = [year, month, day, hour, min]
      let seconds = Math.floor((new Date() - startDate) / 1000)

      fullDate.forEach((d) => {
        const interval = seconds / d.secs
        if (interval > 1) {
          this.date_time[d.name] = Math.floor(interval)
          seconds = seconds - d.secs * Math.floor(interval)
        }
      })
      this.date_time.sec = seconds
    },
  },
}
</script>
<style lang="scss" scoped>
@mixin hero_sides {
  min-height: 80vh;
  width: 50%;
  box-sizing: border-box;
  @media (max-width: $break) {
    width: 100%;
    min-height: 40vh;
  }
}
section {
  margin-top: -$l_gap;
  background: green;
  width: 100%;
  .wrapper {
    background: red;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .hero_left {
      @include hero_sides;

      padding: 3rem 0 0 0;
      background-position: center !important;
      background-repeat: no-repeat !important;
      background-size: cover !important;
      display: grid;
      span {
        margin: 0 0 3rem 0;
        width: 100%;
        background: rgba($accent_color, 0.5);
        align-self: center;
        text-align: center;
      }
    }
    .hero_right {
      @include hero_sides;

      padding: 3rem 2rem 2rem 2rem;
      background: $main_color;
      display: grid;
      color: white;
      box-shadow: 0 -5px 3px 5px black;
      .text_holder {
        align-self: center;
        @media (max-width: $break) {
          align-self: start;
        }
        ul {
          margin-top: $gap;
          padding-left: 1rem;
        }
      }
      @media (max-width: $break) {
        min-height: auto;
        border-bottom: 6px solid $main_color;
        box-shadow: none;
        padding: 1rem;
      }
      .date {
        white-space: nowrap;
        color: $accent_color2;
      }
      .gotos {
        margin-top: $l-gap;
        .gototext {
          margin-top: $l-gap;
        }
      }
    }
  }
}
</style>
