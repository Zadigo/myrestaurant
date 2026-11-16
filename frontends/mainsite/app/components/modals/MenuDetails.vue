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
        <doneness-option :restaurant-menu="restaurantMenu" />
        <additional-options :additional-options="restaurantMenu.additional_options || []" />
      </div>

      <nuxt-button @click="add">
        Ajouter au panier
      </nuxt-button>
    </template>

    <template #footer>
      <input type="number">
    </template>
  </nuxt-modal>
</template>

<script lang="ts" setup>
import type { Nullable, RestaurantMenu } from '~/types';

const props = defineProps<{
  modelValue: boolean
  restaurantMenu: Nullable<RestaurantMenu>
}>()

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()

const show = useVModel(props, 'modelValue', emit)

const { add } = useCart()
</script>
