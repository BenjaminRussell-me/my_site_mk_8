<template>
  <div>
    <h1>Landing Page Template</h1>
    <img :src="displayPic('projects/template.png')" />
    <div v-html="markdown(content)"></div>
  </div>
</template>
<script>
export default {
  layout: 'display',
  data() {
    return {
      content: `
##### Links
[github](https://github.com/br-haa/landing_page_template)

## what is it?
This is a template for creating pages that I coded from scratch. While I have created probably 20 - 30 templates this way I chose this one because it is the newest. I create templates to be as flexible as possible so that it doesn't break from oddly shaped content but with enough styling where getting it to look good after replacing the content isn't hard or time-consuming. 

## what I learned
For three years it has been my job to create templates like this one for the other developers to use. Making something easy to slot new assets into with a resilient grid system that won't explode under various conditions proved to always be a challenge. Over the years the most important concepts and practices  I learned when creating site templates are. 

- consistent in naming schemes
- css must rely heavily on variables
- comment things that may be confusing well
- similar things in consistent places
- don't over or underwrite the code
- make things that are meant to be placeholders very clear

There are probably more that I'm not thinking about right now but you get the idea. Creating a one off hacked-together website is easy. Creating a website that needs to gracefully be maintained and work with different content can be quite a challenge and that's something I'm now quite practiced in.

I created this template at the same time I built this portfolio site. I always find to make something I'm happy with I code it once and then try to use it myself and reiterate off of how my experience went.



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
