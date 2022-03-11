export const state = () => ({
  header: {
    logo: { src: 'mylogo.svg', alt: 'benjaminrussell.me' },
  },
  hero: {
    portrait: { src: 'hero.png', alt: 'background' },
    left: `Hey! How's it going?`,
  },
  largestBlock: {
    headline: `About me`,
    subhead: `
Hello! 👋

My name is Benjamin Russell. I am a Minneapolis-based developer.

My specialties are creating reusable components for teams, making cool user interactions with SCSS and Typescript, Vue.js, and whatever interesting thing I'm trying to learn currently.

I've worked most recently at a fast-paced marketing company where I have (with a team and also single-handedly) made many apps, websites, and landing pages.

I'm always looking to grow and learn so if you have an interesting opportunity I'd love to talk.
`,
    img: { src: 'me.jpg', alt: 'picture of me' },
  },

  badges: [
    {
      src: 'git.svg',
      text: 'fun github',
      link: 'https://github.com/BenjaminRussell-me',
    },
    {
      src: 'npm.svg',
      text: 'npm',
      link: 'https://www.npmjs.com/~benjaminrussell.me',
    },
    {
      src: 'git.svg',
      text: 'work github',
      link: 'https://github.com/br-haa',
    },
    {
      src: 'pen.svg',
      text: 'code pen',
      link: 'https://codepen.io/benjamin-me',
    },
    {
      src: 'linked.svg',
      text: 'linked in',
      link: 'https://linkedin.com/in/benjamin-russell-developer',
    },
  ],

  cta1: {
    buttonText: `contact me? :D`,
    img: { src: 'mylogodark.svg', alt: 'benjaminrussell.me' },
  },

  fresh: {
    headline: `Interests`,
    list: [
      `programming 💻`,
      `design 📝`,
      `typescript 👍`,
      `biking 🚲`,
      `illustration ✒`,
      `rust 🤖`,
      `web assembly 🧱`,
      `green tea 🍵`,
      `animation 🎬`,
      `swing dancing 💃`,
      `CSS Houdini 🎩`,
      `Vim ⚠`,
      `rollerblading ⛸`,
      `RGB lights 🚦`,
    ],
  },

  help: {
    headline: `Thanks for stopping by!`,
    subhead: `Contact info is down there 👇`,
  },
  copyright: `Benjamin Russell`,

  projects: {
    title: 'Projects',
    items: [
      {
        title: `Pinned Map App`,
        link: `/projects/map_app`,
        tags: [`app`, `vue`],
      },
      {
        title: `Landing Page Template`,
        link: `/projects/lp_template`,
        tags: [`nuxt`, `vue`],
      },
      {
        title: `Custom Form Component`,
        link: `/projects/form_component`,
        tags: [`component`, `npm`, `vue`],
      },
    ],
  },
  thoughts: {
    title: 'Thoughts',
    items: [
      {
        title: `Why I ♥ clamp`,
        link: `/thoughts/clamp`,
        tags: [`css`],
      },
      {
        title: `Why I use Vim`,
        link: `/thoughts/vim`,
        tags: [`insanity`],
      },
      {
        title: `Rust and WASM`,
        link: `/thoughts/rust`,
        tags: [`rust`, `wasm`, `future tech`],
      },
      {
        title: `Houdini looks cool`,
        link: `/thoughts/houdini`,
        tags: [`css`, `future tech`],
      },
      {
        title: `When to use grid vs flex`,
        link: `/thoughts/grid`,
        tags: [`css`, `best practices`],
      },
    ],
  },
})
