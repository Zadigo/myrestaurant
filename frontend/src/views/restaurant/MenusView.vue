<template>
  <section id="menus">
    <!-- Heading -->
    <div class="text-left p-5 ps-0 position-relative">
      <div class="row">
        <div class="col-4 position-relative">
          <img :src="require('@/assets/burger1.jpg')" alt="Menus illustration" class="img-fluid rounded-1 shadow">
          <button class="btn btn-sm btn-danger position-absolute top-0 m-3 shadow-none" style="left:65%;">
            heart
          </button>
        </div>

        <div class="col-8">
          <base-breadcrumbs current-page="Notre carte" />
          <h1 class="display-6 fw-bold">Notre carte</h1>
          <p class="m-0 text-muted">25 - 45 min · Burgers · Halal</p>

          <div class="btn-group my-3 shadow-none">
            <button class="btn btn-md btn-outline-info">
              Information
            </button>
  
            <button class="btn btn-md btn-outline-danger" @click="store.showDeliveryModal=true">
              Livraison
            </button>
          </div>
        
          <div class="d-flex justify-content-left">
            <span class="me-2">Icon</span>
            <div>
              <p class="m-0 fw-normal text-info">Gagnez des récompenses</p>
              <p class="m-0 fw-light">15 € min. de commande • Passez 4 commandes et obtenez 8 €</p>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="quick-menu w-100 d-flex justify-content-around p-4 mt-5 border-top border-bottom">
            <button class="btn btn-md btn-primary btn-rounded" @click="goToSection()">Menu</button>
            <button class="btn btn-md btn-primary btn-rounded">Le burger braisé</button>
            <button class="btn btn-md btn-primary btn-rounded">Starters</button>
            <button class="btn btn-md btn-primary btn-rounded">Desserts</button>
          </div>
        </div>
      </div>

    </div>

    <!-- Content -->
    <section id="content" class="mt-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <h2 class="fs-3 mb-3">Big Formule - Hamburgé, Fernandines, Breuvage et Dessert</h2>
          </div>
          
          <async-list-menu-details />
        </div>
      </div>
    </section>

    <!-- Modals -->
    <details-modal :show="store.showDetailsModal" @close-modal="store.toggleModal" />
    <delivery-modal :show="store.showDeliveryModal" />
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { useRestaurant } from '@/store/restaurant'
import BaseBreadcrumbs from '@/layouts/BaseBreadcrumbs.vue'
import DetailsModal from '@/components/restaurant/DetailsModal.vue'
import BaseCardLoadingVue from '@/layouts/BaseCardLoading.vue'
import DeliveryModal from '@/components/restaurant/DeliveryModal.vue'

export default {
  name: 'MenusView',
  setup() {
    var store = useRestaurant()
    return {
      store
    }
  },
  components: {
    BaseBreadcrumbs,
    DetailsModal,
    DeliveryModal,
    asyncListMenuDetails: defineAsyncComponent({
        loader: () => import("@/components/restaurant/ListMenuDetails.vue"),
        loadingComponent: null,
        delay: 200,
        errorComponent: BaseCardLoadingVue,
        timeout: 300
    })
  },
  methods: {
    goToSection() {
      document.querySelector('#menus').scrollIntoView()
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
