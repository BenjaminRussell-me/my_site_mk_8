<template>
  <div class="project">
    <div class="outside"></div>
    <NuxtLink :to="content.link" class="inside">
      <h1 class="title t3">{{ content.title }}</h1>
      <div class="tags">
        <TagComponent
          v-for="(tag, index) in content.tags"
          :key="`tag${index}`"
          :content="tag"
        ></TagComponent>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import TagComponent from './Tag_Component.vue'
export default {
  components: {
    TagComponent,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  $square: clamp(300px, 23vw, 600px);

  width: $square;
  height: $square;
  display: grid;
  place-items: center;
  .outside {
    background: $gradient;
    padding: $s-gap;
    display: grid;
    height: 100%;
    width: 100%;
    border-radius: $border_radius;
    filter: blur(5px);
    grid-area: 1/1/1/1;
  }
  .inside {
    grid-area: 1/1/1/1;
    border-radius: $border_radius;
    background: $main_color;
    box-shadow: 0 0 3px 1px white;
    padding: $gap;
    box-sizing: border-box;
    color: white;
    text-decoration: none;
    transition: 0.3s ease;
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    z-index: 5;
    height: 100%;
    width: 100%;
    &:focus {
      outline: none;
    }
    &:hover {
      transform: scale(1.05);
      background: rgba($main_color, 0.75);
      box-shadow: 0 0 5px 3px black;
    }
    &:active {
      transition: 0.01s !important;
      transform: scale(0.99) !important;
    }
  }
  .tags {
    display: flex;
    gap: 10px;
  }
}
</style>
