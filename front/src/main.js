import Vue from 'vue'
import App from './App.vue'

import './plugins/local-storage'

// Sessions
import './plugins/sessions'

// Font Awesome
import './plugins/fontawesome'

// Router + Store
import './i18n'
import store from './store'
import router from './routes'
import vuetify from './plugins/vuetify'

// Components
import BaseJumbotron from './components/BaseJumbotron.vue'
import BaseBreadcrumbs from './components/BaseBreadcrumbs.vue'
import BaseSidebar from './components/BaseSidebar.vue'
import SidebarContainer from './components/sidebar/SidebarContainer.vue'
import BaseNavbar from './components/BaseNavbar.vue'

// Bootstrap
import './plugins/bootstrap-vue'

// Plugins
import globalPlugin from './plugins'

// Mixins
import globalMixin from './mixins'

import i18n from './i18n'

// Plugins
Vue.use(globalPlugin)

// Components
Vue.component('base-navbar', BaseNavbar)
Vue.component('sidebar-container', SidebarContainer)
Vue.component('base-jumbotron', BaseJumbotron)
Vue.component('base-breadcrumbs', BaseBreadcrumbs)
Vue.component('base-sidebar', BaseSidebar)

// Mixins
Vue.mixin(globalMixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
