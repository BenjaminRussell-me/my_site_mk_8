export const state = () => ({
  header: {
    logo: { src: 'logoWhite.svg', alt: '' },
  },
  // headlines to be found in headline store file
  hero: {
    portrait: { src: 'backgrounds/background.svg', alt: '' },
    left: `welcome`,
  },
  largestBlock: {
    headline: `about me`,
    subhead: `
Hello! 👋

My name is Benjamin Russell. I am a 25 year old Minneapolis based developer with three years of professional experience. 

My specialties are creating reusable components for teams, making cool user interactions with SCSS and Typescript, Vue.js, and whatever interesting thing I'm trying to learn currently. (Pssst Rust and web assembly! Super cool and possibly the future of web 😜).

I've worked the last three years at a small, fast paced marketing company where I have (with a team and also single handedly) made many apps, websites and landing pages.

I'm ready to grow and learn so I am currently looking for a new job and would love to talk.`,
    img: { src: 'me.jpg', alt: '' },
  },

  badges: [
    { src: 'Asset 1.svg' },
    {
      src: 'Asset 2.svg',
      text: '200+ Reviews',
    },
    { src: 'Asset 3.svg' },
    {
      src: 'Asset 4.svg',
      text: '230+ Reviews',
    },
    { src: 'Asset 5.svg' },
    { src: 'Asset 6.svg' },
  ],

  scroller: {
    title: `Why Hoglund Law?`,
    list: [
      `Free Confidential Consultations`,
      `Free Credit Repair Program`,
      `Free E-Book On Bankruptcy`,
      `Affordable Payment Plans`,
      `Over 47,000 Clients Trusted Us`,
      `70+ Years Of Combined Experience`,
      `Chapter 7, 13 & Business Bankruptcy`,
      `Call Days, Evenings, Or Weekends`,
    ],
  },

  experienced: {
    headline: `One Of Minnesota's Most Experienced Bankruptcy Law Firms`,
    subhead: `70+ Years Of Combined Bankruptcy Experience`,
    picture: { src: 'minnesota.svg', alt: '' },
    widgets: [
      {
        reviewType: `Google Reviews`,
        reviewAmount: `230+`,
        buttonText: `Read More`,
        img: { src: `Asset 1.svg`, alt: `` },
        stars: `4.5`,
      },
      {
        reviewType: `BBB Reviews`,
        reviewAmount: `200+`,
        buttonText: `Read More`,
        img: { src: `Asset 1.svg`, alt: `` },
        text: `We are proud to be A+ BBB accredited`,
      },
    ],
  },

  cta1: {
    buttonText: `Get Started!`,
    text: `Call Now!`,
    img: { src: 'logoWhite.svg', alt: '' },
  },
  cta2: {
    buttonText: `Message Us!`,
    text: `Call Now!`,
    img: { src: `logoWhite.svg`, alt: `` },
  },

  fresh: {
    headline: `Get A Fresh Start?`,
    subhead: `Most clients are able to...`,
    list: [
      `Stop collection harassment.`,
      `Stop home foreclosure.`,
      `Lower their monthly payments.`,
      `Stop wage garnishment.`,
      `Prevent auto repossession.`,
    ],
  },

  help: {
    headline: `The Call Is FREE! The Evaluation Is FREE!`,
    subhead: `We Can Help!`,
  },
  copywrite: `copywrite`,
})
