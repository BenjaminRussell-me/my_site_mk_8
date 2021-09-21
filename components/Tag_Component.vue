<template>
  <span class="tag">{{ content }}</span>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  padding: 3px 10px 3px 10px;
  background: $gradient;
  background-attachment: fixed;
  border-radius: 360px;
  color: $main_color;
}
</style>
