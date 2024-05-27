<template>
  <div class="row">
    <div v-for="item in store.availableMenus" :key="item" class="col-6 g-2">
      <a href class="text-dark" @click.prevent="showProductDetails(item)">
        <div :aria-label="item.name" class="card shadow-sm hoverable">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="'/burger3.jpg'" :alt="item.name" class="img-fluid rounded-start">
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
</template>

<script>
import { client } from 'src/plugins/axios';
import { useRestaurant } from 'src/stores/restaurant'
import { useUtilities } from 'src/composables/utils'

export default {
  name: 'ListMenuDetails',
  async setup() {
    var { truncate } = useUtilities()
    var store = useRestaurant()

    async function getMenus() {
      try {
        const response = await client.get('/inventory/menus')
        store.$patch((state) => {
          state.availableMenus = response.data
        })
      } catch(error) {
        console.log(error)
      }
    }
    await getMenus()

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
    showProductDetails(item) {
      this.store.$patch((state) => {
        state.currentProductDetails = item
        state.showDetailsModal = true
      })
    }
  }
}
</script>
