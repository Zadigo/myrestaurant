<template>
  <component :is="currentSite" />
</template>

<script>
import { useRestaurant } from './store/restaurant'
import { storeToRefs } from 'pinia'

import BaseSite from '@/layouts/BaseSite.vue'

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
    BaseSite
  }
}
</script>
