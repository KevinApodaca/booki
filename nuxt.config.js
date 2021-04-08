export default {
  target: 'static',
  components: true,
  head: {
    titleTemplate: "Booki Listings: %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: ["my-style"]
    },
    meta: [{
      charset: "utf-8",
    }]
  },
  router: {
    prefetchLinks: false
  },
  plugins:[ '~/plugins/maps.client', '~/plugins/dataApi', '~/plugins/auth.client' ],
  modules:[],
  buildModules:['@nuxtjs/tailwindcss'],
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    }
  },
  publicRuntimeConfig: {
    auth: {
      cookieName: 'idToken',
      clientId: '749230881568-nco4g9r1j1v1kgoftlerpbmsudia221o.apps.googleusercontent.com',
    },
  },
  privateRuntimeConfig: {
  },
}
