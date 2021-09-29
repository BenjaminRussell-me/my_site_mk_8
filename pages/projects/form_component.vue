<template>
  <div>
    <h1>Form Component</h1>
    <img :src="displayPic('projects/form.png')" />
    <div v-html="markdown(content)"></div>
  </div>
</template>
<script>
export default {
  layout: 'display',
  data() {
    return {
      content: `

##### links
[example](https://determined-perlman-1dee41.netlify.app/components/FormController.html#example)

[npm](https://www.npmjs.com/package/haa-form)

[github](https://github.com/br-haa/form_component)
## What is it?
This is a plug-and-play form I made for the company I worked for. At one point we switched services for logging forms and phone calls so we were in a position where we needed to very quickly switch out the form on almost one hundred pages. To try to streamline the process and reduce errors I created a vue component with all the needed logic and validation one npm install away. 

It was made in a rush and was my first attempt at making a reusable external component but at the time of writing this form is in use in a hundred-ish web pages and there have been no problems for over a year. 

I've included it here as an example of creating something production-ready under pressure. 

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
