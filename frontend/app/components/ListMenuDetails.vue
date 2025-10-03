<template>
  <div id="menus" class="col-8">
    <h4 class="fw-bold">Menus</h4>
    <div class="row">
      <div v-for="item in store.availableMenus" :key="item" class="col-5">
        <a href class="text-dark" @click.prevent="showProductDetails(item)">
          <div :aria-label="item.name" class="card shadow-sm hoverable my-1">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src="require('@/assets/burger3.jpg')" :alt="item.name" class="img-fluid rounded-start">
              </div>
  
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="mb-1">{{ truncate(item.description, 20) }}</p>
                  <p class="card-text fw-light fs-4">
                    <small class="text-muted">
                      {{ item.price_post_tax }}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<!-- <script>
import { useRestaurant } from '@/store/restaurant'
import { truncate } from '@/utils'

export default {
  name: 'ListMenuDetails',
  setup() {
    var store = useRestaurant()
    return {
      store,
      truncate
    }
  },
  created() {
    if (this.store.availableMenus.length === 0) {
      this.getMenus()
    }
  },
  methods: {
    async getMenus() {
      try {
        const response = await this.axios.get('/inventory/menus')
        this.store.$patch((state) => {
          state.availableMenus = response.data
        })
      } catch(error) {
        console.log(error)
      }
    },
    showProductDetails(item) {
      this.store.$patch((state) => {
        state.currentProductDetails = item
        state.showDetailsModal = true
      })
    }
  }
}
</script> -->
