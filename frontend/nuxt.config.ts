import tailwind from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  routeRules: {
    '/': {
      swr: true,
      cache: {
        swr: true,
        base: 'redis',
        maxAge: 1
      }
    },
    'restaurant/**': { 
      ssr: false 
    }
  },

  site: {
    url: process.env.NUXT_PUBLIC_DJANGO_PROD_URL || 'http://localhost:3000'
  },

  vite: {
    plugins: [tailwind()]
  },

  ui: {
    prefix: 'nuxt',
  },

  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-vuefire'
  ],

  vuefire: {
    config: {
      apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      dbUrl: process.env.NUXT_PUBLIC_FIREBASE_DB_URL,
      storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      messageSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
      projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID
    }
  },

  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        host: process.env.NUXT_PUBLIC_REDIS_HOST || '127.0.0.1',
        port: 6379,
        username: process.env.NUXT_PUBLIC_REDIS_USER || '',
        password: process.env.NUXT_PUBLIC_REDIS_PASSWORD || ''
      }
    }
  }
})
