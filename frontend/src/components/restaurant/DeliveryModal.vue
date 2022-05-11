<template>
  <base-modal>
    Something
  </base-modal>
</template>

<script>
import BaseModal from '@/layouts/BaseModal.vue'

export default {
  name: 'DeliveryModal',
  components: { BaseModal },
  data: () => ({
    coordinates: null
  }),
  beforeMount() {
    this.$getLocation({
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    })
    .then(coordinates => {
      this.coordinates = coordinates
    })
  }
}
</script>
