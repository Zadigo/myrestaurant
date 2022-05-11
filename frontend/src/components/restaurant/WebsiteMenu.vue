<template>
  <div ref="link" :class="{ show: store.showWebsiteMenu }" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Restaurant</h5>
      <button type="button" class="btn-close text-reset" aria-label="Close" @click="store.showWebsiteMenu=false" />
    </div>

    <div class="offcanvas-body">
      <ul class="nav nav-pills nav-fill flex-column">
        <li class="nav-item">
          <router-link :to="{ name: 'welcome_view' }" class="nav-link">
            Votre compte
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'welcome_view' }" class="nav-link">
            Historique de commandes
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'welcome_view' }" class="nav-link">
            FAQ
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Deconnexion</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRestaurant } from "@/store/restaurant"

export default {
  name: 'WebsiteMenu',
  setup() {
    var store = useRestaurant()
    return {
      store
    }
  },
  watch: {
    'store.showWebsiteMenu' (newValue) {
      if (newValue) {
        this.$refs.link.style.visibility = 'visible'
      } else {
        this.$refs.link.style.visibility = 'hidden'
      }
    }
  }
}
</script>
