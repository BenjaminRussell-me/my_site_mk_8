<template>
  <div v-html="markdown(content)"></div>
</template>
<script>
export default {
  layout: 'display',
  data() {
    return {
      content: `
# hi

`,
    }
  },
}
</script>
<style lang="scss">
root {
  --placeholder: null;
}
</style>
