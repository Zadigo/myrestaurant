import { createApp, toRaw } from 'vue'

import { useVueSession } from './plugins/vue-storages'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import { createHead } from 'unhead'

import router from './router'
import App from './App.vue'
import installPlugins from './plugins'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import './style.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-ui-kit/css/mdb.min.css'

const head = createHead({
  plugins: [
    // CapoPlugin()
  ]
})
const pinia = createPinia()
pinia.use(({ store }) => {
  const { session } = useVueSession()

  store.$router = toRaw(router)
  store.$session = toRaw(session)

  store.$subscribe(({ storeId }) => {
    if (storeId === 'cart') {
      session.create('cart', store.$state.products)
    }
  })
})
const plugins = installPlugins()
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken1
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
      // fa
    }
  }
})

const app = createApp(App)
app.use(plugins)
app.use(head)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
