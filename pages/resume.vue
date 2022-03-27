<template>
  <div id="resumeHolder">
    <div class="buttons">
      <DynamicButton class="back" @buttonPress="$router.back()"
        >👈 back</DynamicButton
      >
      <DynamicButton class="print" @buttonPress="print"
        >Click to print</DynamicButton
      >
    </div>
    <div id="resumePrint">
      <div id="resume">
        <div id="resumeTop" class="dark">
          <div id="resumeName">
            <h2>Benjamin Russell</h2>
            <h5>Web developer</h5>
            <div class="line bg1"></div>
          </div>
          <div id="resumeLogoHolder">
            <div class="line bg2"></div>
          </div>
        </div>
        <div id="resumeBody">
          <div id="resumeContact">
            <div>
              <h3>Contact</h3>
              <div id="contactInfo">
                <span class="tp"
                  >E-mail:
                  <a class="tp" href="mailto: contact@benjaminrussell.me"
                    >Contact@BenjaminRussell.me</a
                  ></span
                >
                <span class="tp"
                  >Website:
                  <a class="tp" href="https://portfolio.benjaminrussell.me"
                    >portfolio.BenjaminRussell.me</a
                  ></span
                >
              </div>
            </div>
          </div>
          <div id="deviderLine">
            <div class="dualLineHolder">
              <div class="halfline bg1"></div>
              <div class="halfline dark"></div>
            </div>
          </div>
          <div id="resumeSkills" class="dark">
            <div class="line bg2"></div>
            <div id="resumeSkillsContent">
              <h3>Skills</h3>
              <ul>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Vue.js</li>
                <li>GraphQL</li>
                <li>React</li>
                <li>AWS</li>
                <li>SCSS / HTML</li>
                <li>Node JS</li>
                <li>Wordpress</li>
                <li>Docker</li>
              </ul>
              <h3>Education</h3>
              <p>DCTC: 2015 - 2018</p>
              <ul>
                <li>Web & Multimedia / Graphic Design</li>
              </ul>
            </div>
          </div>
          <div id="resumeExperience">
            <div>
              <h3>Experience</h3>
              <h5>Hoglund Advertising and Analytics 2018 - Present</h5>
              <p><em>Web developer</em></p>
              <ul>
                <li>Create and manage internal CSS framework</li>
                <li>
                  Create and manage internal reusable JavaScript components
                </li>
                <li>Create and manage internal Applications</li>
                <li>Design and create new landing page templates</li>
                <li>
                  Research and create examples for how to switch our website
                  building stack to Vue.js
                </li>
              </ul>
            </div>
            <div class="dualLineHolder">
              <div class="halfline bg1"></div>
              <div class="halfline dark"></div>
            </div>
          </div>

          <div id="resumeAbout">
            <h3>About</h3>
            <p>
              I am a young professional developer / engineer / autonomous code bot hailing from Minnesota.

If you need something conjured, designed, or constructed through the medium of code, I'm your guy! I'm extremely confident in my abilities in most modern web technologies and the only thing I'm more confident in is my ability to learn quickly and on the fly.
            </p>

            <p>
If your company has interesting tech problems to solve and possibly a touch of design needed then please contact me! I'd love to talk!
            </p>
          </div>
        </div>
        <div id="resumeFooter">
          <div id="footerHolder">
            <div
              v-for="(block, index) in 11"
              :key="index"
              class="footerSpike bg"
              :class="`spike${index}`"
            ></div>
            <div id="bars">
              <div id="topBar" class="bg"></div>
              <div id="bottomBar" class="dark"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicButton from '../components/holders/Dynamic_Button.vue'
export default {
  components: {
    DynamicButton,
  },
  layout: 'blank',
  computed: {
    ymd() {
      const date = new Date()
      const y = date.getUTCFullYear()
      const d = date.getUTCDate()
      const m = date.getUTCMonth() + 1
      return `${d}_${m}_${y}`
    },
  },
  methods: {
    print() {
      let stylesHtml = ''
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML
      }
      const prtContent = document.querySelector('#resumePrint')
      const winPrint = window.open(
        '',
        '',
        'left=0,top=0,width=912,height=1092,toolbar=0,scrollbars=0,status=0,margins=None'
      )
      const printHtml = prtContent?.innerHTML
      winPrint?.document.write(`
        <!DOCTYPE html>
          <html lang="en">
            <head>
              ${stylesHtml}
							<title>benjamin_russell_resume_${this.ymd}</title>
            </head>
            <body>
               ${printHtml}
            </body>
          </html>
        `)
      setTimeout(() => {
        winPrint?.document.close()
        winPrint?.focus()
        winPrint?.print()
        winPrint?.close()
      }, 500)
    },
  },
}
</script>

