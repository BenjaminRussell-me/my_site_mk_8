<template>
  <div id="main_wrapper">
    <nuxt />
    <Header :scroll-location="scroll_location" />
    <Hero @about="aeOverride(1)" @contact="aeOverride(2)" />
    <Floater id="about" :override="ae.about" :scroll-location="scroll_location"
      ><TT_OT>
        <div>
          <h1 class="t1 accent_text">
            {{ noWidow(content.largestBlock.headline) }}
          </h1>
          <div class="tp" v-html="markdown(content.largestBlock.subhead)"></div>
          <NuxtLink class="t6 resume_link" to="/resume">My Resume</NuxtLink>
        </div>
        <img
          id="profile_pic"
          alt=""
          :src="displayPic(content.largestBlock.img.src)"
        />
      </TT_OT>
    </Floater>
    <Badges
      v-if="content.badges"
      :override="ae.badges"
      :scroll-location="scroll_location"
    />
    <FullRow> <Projects /> </FullRow>
    <Cta
      :override="ae.cta"
      :scroll-location="scroll_location"
      :content="content.cta1"
      @press="aeOverride(2)"
    >
    </Cta>
    <Thoughts />
    <Floater :override="ae.inter" :scroll-location="scroll_location">
      <Fresh />
    </Floater>
    <section id="help">
      <h1 v-if="content.help.headline" class="t3">
        {{ noWidow(content.help.headline) }}
      </h1>
      <h2 v-if="content.help.subhead" class="accent_text t2">
        {{ noWidow(content.help.subhead) }}
      </h2>
    </section>
    <FooterComponent>
      <Contact />
      <Copyright />
    </FooterComponent>
  </div>
</template>

<script>
import Header from '../components/Header_Component.vue'
import Hero from '../components/Hero.vue'
import Floater from '../components/holders/Floater.vue'
import Badges from '../components/Badges.vue'
import FullRow from '../components/holders/Full_Row.vue'
import Cta from '../components/Cta.vue'
import TT_OT from '../components/holders/TT_OT.vue'
import Fresh from '../components/Fresh.vue'
import FooterComponent from '../components/holders/Footer_component.vue'
import Copyright from '../components/Copyright.vue'
import Projects from '../components/Projects.vue'
import Thoughts from '../components/Thoughts.vue'
import Contact from '../components/Contact.vue'

export default {
  components: {
    Header,
    Hero,
    Floater,
    Badges,
    FullRow,
    Cta,
    TT_OT,
    Fresh,
    FooterComponent,
    Copyright,
    Projects,
    Thoughts,
    Contact,
  },
  data() {
    return {
      test: 1,
      scroll_location: 0,
      ae: {
        about: false,
        badges: false,
        cta: false,
        inter: false,
      },
    }
  },
  computed: {
    content() {
      return this.$store.state.content
    },
  },
  mounted() {
    window.addEventListener(
      'scroll',
      this.debounce(() => this.setData())
    )
  },
  destroyed() {
    window.removeEventListener(
      'scroll',
      this.debounce(() => this.setData())
    )
  },
  methods: {
    debounce(func, timeout = 10) {
      // todo add timeout logic
      return (...args) => {
        func.apply(this.args)
      }
    },
    aeOverride(num) {
      if (num === 1) {
        this.ae.about = true
        this.ae.badges = true
        setTimeout(() => {
          this.scrollTo('about')
        }, 500)
      } else {
        this.ae.about = true
        this.ae.badges = true
        this.ae.cta = true
        this.ae.inter = true
        setTimeout(() => {
          this.scrollTo('contact')
        }, 500)
      }
    },
    setData() {
      this.scroll_location = window.pageYOffset
    },

    scrollTo(location) {
      const loc = document.querySelector(`#${location}`)
      loc.scrollIntoView(true, { behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss" scoped>
#main_wrapper {
  display: grid;
  row-gap: $l_gap * 2;
  #post_hero_button_row {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  #help {
    text-align: center;
  }
  #about {
    scroll-margin: 8rem;
  }
  #profile_pic {
    justify-self: center;
    max-width: 100%;
    max-height: 100%;
  }
  .resume_link {
    color: $accent_color;
  }
}
</style>
