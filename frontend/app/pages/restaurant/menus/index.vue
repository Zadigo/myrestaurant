<template>
  <section id="menus">
    <!-- Heading -->
    <div class="text-left p-5 ps-0 position-relative">
      <div class="row">
        <div class="col-4 position-relative">
          <img :src="require('@/assets/burger1.jpg')" alt="Menus illustration" class="img-fluid rounded-1 shadow">
          <button type="button" class="btn btn-sm btn-danger position-absolute top-0 m-3 shadow-none" style="left:65%;">
            heart
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
  
            <button type="button" class="btn btn-md btn-outline-danger" @click="store.showDeliveryModal=true">
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
    <section id="content" class="mt-5">
      <div class="container-fluid">
        <div class="row">
          <!-- <div class="col-12">
            <h2 class="fs-3 mb-3">Big Formule - Hamburgé, Fernandines, Breuvage et Dessert</h2>
          </div> -->
          
          <async-list-menu-details />

          <div class="col-4">
            <div class="card shadow-sm">
              <div class="card-body text-center">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" size="3x" />
                <p class="text-muted py-3 fs-5 fw-light">Votre panier est vide</p>
                <button type="button" class="btn btn-block btn-primary">Finaliser la commande</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modals -->
    <details-modal :id="'details-modal'" :show="store.showDetailsModal" @close="store.toggleModal" />
    <delivery-modal :id="'details-modal'" :show="store.showDeliveryModal" />
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.nav-pills .nav-link-rounded {
  border-radius: 10rem;
}
</style>
