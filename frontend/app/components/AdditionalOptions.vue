<template>
  <div v-if="additionalOptions.length > 0" id="custom-options">
    <!-- Custom Options -->
    <div v-for="customOption in additionalOptions" :key="customOption.name">
      <h4 class="font-bold">
        {{ customOption.name }}
      </h4>

      <!-- Choices -->
      <nuxt-radio-group v-if="customOption.single_choice" v-model="newCartItem.menu_options[customOption.name]" :items="customOption.choices" label-key="name" />
      <template v-else>
        <div v-for="choice in customOption.choices" :key="choice.name" class="my-2">
          <nuxt-checkbox v-model="newCartItem.menu_options.custom_options" :label="choice.name" />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { RestaurantMenuAdditionalOptions } from '~/types';

defineProps<{
  additionalOptions: RestaurantMenuAdditionalOptions[]
}>()

const { newCartItem } = useCart<RestaurantMenuAdditionalOptions['name']>()
</script>
