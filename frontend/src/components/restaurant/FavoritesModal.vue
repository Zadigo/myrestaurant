<template>
  <base-offcanvas :show="showFavoritesModal" @close-offcanvas="showFavoritesModal=false">
    <p class="fw-bold">10 favoris disponibles</p>
    <div class="card shadow-none">
      <img src="http://via.placeholder.com/800x300" alt="" class="img-card-top img-fluid">
      <div class="card-body px-0">
        <h5 class="card-title">Le Braisé</h5>
        <p class="card-text mb-1">4.1 Burgers</p>
        <p class="card-text text-muted m-0">à 2.9km livraison offerte</p>
      </div>
    </div>
  </base-offcanvas>
</template>

<script>
import { useRestaurant } from "@/store/restaurant"
import { mapWritableState } from "pinia"
import BaseOffcanvas from '@/layouts/BaseOffcanvas.vue'

export default {
  components: { BaseOffcanvas },
  name: 'FavoritesModal',
  computed: {
    ...mapWritableState(useRestaurant, ['showFavoritesModal'])
  }
}
</script>
