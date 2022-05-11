<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link :to="{ name: 'welcome_view' }" class="navbar-brand">
        <img src="http://via.placeholder.com/100x100" width="30" height="30" class="d-inline-block align-top" alt="Company">
        Restaurant
      </router-link>

      <form class="d-flex" @submit.prevent>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>

      <div id="navbar-nav" class="collapse navbar-collapse">
        <router-link :to="{ name: 'welcome_view' }" class="nav-link">
          Home
        </router-link>
        <a href class="nav-link" @click.prevent="store.showFavoritesModal=true">
          Favoris
        </a>
        <a href class="nav-link" @click.prevent="store.showWebsiteMenu=true">
          Menu
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRestaurant } from "@/store/restaurant"

export default {
  name: 'BaseNavbar',
  setup() {
    var store = useRestaurant()
    return {
      store
    }
  }
}
</script>

<style scoped>
.navbar {
  z-index: 1000;
}
</style>
