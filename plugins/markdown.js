import Vue from 'vue'
import marked from 'marked'
import insane from 'insane'
// import DOMpurify from 'dompurify'
if (!Vue.__md_mixin__) {
  Vue._md_mixin__ = true
  Vue.mixin({
    methods: {
      markdown(text) {
        if (text) {
          const mk = marked(text)
          const mki = insane(mk, {
            allowedTags: [
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'p',
              'span',
              'NuxtLink',
              'a',
            ],
            allowedAttributes: {
              h1: ['class'],
              h2: ['class'],
              h3: ['class'],
              h4: ['class'],
              h5: ['class'],
              a: 'href',
            },
          })
          return mki
        }
      },
    },
  })
}
