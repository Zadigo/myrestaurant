import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import i18n from './i18n'
import client from './plugins/axios'
import router from './router'
import VueGeolocation from 'vue-browser-geolocation'

require('bootstrap/dist/css/bootstrap.min.css')
require('mdb-ui-kit/css/mdb.min.css')

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VueAxios, client)
app.use(VueGeolocation)
app.mount('#app')
