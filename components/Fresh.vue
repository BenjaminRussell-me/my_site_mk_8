<template>
  <div id="fresh">
    <h1 class="accent_text3 t2">{{ content.headline }}</h1>
    <h2 class="t4">{{ content.subhead }}</h2>
    <InlineList :list="content.list"></InlineList>
  </div>
</template>

<script>
export default {
  computed: {
    content() {
      return this.$store.state.content.fresh
    },
  },
}
</script>
