<template>
  <section id="restaurant">
    <header>
      <base-navbar />
    </header>
    
    <section class="d-flex justify-content-between">
      <div class="left">
        <!-- Sidebar -->
        <base-sidebar />
      </div>

      <div class="right w-100 p-3">
        <!-- Content  -->
        <router-view v-slot="{ Component }">
          <transition :key="$route.name">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </section>

    <!-- Modals -->
    <website-menu />
    <favorites-menu />

    <!-- Footer -->
    <base-footer />
  </section>
</template>

<script>
import BaseFooter from '@/layouts/BaseFooter.vue'
import BaseNavbar from '@/layouts/BaseNavbar.vue'
import BaseSidebar from '@/layouts/BaseSidebar.vue'
import WebsiteMenu from './components/restaurant/WebsiteMenu.vue'
import FavoritesMenu from './components/restaurant/FavoritesMenu.vue'

export default {
  name: 'App',
  components: {
    BaseFooter,
    BaseNavbar,
    BaseSidebar,
    WebsiteMenu,
    FavoritesMenu
}
}
</script>

<style>
  @import url('@/assets/style.css');

  .left {
    position: sticky;
    top: 0;
    left: 0;
  }
  .right {
    position: relative;
  }
</style>
