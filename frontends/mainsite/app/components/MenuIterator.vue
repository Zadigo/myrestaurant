<template>
  <div>
    <div class="font-bold text-2xl mb-2">
      Menu
    </div>

    <div class="grid grid-cols-4 gap-2">
      <slot name="items" :items="data">
        <article v-for="item in data" :key="item.id">
          <slot name="item" :item="item">
            <nuxt-link href="#" @click.prevent="emit('select', item)">
              <u-card :aria-label="item.name">
                <nuxt-img src="/burger1.jpg" :alt="item.name" class="rounded-lg" />
  
                <div>
                  <h5 class="font-bold text-2xl mt-5">{{ item.name }}</h5>
                  <p class="mb-1 text-sm">{{ item.description }}</p>
                  <p class="font-light text-sm text-slate-400">
                    {{ item.price_post_tax }}€
                  </p>
                </div>
              </u-card>
            </nuxt-link>
          </slot>
        </article>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{ 'select': [item: RestaurantMenu] }>()
const { data } = useAsyncData('menus', async () => await $fetch('/api/menus', { method: 'GET' }), { default: () => []})
</script>
