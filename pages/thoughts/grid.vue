<template>
  <div>
    <h1>Grid VS Flex</h1>
    <div v-html="markdown(content)"></div>
  </div>
</template>
<script>
export default {
  layout: 'display',
  data() {
    return {
      content: `
![](https://res.cloudinary.com/dzjvh0z3f/image/upload/v1633104681/vs_ghwcmj.gif)

When creating a layout with CSS it's not always immediately obvious which display rule to use, grid or flex.
I think it becomes a little more clear if you explicitly list out my perceived strengths and weaknesses of each rule.

#### flex strengths
-   it's flexible! Set up correctly flex can gracefully handle lots of elements and space them around in a multitude of ways.
-   amazing at displaying things in a line and will almost always at least look passable in doing so.
-   spacing things evenly

#### flex weaknesses
-   keeping things exactly where you want them especially on the y axis
-   asymmetrical layouts

#### grid strengths
-   If you can imagine it you can make it

#### grid weaknesses
-   can be very very tedious to do intricate and reactive things at all necessary screen sizes.

## So to summarize.
Flex is easy to use, will display whatever you throw in it in a line very nicely, will auto wrap if you want but is not very exact or good on the y axis.

Grid is an amazing tool that I love. with some know-how and a couple of tricks, no design or layout is out of reach. Just making sure it doesn't break or do something unexpected under every condition is sometimes not worth it or just a completely unnecessary amount of work.

## TLDR
I recommend using flex for 99% of things that are just inline and don't have to be exact in their relation to each other and grid for everything else.

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
