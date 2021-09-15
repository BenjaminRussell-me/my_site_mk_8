<template>
  <ul>
    <li v-for="item in list" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  padding: 0;
  display: flex;
  column-gap: 2rem;
  flex-wrap: wrap;
  list-style-type: none;
  li {
    font-size: clamp(1.1rem, 10 * 1vw / 2.6, 1.85rem);
  }
  @media (max-width: 1080px) {
    column-gap: 1rem;
    width: 80%;
    margin: 0;
    padding-left: 6%;
  }
}
</style>
