<template>
  <div>
    <h1>Pinned Map App</h1>
    <img :src="displayPic('projects/map_app.png')" />
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
- [app (its a free heroku host so it will take a bit to load)](https://map-creator-app.herokuapp.com/)
- [npm component](https://www.npmjs.com/package/haa-map)
- [github](https://github.com/br-haa/map_app)

## What is it?
This is an app I created for the sole purpose of creating maps with named pins on them. 
My employer at the time wanted to have individual maps for a targeted geo location. Originally the previous devs had created the maps by hand in photoshop. After doing it a couple of times I looked for a better way. 

## How it works
This is a two-part system. [one](https://www.npmjs.com/package/haa-map) is a site plugin built on top of [leaflet](https://leafletjs.com/) that accepts an array of coordinates. [Two](https://map-creator-app.herokuapp.com/) is this app with an interactive map that exports said array of objects.

This project was never fully finished because shortly after it was working it was decided that the maps served no real purpose on the landing pages. It is still one of my favorite projects because I think it shows the process of finding an issue and solving it with a program well and I like how it turned out to the MVP stage.

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
