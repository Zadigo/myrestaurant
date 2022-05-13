<template>
  <component :is="currentSite" />
</template>

<script>
import { useRestaurant } from './store/restaurant'
import { storeToRefs } from 'pinia'

import BaseSiteVue from '@/layouts/BaseSite.vue'
import GenericSiteVue from '@/layouts/GenericSite.vue'

export default {
  name: 'App',
  setup() {
    var store = useRestaurant()
    var { currentSite } = storeToRefs(store)
    return {
      currentSite
    }
  },
  components: {
    BaseSiteVue,
    GenericSiteVue
  }
}
</script>
