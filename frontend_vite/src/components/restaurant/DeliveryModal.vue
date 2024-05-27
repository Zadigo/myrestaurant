<template>
  <v-dialog v-model="showDeliveryModal" :id="id">
    <v-card style="width:400px;">
      <v-card-text>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="form-check">
                <input id="delivery" v-model="deliveryOption.type" value="Click & collect" class="form-check-input" type="radio" name="delivery" checked>
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

            <button type="button" class="btn btn-lg btn-block btn-primary shadow-none" @click="showDeliveryModal=false">
              Confirmer
            </button>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
  
  <!-- <base-modal :id="id" :show="showDeliveryModal" @close="showDeliveryModal=false">
  </base-modal> -->
</template>

<script>
import { useRestaurant } from '@/stores/restaurant'
import { mapWritableState } from 'pinia'
import { useGeolocation } from '@vueuse/core'

// import BaseModal from '@/layouts/BaseModal.vue'

export default {
  name: 'DeliveryModal',
  // components: { BaseModal },
  props: {
    id: {
      type: String
    }
  },
  setup() {
    const { locatedAt } = useGeolocation()
    var store = useRestaurant()
    return {
      locatedAt,
      location,
      store
    }
  },
  data: () => ({
    coordinates: null,
    deliveryOption: {
      type: 'Click & collect'
    }
  }),
  computed: {
    ...mapWritableState(useRestaurant, ['showDeliveryModal'])
  },
  // beforeMount() {
  //   this.getLocation()
  // },
  // methods: {
  //   async getLocation() {
  //     try {
  //       this.coordinates = await this.$getLocation()
  //     } catch(error) {
  //       console.log(error)
  //     }
  //   },
  // }
}
</script>
