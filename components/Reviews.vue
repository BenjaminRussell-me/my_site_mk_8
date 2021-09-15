<template>
  <div id="reviews">
    <div
      v-for="(review, index) in reviews"
      :key="`review${index}`"
      class="review"
      :class="`review${index}`"
      :style="{ gridTemplateColumns: `repeat(${review.reviews.length}, 1fr)` }"
    >
      <div class="top" :style="{ gridColumn: `span ${review.reviews.length}` }">
        <h3 class="t3">{{ review.title }}</h3>
      </div>
      <div
        v-for="subReview in review.reviews"
        :key="subReview.content + index"
        class="bot"
      >
        <div class="testiHolder">
          <p class="tp">{{ subReview.content }}</p>
          <p class="tp">{{ subReview.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    reviews() {
      return this.$store.state.reviews.reviews
    },
  },
}
</script>

<style scoped lang="scss">
#testimonials {
  padding: 3rem 0 3rem 0;
  display: grid;
  grid-gap: 2rem;
}
.review {
  display: grid;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr !important;
    .top {
      grid-column: span 1 !important;
    }
  }
  .bot {
    border-right: white 3px solid;
    padding: 0 1rem 0 0;
    margin: 0 2rem 0 0;
    &:last-child {
      border: none !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    @media (max-width: 1080px) {
      padding: 0;
      margin: 0;
      border: none;
    }
  }
}
</style>
