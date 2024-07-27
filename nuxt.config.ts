// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    '@primevue/nuxt-module',
    "@nuxt/image",
    "nuxt-rating",
    "vuetify-nuxt-module",
    "nuxt-tiptap-editor",
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
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

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'light',
        }
      }
    }
  },

  tiptap: {
    prefix: "Tiptap", //prefix for Tiptap imports, composables not included
  },

  vite: {
    plugins: [
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: "__tla",
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: i => `__tla_${i}`
      })
    ],
  }

})