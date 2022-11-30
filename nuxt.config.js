export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: process.env.SUPABASE_URL,
      apiKey: process.env.SUPABASE_ANON_KEY,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', ['defineStore', 'definePiniaStore']] }],
  ],
  imports: {
    dirs: ['stores'],
  },
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  }
})
