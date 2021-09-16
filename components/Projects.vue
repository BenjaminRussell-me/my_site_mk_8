<template>
  <div id="projects">
    <h1 class="t1">{{ content.projects.title }}</h1>
    <div class="flex">
      <ProjectBlock
        v-for="(project, index) in content.projects.items"
        :key="`project${index}`"
      >
      </ProjectBlock>
    </div>
  </div>
</template>

<script>
import ProjectBlock from './Project_Block.vue'
export default {
  components: {
    ProjectBlock,
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
  justify-content: space-between;
  gap: $gap;
  margin: 0 0 3rem 0;
}
</style>
