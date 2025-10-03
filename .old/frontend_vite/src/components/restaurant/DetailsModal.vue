<template>
  <v-dialog :id="id" v-model="show" style="width: 1000px;" title="RECETTE LOCALE - Le Barnabé">
    <v-card>
      <!-- 1200x600 -->
      <img :src="'/burger2.jpg'" :alt="currentProductDetails.name" class="img-fluid">

      <v-card-text>
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
                    <input id="cooking" v-model="selectedOptions.cooking" :value="option" class="form-check-input" type="radio" name="cooking">
                    <label class="form-check-label" for="cooking">
                      {{ option }}
                    </label>
                  </div>
                </div>

                <div class="col-12 my-1">
                  <p class="fw-bold m-0 mt-2 mb-1">On enlève quelque chose ?</p>
                  <div class="form-check">
                    <input id="flexCheckChecked" class="form-check-input" type="checkbox" value="" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                      Checked checkbox
                    </label>
                  </div>
                </div>

                <div class="col-12 my-1">
                  <p class="fw-bold m-0 mt-2 mb-1">On rajoute autre chose ?</p>
                  <div class="form-check">
                    <input id="flexCheckChecked" class="form-check-input" type="checkbox" value="" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                      Fourme d'Ambert
                    </label>
                  </div>
                </div>
                
                <div class="col-12 my-1">
                  <p class="fw-bold m-0 mt-2 mb-1">Votre Breuvage</p>
                  <div v-for="drink in currentProductDetails.drinks" :key="drink.id" class="form-check">
                    <input id="drinks" v-model.number="selectedOptions.drink" :value="drink.id" class="form-check-input" type="radio" name="drinks">
                    <label class="form-check-label" for="drinks">
                      {{ drink.name }} - {{ drink.flavor }}
                    </label>
                  </div>
                </div>

                <div class="col-12 my-1">
                  <p class="fw-bold m-0 mt-2 mb-1">Votre dessert</p>
                  <div class="form-check">
                    <input id="dessert" class="form-check-input" type="radio" name="dessert">
                    <label class="form-check-label" for="dessert">
                      Fondant
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <v-text-field type="number" variant="outlined" />
        <button type="button" class="btn btn-primary btn-rounded" @click="handleAddToCart">
          Valider
        </button>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { useCart } from '@/stores/cart';
import { useRestaurant } from '@/stores/restaurant'
import { storeToRefs } from 'pinia'

export default {
  name: 'DetailsModal',
  components: {
  },
  props: {
    id: {
      type: String
    },
    modelValue: {
      type: Boolean
    }
  },
  emits: {
    close () {
      return true
    },
    'update:modelValue' () {
      return true
    }
  },
  setup() {
    var restaurantStore = useRestaurant()
    var { currentProductDetails } = storeToRefs(restaurantStore)

    var cartStore = useCart()
    var { products } = storeToRefs(cartStore)

    return {
      products,
      restaurantStore,
      currentProductDetails
    }
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
    },
    show: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit("update:modelValue", value)
      },
    }
  },
  // created() {
  //   if (this.store.availableDrinks.length == 0) {
  //     this.getDrinks()
  //   } else {
  //     // Get the drinks from the session or the localstorage
  //   }
  // },
  methods: {
    handleAddToCart () {
      this.show = false
      this.products.push({
        product: this.currentProductDetails
      })
    }
  //   async getDrinks() {
  //     try {
  //       var response = await this.axios.get('/inventory/drinks')
  //       this.store.$patch({
  //         availableDrinks: response.data
  //       })
  //     } catch(error) {
  //       console.error(error)
  //     }
  //   }
  }
}
</script>
