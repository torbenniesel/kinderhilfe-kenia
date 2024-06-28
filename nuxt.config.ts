// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@nuxthq/studio",
    "@nuxt/image",
    "@nuxt/ui",
  ],
  devtools: { enabled: true },
  // https:/color-mode.nuxtjs.org
  colorMode: {
    classSuffix: "light",
  },
  css: ["~/assets/css/main.css"],
  // https://content.nuxtjs.org
  content: {
    documentDriven: true,
  },
  routeRules: {
    "/": { prerender: true },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
