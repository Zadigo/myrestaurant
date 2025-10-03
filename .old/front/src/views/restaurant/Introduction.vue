<template>
  <div class="row">

    <div v-for="(selection, index) in introSelections" :key="index" class="col-sm-12 col-md-4">
      <v-card :to="{ name: 'restaurant_menus', params: { slug: selection.slug } }">
        <v-card-title>
          <p class="h4 m-0">{{ selection.name }}</p>
        </v-card-title>
        
        <v-img :src="selection.image"></v-img>
      </v-card> 
    </div>
  
  </div>
</template>

<script>
import introchoices from '@/data/intro-choices.json'

export default {
  name: 'Introduction',
  data() {
    return {
      introSelections: introchoices
    }
  }
}
</script>
