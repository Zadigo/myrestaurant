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
  components: {
    BaseSiteVue,
    GenericSiteVue
  },
  setup() {
    const store = useRestaurant()
    const { currentSite } = storeToRefs(store)
    return {
      currentSite
    }
  }
}
</script>
