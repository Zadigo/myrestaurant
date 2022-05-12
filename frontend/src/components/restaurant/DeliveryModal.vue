<template>
  <base-modal :show="showDeliveryModal" @close-modal="showDeliveryModal=false">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="form-check">
            <input v-model="deliveryOption.type" value="Click & collect" class="form-check-input" type="radio" name="delivery" id="delivery" checked>
            <label class="form-check-label" for="delivery">
              Click & collect
            </label>
          </div>
        </div>

        <div class="col-12">
          <div class="d-flex justify-content-between my-4">
            <p class="m-0">Loos, Lille</p>
            <a href class="m-0 text-info" @click.prevent>Modifier</a>
          </div>

          <div class="d-flex justify-content-between my-4">
            <p class="m-0">Livré dans 25 - 45 minutes</p>
            <a href class="m-0 text-info" @click.prevent>Modifier</a>
          </div>
        </div>

        <button class="btn btn-lg btn-block btn-primary shadow-none" @click="showDeliveryModal=false">
          Confirmer
        </button>
      </div>
    </div>
  </base-modal>
</template>

<script>
import { useRestaurant } from '@/store/restaurant'
import { mapWritableState } from 'pinia'

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
  data: () => ({
    coordinates: null,
    deliveryOption: {
      type: 'Click & collect'
    }
  }),
  computed: {
    ...mapWritableState(useRestaurant, ['showDeliveryModal'])
  },
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
