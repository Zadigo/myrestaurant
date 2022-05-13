import { createPinia } from 'pinia'
import { createApp, ref, toRef } from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import i18n from './i18n'
import client from './plugins/axios'
import router from './router'
// import VueGeolocation from 'vue-browser-geolocation'

require('bootstrap/dist/css/bootstrap.min.css')
require('mdb-ui-kit/css/mdb.min.css')

const pinia = createPinia()

var currentSite = ref('base-site')

pinia.use(({ store }) => {
    store.$state.currentSite = currentSite
    store.currentSite = currentSite

    store.currentSite = toRef(store.$state, 'currentSite')

    function getBaseSite() {
        store.currentSite = 'base-site-vue'
    }

    function getGenericSite() {
        store.currentSite = 'generic-site-vue'
    }

    return {
        getBaseSite,
        getGenericSite
    }
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VueAxios, client)
// app.use(VueGeolocation)
app.use({
    install: (app) => {
        function getLocation() {
            return new Promise((resolve, reject) => {
                var locationAvailable = 'geolocation' in window.navigator
                
                if (locationAvailable) {
                    window.navigator.geolocation.getCurrentPosition((position) => {
                        resolve({
                            latitute: position.coords.latitude,
                            longitude: position.coords.longitude,
                            altitude: position.coords.altitude,
                            altitudeAccuracy: position.coords.altitudeAccuracy,
                            accuracy: position.coords.accuracy
                        })
                    })
                } else {
                    reject('No position available')
                }
            })
        }

        app.config.globalProperties.$getLocation = getLocation
        
        app.mixin({
            methods: {
                clearLocation() {
                    // Do something
                }
            },

            watch: {
                
            }
        })
    }
})
app.mount('#app')
