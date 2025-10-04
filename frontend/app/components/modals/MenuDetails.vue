<template>
  <nuxt-modal v-model:open="show">
    <template #title>
      {{ restaurantMenu ? restaurantMenu.name : 'Détails du menu' }}
    </template>

    <template #body>
      <img v-if="restaurantMenu" src="/burger1.jpg" :alt="restaurantMenu.name" class="rounded-lg">

      <div v-if="restaurantMenu" class="my-5">
        <h3 class="font-bold">{{ restaurantMenu.name }}</h3>
        <p>{{ restaurantMenu.description }}</p>

        <custom-options :custom-options="restaurantMenu.main_product.custom_options" />

        <div id="doneness" class="my-4">
          <div v-if="restaurantMenu.main_product.doneness">
            <p class="font-bold m-0">Cuisson du {{ restaurantMenu.main_product.doneness.meat.name }}</p>
            <p class="text-muted mb-4">Obligatoire</p>
            <nuxt-radio-group :items="meatDoneness" />
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <!-- <div class="row">
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
            </div> -->
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <input type="number">
    </template>
  </nuxt-modal>
</template>

<script lang="ts" setup>
import type { Nullable, RestaurantMenu } from '~/types'
import { meatDoneness } from '~/data/constants'

const props = defineProps<{
  modelValue: boolean
  restaurantMenu: Nullable<RestaurantMenu>
}>()

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()

const show = useVModel(props, 'modelValue', emit)
</script>
