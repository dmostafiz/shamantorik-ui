// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "nuxt-rating",
    "vuetify-nuxt-module",
    "nuxt-tiptap-editor"
  ],

  colorMode: {
    preference: 'light'
  },

  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
      theme: {
         defaultTheme: 'light'
      }
    }
  },

  tiptap: {
    prefix: "Tiptap", //prefix for Tiptap imports, composables not included
  },
  
})