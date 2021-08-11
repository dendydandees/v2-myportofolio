export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // public runtime nuxt config
  publicRuntimeConfig: {
    name: process.env.NAME,
    greeting: process.env.GREETING,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dendy Dharmawan | Front-End Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content:
          'dendy, dharmawan, dendy dharmawan, portofolio, web, web development, app, technology, tech, front-end, back-end, software engineering'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.GREETING
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      }
    ],
    script: [
      {
        src: 'https://cdn.splitbee.io/sb.js',
        async: true
      },
      {
        src: 'https://code.iconify.design/1/1.0.7/iconify.min.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/persistedState.client.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // google analytics
    '@nuxtjs/google-analytics',
    // moment js
    '@nuxtjs/moment',
    // nuxt image for optimize images
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'nuxt-supabase',
      {
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_KEY
      }
    ]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      author: process.env.NAME,
      theme_color: '#8b5cf6'
    },
    icon: {
      source: 'static/maskable_icon.png'
    },
    manifest: {
      name: process.env.NAME,
      short_name: process.env.NAME,
      description: process.env.GREETING,
      background_color: '#8b5cf6',
      lang: 'en'
    },
    workbox: {
      // enabled: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // analytics settings
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: true
  },

  // loading components
  loading: {
    color: '#f59e0b',
    height: '8px'
  },

  image: {
    domains: ['https://tfjgyftazzpzzndywyan.supabase.in/storage/v1/object/sign/dendyportofolio/projects/']
  }
}
