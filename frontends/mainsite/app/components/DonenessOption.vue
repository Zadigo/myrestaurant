<template>
  <div v-if="restaurantMenu.main_product.doneness" id="doneness" class="my-4">
    <p class="font-bold m-0">Cuisson du {{ restaurantMenu.main_product.doneness.meat.name }}</p>
    <p class="text-muted mb-4">Obligatoire</p>
    <nuxt-radio-group v-model="newCartItem.menu_options.doneness" :items="meatDoneness" :default-value="meatDoneness[0]" />
  </div>
</template>

<script lang="ts" setup>
import { meatDoneness } from '~/data/constants';
import type { MeatDoneness, RestaurantMenu } from '~/types'

defineProps<{ restaurantMenu: RestaurantMenu }>()

const { newCartItem } = useCart<MeatDoneness>()
</script>
