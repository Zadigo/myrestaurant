<template>
  <section id="welcome" class="space-y-4">
    <!-- <base-breadcrumbs current-page="Welcome" /> -->

    <nuxt-card>
      <h1 class="text-uppercase font-bold text-4xl">Notre carte</h1>
      <p class="font-light">Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !</p>
    </nuxt-card>

    <div class="grid grid-cols-3">
      <nuxt-card v-for="link in welcomeLinks" :key="link.to">
        <nuxt-link :to="link.to">
          <nuxt-img :alt="link.text" src="/burger1.jpg" class="rounded-lg" />
          <p class="font-medium">{{ link.text }}</p>
        </nuxt-link>
      </nuxt-card>
    </div>
  </section>
</template>

<script lang="ts" setup>
const welcomeLinks = [
  {
    "text": "Menus",
    "to": "/restaurant/menus"
  }
]
</script>
