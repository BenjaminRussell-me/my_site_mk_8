<template>
  <div>
    <h1>Why I ❤️ clamp</h1>
    <div v-html="markdown(content)"></div>
  </div>
</template>
<script>
export default {
  layout: 'display',
  data() {
    return {
      content: `
![](ihttps://res.cloudinary.com/dzjvh0z3f/image/upload/v1633105854/thoughts/hug_xnmlbn.gif)

Out of all the new-ish widely usable CSS tricks clamp has got to be one of my favorites.

#### What is clamp / how does it work?
In CSS clamp is a way to define a minimum value a maximum value and a dynamic parameter that will slide between the two. For example

<code>
selector {
	width: clamp(100px, 50vw, 300px);
}
</code>

In this case the selector will follow the value of 50vw until it is either as small as 100px or as large as 300px. Seemingly simple but so powerful.

When creating reusable components it lets you create an area of fluidity that the component works under. The middle value can be changed to fit the need of the situation and the component won't ever break!

Another amazing thing you can do with clamp is control font sizes!

[Pedro Rodriguez on CSS tricks ](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/) has a great article about making linearly scaling font size! It even goes into making text that will never re-flow! but I find going that far is usually unnecessary.

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
