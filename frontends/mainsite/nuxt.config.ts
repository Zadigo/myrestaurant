// import tailwind from '@tailwindcss/vite'

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
    url: process.env.NUXT_PUBLIC_DJANGO_PROD_URL
  },

  // vite: {
  //   plugins: [tailwind()]
  // },

  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-vuefire',
    '@nuxtjs/seo'
  ],

  runtimeConfig: {
    firebaseProjectId: process.env.NUXT_FIREBASE_PROJECT_ID,
    firebaseClientEmail: process.env.NUXT_FIREBASE_CLIENT_EMAIL,
    firebasePrivateKey: process.env.NUXT_FIREBASE_PRIVATE_KEY,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    }
  },

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
  },

  imports: {
    dirs: [
      '~/constants'
    ]
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '-',
        siteName: process.env.NUXT_PUBLIC_SITE_NAME
      }
    }
  },

  fonts: {
    families: [
      {
        name: 'Montserrat'
      },
      {
        name: 'Google Sans'
      }
    ]
  }
})
