<template>
  <div class="project">
    <h1 class="title"></h1>
    <div class="tags">
      <TagComponent></TagComponent>
    </div>
  </div>
</template>

<script>
import TagComponent from './Tag_Component.vue'
export default {
  components: {
    TagComponent,
  },
}
</script>

<style lang="scss" scoped>
.project {
  $square: clamp(300px, 23vw, 600px);

  width: $square;
  height: $square;
  background: white;
}
</style>
