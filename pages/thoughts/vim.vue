<template>
  <div>
    <h1>Why I use Vim</h1>
    <img :src="displayPic()" />
    <div v-html="markdown(content)"></div>
  </div>
</template>
<script>
export default {
  layout: 'display',
  data() {
    return {
      content: `
![](https://res.cloudinary.com/dzjvh0z3f/image/upload/v1633105852/thoughts/crazy_c9mlba.gif)

First off I know things can get a bit sensitive around this topic. Back when trying to figure out if it was worth learning Vim in the first place the flame wars online you could find on what text editor or IDE to use made political discussions look like puppies and rainbows. 

I do not feel that strongly about it. (please have mercy I have two cats that need me)

I started learning vim for a couple of reasons. I think like most people in the tech space I got stuck in vim by accident once. For me, it happened while trying to set up an after-market rack server I bought off of amazon. (Used for the most overkill home assistant hub ever, and also a pretty ballin Minecraft server). I then looked up how to escape the technological prison I had trapped myself in, used nano for my intended task, and didn't think about it again.

Until one of my favorite YouTubers posted [Vim in 100 Seconds](https://www.youtube.com/watch?v=-txKSRn0qeA). I was intrigued! So I installed the vim controls into VS code and started attempting to work. I soon discovered a problem, muscle memory. As much as I tried to not use arrow keys and the mouse if I was ever really getting into the flow of coding I would forget to use any of the vim bindings. I struggled with this for a while because I had found a new reason to keep using vim it helped with arm strain throughout the day!

It was never bad enough to be considered RSI but my arms would often ache after long days on the computer. After a couple of weeks of using vim bindings (when cognizant anyway) I noticed a big improvement in the amount of discomfort I felt! So now I just had to figure out how to train my muscle memory to use vim. 

My solution was... I took away all other options!

I went out and bought [a niceish 60% keyboard](https://www.amazon.com/dp/B07Y4XPZZT/ref=twister_B083NQZGTF?_encoding=UTF8&th=1) without arrow keys and started using actual Vim for all my development! (this wasn't too difficult as I had already started doing all my work in [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) ) After about a month I didn't really think about it anymore and it's been great! I imagine I will eventually go back to VS code with vim bindings once I get tired of messing around with vim plugins but for now, I'm happy. 

Now the only regrettable side effect is my damn muscle memory attempting to save in photoshop with :w

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
