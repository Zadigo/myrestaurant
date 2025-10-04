<template>
  <div id="categories">
    <div v-for="category in categories" :key="category.name">
      <div class="flex justify-start items center">
        <nuxt-input />
        <p class="font-semibold">
          {{ category.name }}
        </p>
        <p class="font-semibold">
          {{ category.price_post_tax }}€
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { RestaurantMenuCustomOptionCategory } from '~/types';

defineProps<{
  categories: RestaurantMenuCustomOptionCategory[]
}>()
</script>
