export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
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
    [
      '@pinia/nuxt',
      { autoImports: ['defineStore', ['defineStore', 'definePiniaStore']] },
    ],
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
  },
})
