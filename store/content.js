export const state = () => ({
  header: {
    logo: { src: 'mylogo.svg', alt: 'benjaminrussell.me' },
  },
  hero: {
    portrait: { src: 'hero.png', alt: 'background' },
    left: `hey! how's it going?`,
  },
  largestBlock: {
    headline: `about me`,
    subhead: `
Hello! 👋

My name is Benjamin Russell. I am a 25-year-old Minneapolis-based developer with three years of professional experience.

My specialties are creating reusable components for teams, making cool user interactions with SCSS and Typescript, Vue.js, and whatever interesting thing I'm trying to learn currently. (Pssst Rust and web assembly! Super cool and possibly the future of the web 😜).

I've worked the last three years at a small, fast-paced marketing company where I have (with a team and also single-handedly) made many apps, websites, and landing pages.

I'm ready to grow and learn so I am currently looking for a new job and would love to talk.
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
    headline: `interests`,
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
    headline: `thanks for stopping by!`,
    subhead: `contact info is down there 👇`,
  },
  copyright: `Benjamin Russell`,

  projects: {
    title: 'projects',
    items: [
      {
        title: `Pinned Map App`,
        link: `/projects/map_app`,
        tags: [`app`, `vue`],
      },
      {
        title: `Custom Form Component`,
        link: `/projects/form_component`,
        tags: [`component`, `npm`, `vue`],
      },
      {
        title: `Landing Page Template`,
        link: `/projects/lp_template`,
        tags: [`nuxt`, `vue`],
      },
    ],
  },
  thoughts: {
    title: 'thoughts',
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
