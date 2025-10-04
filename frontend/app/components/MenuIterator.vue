<template>
  <div>
    <div class="font-bold text-2xl mb-2">
      Menu
    </div>

    <div class="grid grid-cols-6 gap-2">
      <slot name="items" :items="availableMenus">
        <article v-for="item in availableMenus" :key="item.id">
          <slot name="item" :item="item">
            <a href="#" @click.prevent="emit('select', item)">
              <nuxt-card :aria-label="item.name" class="shadow-sm my-1">
                <img src="/burger1.jpg" :alt="item.name" class="rounded-lg">

                <div>
                  <h5 class="font-bold text-2xl mt-5">{{ item.name }}</h5>
                  <p class="mb-1">{{ item.description }}</p>
                  <p class="font-light">
                    <small class="text-muted">
                      {{ item.price_post_tax }}€
                    </small>
                  </p>
                </div>
              </nuxt-card>
            </a>
          </slot>
        </article>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { RestaurantMenu } from '~/types'
import { availableMenus } from '~/data/__fixtures__/index'

// defineProps<{ availableMenus: Array<RestaurantMenu> }>()
const emit =defineEmits<{ 'select': [item: RestaurantMenu] }>()
</script>
