<template>
  <section id="restaurant">
    <header>
      <base-navbar />
    </header>

    <section class="d-flex justify-content-between">
      <div class="left">
        <!-- Sidebar -->
        <keep-alive>
          <base-sidebar />
        </keep-alive>
      </div>

      <div class="right w-100 p-3">
        <!-- Content  -->
        <router-view v-slot="{ Component }">
          <transition name="opacity" mode="out-in">
            <component :is="Component" :key="$route.name" />
          </transition>
        </router-view>
      </div>
    </section>

    <!-- Modals -->
    <website-menu />
    <favorites-modal />

    <!-- Footer -->
    <base-footer />
  </section>
</template>

<script>
import BaseFooter from '@/layouts/BaseFooter.vue'
import BaseNavbar from '@/layouts/BaseNavbar.vue'
import BaseSidebar from '@/layouts/BaseSidebar.vue'
import FavoritesModal from '@/components/restaurant/FavoritesModal.vue'
import WebsiteMenu from '@/components/restaurant/WebsiteMenu.vue'

export default {
  name: 'BaseSite',
  components: {
    BaseFooter,
    BaseNavbar,
    BaseSidebar,
    FavoritesModal,
    WebsiteMenu,
}
}
</script>
