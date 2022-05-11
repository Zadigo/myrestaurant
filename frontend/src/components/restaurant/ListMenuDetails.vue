<template>
  <div class="row">
    <div v-for="i in 15" :key="i" class="col-4">
      <div class="card shadow-sm my-1" @click="store.toggleModal">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="http://via.placeholder.com/400x400" class="img-fluid rounded-start" alt="...">
          </div>

          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                <small class="text-muted">200€</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRestaurant } from '@/store/restaurant'

export default {
  name: 'ListMenuDetails',
  setup() {
    var store = useRestaurant()
    return {
      store
    }
  },
  created() {
    this.getMenus()
  },
  methods: {
    async getMenus() {
      try {
        var response = await this.axios.get('https://jsonplaceholder.typicode.com/todos')
        this.store.$patch((state) => {
          state.restaurantMenus = response.data
        })
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>
