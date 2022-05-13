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
          <transition name="opacity-transition" mode="in-out">
            <component :key="$route.name" :is="Component" />
          </transition>
        </router-view>
      </div>
    </section>

    <!-- Modals -->
    <website-menu />
    <favorites-modal />

    <!-- Footer -->
    <keep-alive>
      <base-footer />
    </keep-alive>
  </section>
</template>

<script>
import BaseFooter from '@/layouts/BaseFooter.vue'
import BaseNavbar from '@/layouts/BaseNavbar.vue'
import BaseSidebar from '@/layouts/BaseSidebar.vue'
import WebsiteMenu from '@/components/restaurant/WebsiteMenu.vue'
import FavoritesModal from '@/components/restaurant/FavoritesModal.vue'

export default {
  name: 'App',
  components: {
    BaseFooter,
    BaseNavbar,
    BaseSidebar,
    FavoritesModal,
    WebsiteMenu,
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
  .opacity-transition-enter-active,
  .opacity-transition-leave-active {
    transition: all .3s ease;
  }
  .opacity-transition-enter-from,
  .opacity-transition-leave-to {
    opacity: 0;
  }
  .opacity-transition-enter-to,
  .opacity-transition-leave-from {
    opacity: 1;
  }
</style>
