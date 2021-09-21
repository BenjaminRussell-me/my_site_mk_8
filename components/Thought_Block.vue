<template>
  <NuxtLink :to="content.link" class="thought">
    <div class="content">
      <h1>{{ content.title }}</h1>
      <div class="tags">
        <TagComponent
          v-for="(tag, index) in content.tags"
          :key="`thoughttag${index}`"
          :content="tag"
        ></TagComponent>
      </div>
    </div>
    <div class="line"></div>
  </NuxtLink>
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
.thought {
  height: 200px;
  width: 350px;
  background: $main_color;
  border-radius: $border_radius;
  box-shadow: $default-shadow;
  display: grid;
  grid-template-rows: 1fr auto;
  transition: 0.3s ease;
  color: white;
  text-decoration: none;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 7px 3px black;
  }
  &:active {
    transition: 0.01s !important;
    transform: scale(0.99) !important;
  }
  .content {
    padding: $gap;
    display: grid;
    grid-template-rows: 1fr auto;
    height: 80%;
    .tags {
      display: flex;
      gap: 10px;
    }
  }
  .line {
    width: 100%;
    border-radius: 0 0 $border_radius $border_radius;
    background: $gradient;
    background-attachment: fixed;
    height: 10px;
  }
}
</style>
