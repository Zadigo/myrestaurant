<template>
  <div id="sidebar" class="p-8 space-y-2 sticky z-50 top-0 left-0 h-full w-full shadow-sm overflow-hidden dark:text-neutral-200 flex bg-white">
    <ul class="space-y-4 my-10">
      <li v-for="link in links" :key="link.name" class="dark:bg-brand-900/20 p-5 rounded-lg cursor-pointer hover:scale-105 transition-all font-bold uppercase">
        <nuxt-link :to="link.url" class="flex items-center gap-4">
          <icon :name="link.icon" />
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const links = [
  { name: 'Notre carte', url: '/restaurant', icon: 'i-lucide-menu' },
  { name: 'Boissons', url: '/restaurant/novelties', icon: 'i-lucide-tea' },
  { name: 'Desserts', url: '/restaurant/payment', icon: 'i-lucide-cake' },
]
</script>

<style scoped>
.router-link-exact-active {
  font-weight: var(--font-weight-bold);
}
</style>
