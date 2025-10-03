<template>
  <section id="menus">
    <!-- Heading -->
    <div class="text-left p-5 ps-0 position-relative">
      <div class="row">
        <div class="col-4 position-relative">
          <img :src="'/burger1.jpg'" alt="Menus illustration" class="img-fluid rounded-1 shadow-sm">
          <button type="button" class="btn btn-sm btn-danger position-absolute top-0 m-3 shadow-none" style="left:76%;">
            <font-awesome-icon :icon="['fas', 'heart']" />
          </button>
        </div>

        <div class="col-8">
          <base-breadcrumbs current-page="Notre carte" />
          <h1 class="display-6 fw-bold">Notre carte</h1>
          <p class="m-0 text-muted">25 - 45 min · Burgers · Halal</p>

          <div class="btn-group my-3 shadow-none">
            <button type="button" class="btn btn-md btn-outline-info">
              Information
            </button>
  
            <button type="button" class="btn btn-md btn-outline-danger" @click="restaurantStore.showDeliveryModal=true">
              Livraison
            </button>
          </div>
        
          <div class="d-flex justify-content-start">
            <span class="me-2"><font-awesome-icon :icon="['fas', 'gift']" /></span>
            <div class="text-left">
              <p class="m-0 fw-normal text-info">Gagnez des récompenses</p>
              <p class="m-0 fw-light">15 € min. de commande • Passez 4 commandes et obtenez 8 €</p>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="quick-menu w-100 border-top border-bottom py-4">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a href class="nav-link nav-link-rounded active" @click.prevent="goToSection">Menu</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link nav-link-rounded" @click.prevent="goToSection">Le burger braisé</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link nav-link-rounded" @click.prevent="goToSection">Starters</a>
              </li>
              <li class="nav-item">
                <a href class="nav-link nav-link-rounded" @click.prevent="goToSection">Desserts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    <!-- Content -->
    <section id="content" class="mt-3">
      <div class="container-fluid">
        <div class="row">
          <!-- <div class="col-12">
            <h2 class="fs-3 mb-3">Big Formule - Hamburgé, Fernandines, Breuvage et Dessert</h2>
          </div> -->
          
          <div id="menus" class="col-8">
            <h4 class="fw-bold">Menus</h4>

            <suspense>
              <template #default>
                <async-list-menu-details />
              </template>

              <template #fallback>
                <base-card-loading />
              </template>
            </suspense>
          </div>


          <div class="col-4">
            <div class="card shadow-sm">
              <div class="card-body text-center">
                <template v-if="cartStore.hasProducts">
                  <div v-for="item in products" :key="item.id" class="card border shadow-none mb-1">
                    <div class="card-body">
                      {{ item.product.name }}
                    </div>
                  </div>
                </template>
                <p v-else class="text-muted py-3 fs-5 fw-light">
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" size="3x" />
                  Votre panier est vide
                </p>
            
                <router-link :to="{ name: 'payment' }" class="btn btn-block btn-primary btn-rounded shadow-none btn-lg mt-3">
                  Finaliser la commande
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modals -->
    <details-modal id="details-modal" v-model="restaurantStore.showDetailsModal" />
    <delivery-modal id="delivery-modal" :show="restaurantStore.showDeliveryModal" />
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { useScroll } from '@vueuse/core'
import { useRestaurant } from '@/stores/restaurant'

import BaseCardLoading from 'src/layouts/BaseCardLoading.vue'
import BaseBreadcrumbs from 'src/layouts/BaseBreadcrumbs.vue'
import DetailsModal from 'src/components/restaurant/DetailsModal.vue'
import DeliveryModal from 'src/components/restaurant/DeliveryModal.vue'
import { useCart } from '@/stores/cart'
import { storeToRefs } from 'pinia'

export default {
  name: 'MenusPage',
  components: {
    BaseBreadcrumbs,
    DetailsModal,
    DeliveryModal,
    BaseCardLoading,
    asyncListMenuDetails: defineAsyncComponent({
      loader: () => import('src/components/restaurant/ListMenuDetails.vue'),
    })
  },
  setup() {
    const restaurantStore = useRestaurant()
    const cartStore = useCart()
    const { products } = storeToRefs(cartStore)
    const { y } = useScroll()
    return {
      products,
      cartStore,
      restaurantStore,
      scrorllY: y
    }
  },
  methods: {
    goToSection() {
      document.querySelector('#menus').scrollIntoView()
    }
  }
}
</script>

<style scoped>
.nav-pills .nav-link-rounded {
  border-radius: 10rem;
}
</style>
