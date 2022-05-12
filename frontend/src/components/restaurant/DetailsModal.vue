<template>
  <base-modal :show="show" dialog-classes="modal-dialog-scrollable">
    <template #modal-title>
      RECETTE LOCALE - Le Barnabé
    </template>

    <!-- 1200x600 -->
    <img :src="require('@/assets/burger2.jpg')" :alt="currentProductDetails.name" class="img-fluid">
    
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">

          <h3 class="my-3">
            {{ currentProductDetails.name }}
          </h3>

          <p>
            {{ currentProductDetails.description }}
          </p>

          <div class="row">
            <div class="col-12 my-1">
              <p class="fw-bold">Cuisson du boeuf</p>
              <div v-for="option in cookingOptions" :key="option" class="form-check">
                <input v-model="selectedOptions.cooking" :value="option" class="form-check-input" type="radio" name="cooking" id="cooking">
                <label class="form-check-label" for="cooking">
                  {{ option }}
                </label>
              </div>
            </div>

            <div class="col-12 my-1">
              <p class="fw-bold m-0 mt-2 mb-1">On enlève quelque chose ?</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
            </div>

            <div class="col-12 my-1">
              <p class="fw-bold m-0 mt-2 mb-1">On rajoute autre chose ?</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                  Fourme d'Ambert
                </label>
              </div>
            </div>
            
            <div class="col-12 my-1">
              <p class="fw-bold m-0 mt-2 mb-1">Votre Breuvage</p>
              <div v-for="drink in currentProductDetails.drinks" :key="drink.id" class="form-check">
                <input v-model.number="selectedOptions.drink" :value="drink.id" class="form-check-input" type="radio" name="drinks" id="drinks">
                <label class="form-check-label" for="drinks">
                  {{ drink.name }} - {{ drink.flavor }}
                </label>
              </div>
            </div>

             <div class="col-12 my-1">
              <p class="fw-bold m-0 mt-2 mb-1">Votre dessert</p>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="dessert" id="dessert">
                <label class="form-check-label" for="dessert">
                  Fondant
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #modal-footer>
      <input type="number">
    </template>
  </base-modal>
</template>

<script>
import { useRestaurant } from '@/store/restaurant'
import { storeToRefs } from 'pinia'
import {} from '@/utils'

import BaseModal from '@/layouts/BaseModal'

export default {
  name: 'DetailsModal',
  setup() {
    var store = useRestaurant()
    var { currentProductDetails } = storeToRefs(store)
    return {
      store,
      currentProductDetails
    }
  },
  props: {
    show: {
      type: Boolean
    }
  },
  components: {
    BaseModal
  },
  data: () => ({
    selectedOptions: {
      drink: null,
      cooking: null,
      requires_cooking: false,
      additional_products: [],
      additional_drinks: [],
      dessert: null
    },
    cookingOptions: [
      'Rare',
      'Medium',
      'Well done'
    ]
  }),
  computed: {
    canBeSubmitted() {
      // Check that all required fields
      // are not null
      return false
    }
  },
  created() {
    if (this.store.availableDrinks.length == 0) {
      this.getDrinks()
    } else {
      // Get the drinks from the session or the localstorage
    }
  },
  methods: {
    async getDrinks() {
      try {
        var response = await this.axios.get('/inventory/drinks')
        this.store.$patch({
          drinks: response.data
        })
      } catch(error) {
        console.error(error)
      }
    }
  }
}
</script>
