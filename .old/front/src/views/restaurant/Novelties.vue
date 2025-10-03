<template>
  <section id="novelties">
    
    <div class="container">
      <div class="row">

         <div class="col-12 py-5">
          <p class="text-muted">Filter by</p>
          <!-- <v-chip class="mr-2" @click="onlyHotDrinks=true">
            Hot drinks
          </v-chip>

          <v-chip class="mr-2" @click="onlyHotDrinks=false">
            Cold drinks
          </v-chip> -->
        </div>

        <div v-for="novelty in novelties"  :key="novelty.id" class="col-3">
          <!-- title="" img-src="" img-alt="" img-top tag="" -->

          <v-card :to="{ name: 'product_details', params: { slug: drink.slug } }">
            <v-card-title>
              <p class="m-0">{{ novelty.name }}</p>
            </v-card-title>
            
            <v-img :src="novelty.image|imageUrl"></v-img>
          </v-card>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Novelties',
  computed: {
    ...mapGetters(['novelties'])
  }
}
</script>
