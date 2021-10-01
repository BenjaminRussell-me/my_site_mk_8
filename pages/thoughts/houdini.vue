<template>
  <div>
    <h1>Houdini looks cool</h1>
    <div v-html="markdown(content)"></div>
  </div>
</template>
<script>
export default {
  layout: 'display',
  data() {
    return {
      content: `
![](https://res.cloudinary.com/dzjvh0z3f/image/upload/v1633105852/thoughts/magic_m6dx28.gif)

I'll be honest. I have watched quite a few dev talks about CSS Houdini and I'm not sure I understand the full scope of it yet. 
[this talk by Una Kravets](https://www.youtube.com/watch?v=yZ-HpepLIY8&t=1892s) was the one that got through my skull enough to make me excited for it though.

#### So what is Houdini? 
From what I understand Houdini is a low-level API for the browser's CSS engine. This API has multiple different parts that all do very different things.

The list goes. 
- Paint API (much like HTML canvas but within CSS)
- Properties & Values API ("CSS variables with superpowers")
- Typed OM (object-based API for working with CSS values in JavaScript)
- Layout API (gives developers the ability to write their own layout algorithms)
- AnimationWorklet (provides a method to create scripted animations in their own thread)
- Parser API ("The goal of this specification is to allow authors access to the engine's parser")
- Font Metrics API (full control over text down to the individual glyph)

Now as of writing this the Paint, Properties & Values and Typed OM APIS are available only in Chromium browsers. Properties & Values has partial support in Safari and the rest are all unimplemented as of yet in both Safari and Firefox.
[is Houdini ready yet](https://ishoudinireadyyet.com/)

But I've been aware of Houdini for a couple of years now and in that time we went from nothing at all to this. So maybe just a couple more till it's worth it to buckle down and learn this.

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
