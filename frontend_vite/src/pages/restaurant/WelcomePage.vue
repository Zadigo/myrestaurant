<template>
  <section id="welcome">
    <base-breadcrumbs current-page="Welcome" />

    <h1 class="text-uppercase fw-bold">Notre carte</h1>
    <p class="fw-light">Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !</p>
    
    <div class="row mt-5">
      <div v-for="link in welcomeLinks" :key="link.name" class="col-3 my-1">
        <div class="card shadow-sm">
          <router-link :to="{ name: link.name }">
            <img :alt="link.text" :src="'/burger3.jpg'" class="card-img-top">

            <div class="card-body">
              {{ link.text }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseBreadcrumbs from 'src/layouts/BaseBreadcrumbs.vue'
import welcomeLinks from 'src/data/welcome.json'

export default {
  name: 'WelcomePage',
  components: {
    BaseBreadcrumbs
  },
  setup() {
    return {
      welcomeLinks
    }
  }
}
</script>
