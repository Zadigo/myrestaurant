<template>
  <section id="welcome">
    <base-breadcrumbs />

    <h1 class="text-uppercase fw-bold">Notre carte</h1>
    <p>Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !</p>
    
    <div class="row mt-5">
      <div v-for="i in 6" :key="i" class="col-3 my-1">
        <div class="card shadow-sm rounded-0">
          <router-link :to="{ name: 'menus_view' }">
            <img :alt="i" class="card-img-top" src="http://via.placeholder.com/400x400">
            <div class="card-body">
              Some card {{ i }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseBreadcrumbs from '@/layouts/BaseBreadcrumbs.vue'

export default {
  name: 'WelcomeView',
  components: { BaseBreadcrumbs },
}
</script>
