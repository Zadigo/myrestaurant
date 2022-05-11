<template>
  <base-modal :show="show" @close-modal="store.showDeliveryModal=false">
    {{ coordinates }}
  </base-modal>
</template>

<script>
import { useRestaurant } from '@/store/restaurant'
import BaseModal from '@/layouts/BaseModal.vue'

export default {
  name: 'DeliveryModal',
  setup() {
    var store = useRestaurant()
    return {
      store
    }
  },
  components: { BaseModal },
  props: {
    show: {
      type: Boolean
    }
  },
  data: () => ({
    coordinates: null
  }),
  beforeMount() {
    this.getLocation()
    // this.$getLocation({
    //   enableHighAccuracy: false,
    //   timeout: 5000,
    //   maximumAge: 0
    // })
    // .then(coordinates => {
    //   this.coordinates = coordinates
    // })
  },
  methods: {
    async getLocation() {
      try {
        this.coordinates = await this.$getLocation()
      } catch(error) {
        console.log(error)
      }
    },
  }
}
</script>
