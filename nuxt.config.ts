// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  srcDir: 'app/',
  dir: {
    public: '../public'
  },

  app: {
    head: {
      title: 'Welcome To Cana Gardens | Countryside Weddings & Events Venue off Kiambu Rd',
      htmlAttrs: {
        lang: 'en-US',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Cana Gardens is a stunning countryside wedding and corporate events venue located only 10KM from Nairobi off Kiambu Road. Lush gardens, garden deck, 400-car parking, and panoramic scenic views.',
        },
        { name: 'theme-color', content: '#064e3b' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Cana Gardens' },
        {
          property: 'og:title',
          content: 'Welcome To Cana Gardens | Countryside Weddings & Events Venue off Kiambu Rd',
        },
        {
          property: 'og:description',
          content:
            'The stunning country side wedding venue you thought you would never find. Located only 10KM from Nairobi, the views are breathtaking.',
        },
        {
          property: 'og:image',
          content:
            'https://canagardens.co.ke/wp-content/uploads/2022/01/Paradise-Gardens-view.jpeg',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Sacramento&display=swap',
        },
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css',
        },
      ],
      script: [
        {
          children: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/services', '/gallery', '/faq', '/contact', '/blog'],
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://api.canagardens.co.ke/api',
    },
  },
})

