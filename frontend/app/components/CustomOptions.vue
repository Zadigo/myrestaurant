<template>
  <div v-if="customOptions.length > 0" id="custom-options">
    <!-- Custom Options -->
    <div v-for="customOption in customOptions" :key="customOption.custom_name" @click="selectOption(customOption)">
      <div class="my-4 rounded-lg bg-slate-100 p-5 cursor-pointer">
        {{ customOption.custom_name }}
      </div>

      <!-- Categories -->
      <custom-option-categories v-if="isSelected" :categories="customOption.categories" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Nullable, RestaurantMenuCustomOption } from '~/types';

defineProps<{
  customOptions: RestaurantMenuCustomOption[]
}>()

const selectedCustomOption = ref<Nullable<RestaurantMenuCustomOption>>(null)

const isSelected = computed(() => {
  return isDefined(selectedCustomOption)
})

function selectOption(customOption: RestaurantMenuCustomOption) {
  selectedCustomOption.value = customOption
}
</script>
