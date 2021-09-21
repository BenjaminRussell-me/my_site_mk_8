<template>
  <section id="thoughts" class="parent">
    <div class="outer_wrapper">
      <h1 class="t1 accent_text2">{{ content.thoughts.title }}</h1>
      <div class="flex">
        <ThoughtBlock
          v-for="(thought, index) in content.thoughts.items"
          :key="`thought${index}`"
          :content="thought"
        ></ThoughtBlock>
      </div>
    </div>
  </section>
</template>

<script>
import ThoughtBlock from './Thought_Block.vue'
export default {
  components: {
    ThoughtBlock,
  },
  computed: {
    content() {
      return this.$store.state.content
    },
  },
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: $gap;
}
</style>
