export default defineNuxtConfig({
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
})