<style scoped lang="scss">
.cls-1 {
  fill: url(#logoGradient);
}
.cls-2 {
  fill: #fff;
}
.bg {
  background: linear-gradient(to right, #0c64b0, #04bc95);
}
.bg1 {
  background: linear-gradient(to right, #0c64b0, #44a1b2);
}
.bg2 {
  background: linear-gradient(to right, #44a1b2, #04bc95);
}
.dark {
  background: hsl(208, 13%, 23%);
}
ul {
  padding: 0 0 0 1rem;
  margin: 0.5rem 0 0 0;
  li {
    padding: 0 0 0 0;
  }
}
.line {
  width: 100% !important;
  height: 5px;
  box-sizing: border-box;
}
.dualLineHolder {
  .halfline {
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    height: 3px;
  }
  .dark {
    margin-top: -1px;
  }
}
#resumeHolder {
  display: grid;
  justify-items: center;
  margin: $l_gap 0 $l_gap 0;
  .buttons {
    display: grid;
    width: 8.5in;
    margin: 0 0 $gap;
    .back {
      grid-area: 1/1/1/1;
      max-width: 200px;
    }
    .print {
      grid-area: 1/1/1/1;
      max-width: 300px;
      justify-self: center;
    }
  }
}
#resumePrint {
  box-shadow: 0 0 5px 3px black;
}
#resume {
  -webkit-print-color-adjust: exact;
  display: grid !important;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 1rem;
  width: 8.5in;
  height: 11in;
  background: white;
  color: hsl(208, 13%, 23%);
}
#resumeBody {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto 1fr auto;
  grid-column-gap: 1rem;
  padding: 2rem 2rem 0 2rem;
  box-sizing: border-box;
}
#resumeTop {
  box-sizing: border-box;
  color: white;
  grid-column-gap: 1rem;
  display: grid;
  padding: 6rem 2rem 1rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: end;
  align-self: start;
  #resumeName {
    grid-column: span 2;
  }
  #resumeLogoHolder {
    width: 100%;
    display: grid;
    justify-items: center;
    svg {
      width: 70px;
      padding: 0.5rem;
    }
  }
}
#resumeContact {
  grid-column: span 3;
  #contactInfo {
    display: flex;
    justify-content: left;
    column-gap: 1rem;
    align-items: center;
  }
}
#deviderLine {
  grid-column: span 2;
}
#resumeExperienceTitle {
  grid-column: span 3;
}
#resumeExperience {
  grid-column: span 2;
}
#resumeSkills {
  grid-row: span 3;
  color: white;
  margin-bottom: 4rem;
  #resumeSkillsContent {
    padding: 1rem;
  }
}
#resumeAbout {
  grid-column: span 2;
}
#resumeFooter {
  height: 80px;
  #footerHolder {
    height: 100%;
    display: grid;
    .footerSpike {
      grid-area: 1/1/1/1;
      z-index: 200;
      align-self: center;
    }
    .spike0 {
      width: 25px;
      margin-left: 2%;
      height: 10px;
      margin-bottom: 20px;
      background: hsl(207, 87%, 37%);
    }
    .spike1 {
      width: 6px;
      margin-left: 10%;
      background: hsl(208, 13%, 23%);
      height: 50px;
      margin-bottom: 20px;
    }
    .spike2 {
      width: 10px;
      margin-left: 15%;
      height: 20px;
      margin-bottom: 35px;
      background: hsl(202, 88%, 36%);
    }
    .spike3 {
      width: 14px;
      margin-left: 25%;
      height: 60px;
      margin-bottom: 2px;
      background: hsl(197, 89%, 35%);
    }
    .spike4 {
      width: 5px;
      margin-left: 38%;
      background: hsl(208, 13%, 23%);
      height: 20px;
      margin-bottom: 10px;
    }
    .spike5 {
      width: 7px;
      margin-left: 40%;
      height: 15px;
      margin-bottom: 25px;
      background: hsl(191, 90%, 34%);
    }
    .spike6 {
      width: 35px;
      margin-left: 55%;
      background: hsl(208, 13%, 23%);
      height: 25px;
      margin-bottom: 20px;
    }
    .spike7 {
      width: 15px;
      margin-left: 68%;
      height: 20px;
      margin-bottom: 35px;
      background: hsl(179, 92%, 33%);
    }
    .spike8 {
      width: 23px;
      margin-left: 80%;
      background: hsl(208, 13%, 23%);
      height: 40px;
      margin-bottom: 20px;
    }
    .spike9 {
      width: 5px;
      margin-left: 92%;
      height: 60px;
      margin-bottom: 10px;
      background: hsl(170, 95%, 36%);
    }
    .spike10 {
      width: 20px;
      margin-left: 96%;
      height: 10px;
      margin-bottom: 20px;
      background: hsl(168, 96%, 37%);
    }
    #bars {
      display: grid;
      grid-area: 1/1/1/1;
      align-self: end;
      #topBar {
        width: 100%;
        height: 10px;
      }
      #bottomBar {
        width: 100%;
        height: 40px;
      }
    }
  }
}
$textMargin: 0.2em;
h1,
h2,
h3,
h4,
h5,
p,
button,
label,
textarea,
a,
input {
  font-family: IBM Plex Sans, serif;
}
h1 {
  font-size: 5rem;
  font-weight: 1000;
  margin: $textMargin 0 $textMargin 0;
}
h2 {
  font-size: 3rem;
  font-weight: 900;
  margin: $textMargin 0 $textMargin 0;
}
h3 {
  font-size: 2rem;
  margin: $textMargin 0 $textMargin 0;
  font-weight: 800;
}
h4 {
  font-size: 1.2rem;
  margin: $textMargin 0 $textMargin 0;
  font-weight: 700;
}
h5 {
  font-size: 1.2rem;
  margin: $textMargin 0 $textMargin 0;
  font-weight: 600;
}
p,
button,
label,
textarea,
a,
input {
  margin: $textMargin 0 $textMargin 0;
  font-size: 1.1rem;
  font-weight: 500;
}
a {
  text-decoration: none;
  color: $accent_color;
}
#printButton {
  padding: 0.5rem 5rem 0.5rem 5rem;
  font-weight: bold;
  border: none;
  margin: 0 0 1rem 0;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 3px 1px black;
  &:focus {
    outline: none;
  }
  &:active {
    transition: 0.01s !important;
    transform: scale(0.99) !important;
    box-shadow: 0 0 1px 1px black !important;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 6px 3px black;
  }
}
</style>
