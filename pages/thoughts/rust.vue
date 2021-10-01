<template>
  <div>
    <h1>Rust and WASM</h1>
    <div v-html="markdown(content)"></div>
  </div>
</template>
<script>
export default {
  layout: 'display',
  data() {
    return {
      content: `
![](https://res.cloudinary.com/dzjvh0z3f/image/upload/v1633105851/thoughts/blocks_qxbhxf.gif)

My interest in Rust started the same way it did for many web developers. "oh god, web assembly? low-level programming languages on the web?... okay, fine, when do I have to hang up the javascript?". Then after some research learning about [Rust](https://www.rust-lang.org/), [WASI](https://wasi.dev/), [Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor), [Rocket](https://rocket.rs/) and finally finding out that web assembly in its current form won't ever replace JavaScript fully.

*(web assembly has no DOM access for those who don't know).*

It's too late, I'm hooked. 

The more I learn about WASM the more I'm convinced how important it will be. One of the dev talks that got me really excited was [Rust, WebAssembly, and the future of Serverless by Steve Klabnik](https://www.youtube.com/watch?v=CMB6AlE1QuI&t=2s). I can't stress enough how great this talk is. He hits a bunch of points about Rust, WASM and with the hook that if WASM + WASI was a thing years ago Docker wouldn't have existed.

*Another interesting talk [Bringing WebAssembly outside the web with WASI by Lin Clark](https://www.youtube.com/watch?v=fh9WXPu0hw8&t=2s) goes more into WASI.*

I've been reading all the way through the [Rust book](https://www.amazon.com/Rust-Programming-Language-Steve-Klabnik/dp/1593278284) and I've really been enjoying learning it. It is well written and very informative. Perfect for someone like me who has lots of experience with JavaScript and Typescript and not much else. There is still a lot that goes over my head too but I plan on mastering it. 

There isn't really a point to this post so far so I'll give it one now.
WASM is going to be big. Rust is a cool language and best in class for WASM.
I think people in the webspace should check them both out.

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
