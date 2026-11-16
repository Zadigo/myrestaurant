<template>
  <section id="welcome" class="space-y-4">
    <!-- <base-breadcrumbs current-page="Welcome" /> -->

    <u-card>
      <h1 class="text-uppercase font-bold text-4xl">Notre carte</h1>
      <p class="font-light">Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !</p>
    </u-card>

    <div class="grid grid-cols-3">
      <u-card v-for="link in welcomeLinks" :key="link.to">
        <nuxt-link :to="link.to">
          <div class="overflow-hidden rounded-lg ">
            <nuxt-img :alt="link.text" src="/burger1.jpg" class="hover:scale-105 transition-all duration-200 ease-in" />
          </div>
          <p class="font-bold mt-5">{{ link.text }}</p>
        </nuxt-link>
      </u-card>
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
