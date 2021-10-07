import Vue from 'vue'
import App from './App.vue'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

// Router + Store
import store from './store'
import router from './routes'
import vuetify from './plugins/vuetify'

// Components
import BaseJumbotron from './components/BaseJumbotron.vue'
import BaseBreadcrumbs from './components/BaseBreadcrumbs.vue'
import BaseSidebar from './components/BaseSidebar.vue'

import SidebarContainer from './components/sidebar/SidebarContainer.vue'
Vue.component('sidebar-container', SidebarContainer)

// Styling
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
library.add(faUser)

// Plugins
import globalPlugin from './plugins'

// Mixins
import globalMixin from './mixins'

// Plugins
Vue.use(globalPlugin)

// Components
Vue.component('font-awesome-icon', FontAwesomeIcon)
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

  render: h => h(App),
}).$mount('#app')
