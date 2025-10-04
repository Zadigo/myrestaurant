<template>
  <nuxt-modal v-model:open="show">
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

    <template #modal-footer>
      <input type="number">
    </template>
  </nuxt-modal>
</template>

<script lang="ts" setup>
import type { Nullable, RestaurantMenu } from '~/types'

const props = defineProps<{
  modelValue: boolean
  menu: Nullable<RestaurantMenu>
}>()

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()

const show = useVModel(props, 'modelValue', emit)
</script>
