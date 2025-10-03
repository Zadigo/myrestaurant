<template>
  <section id="drinks">
    
    <div class="container">
      <div class="row">

         <div class="col-12 py-5">
          <p class="text-muted">{{ $t('Filter by') }}</p>
          <v-chip class="mr-2" @click="onlyHotDrinks=true">
            {{ $t('Hot drinks') }}
          </v-chip>

          <v-chip class="mr-2" @click="onlyHotDrinks=false">
            {{ $t('Cold drinks') }}
          </v-chip>
        </div>

        <div v-for="(drink, i) in drinks"  :key="i" class="col-3">
          <!-- title="" img-src="" img-alt="" img-top tag="" -->

          <v-card :to="{ name: 'product_details', params: { slug: drink.slug } }">
            <v-card-title>
              <p class="m-0">{{ drink.name }}</p>
              <p class="text-muted fs-6 m-0">{{ drink.flavor }}</p>
            </v-card-title>
            <v-img :src="drink.image|imageUrl"></v-img>
          </v-card>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Drinks',
  data() {
    return {
      onlyHotDrinks: false
    }
  },
  computed: {
    ...mapGetters(['hotDrinks', 'coldDrinks']),
    
    drinks() {
      if (this.onlyHotDrinks) {
        return this.hotDrinks
      } else {
        return this.coldDrinks
      }
    }
  },
  beforeMount() {
    var drinks = this.$session.get('drinks')
    if (drinks.length > 0) {
      this.$store.commit('setDrinks', drinks)
    } else {
      // Make a call to get the drinks
    }
  }
}
</script>
