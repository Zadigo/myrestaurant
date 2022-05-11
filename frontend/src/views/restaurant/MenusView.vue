<template>
  <section id="menus">
    <!-- Heading -->
    <div class="text-center border-bottom">
      <base-breadcrumbs />
      
      <h1 class="display-4 fw-bold">Centered screenshot</h1>

      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Quickly design and customize responsive mobile-first sites with Bootstrap, 
          the world’s most popular front-end open source toolkit, featuring Sass 
          variables and mixins, responsive grid system, extensive prebuilt components, 
          and powerful JavaScript plugins.
        </p>
        
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
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
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { useRestaurant } from '@/store/restaurant'
import BaseBreadcrumbs from '@/layouts/BaseBreadcrumbs.vue'
import DetailsModal from '@/components/restaurant/DetailsModal.vue'
import BaseCardLoadingVue from '@/layouts/BaseCardLoading.vue'

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
    asyncListMenuDetails: defineAsyncComponent({
      loader: () => import('@/components/restaurant/ListMenuDetails.vue'),
      loadingComponent: null,
      delay: 30000,
      errorComponent: BaseCardLoadingVue,
      timeout: 300
    })
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
}
</style>
