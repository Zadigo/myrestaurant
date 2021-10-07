<template>
  <div class="row">
    <div v-for="(section, index) in sections" :key="index" class="col-sm-12 col-md-4">
      <v-card :to="{ name: 'restaurant_menus', params: { slug: section.slug } }">
        <v-card-title>
          <p class="h4 m-0">{{ section.name }}</p>
        </v-card-title>
        
        <v-img :src="section.image"></v-img>
      </v-card> 
    </div>
  </div>
</template>

<script>
import restraurantMenus from '../data/restaurantmenus.json'

export default {
  name: 'Restaurant',

  data () {
    return {
      sections: restraurantMenus
    }
  }
}
</script>
