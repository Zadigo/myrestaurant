<template>
  <section class="restaurant-menus">

    <div v-for="(item, index) in items" :key="index" class="col-sm-12 col-md-4">
      <v-card :to="{ name: 'restaurant_menu', params: { slug: $route.params.slug, name: item.slug } }">
        <v-card-title>{{ item.lead }}</v-card-title>
        <v-img :src="item.image"></v-img>
      </v-card>
      
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'RestaurantMenus',

  computed: {
    ...mapState({
      items: (state) => { return state.inventoryModule.menus }
    })
  }
}
</script>
