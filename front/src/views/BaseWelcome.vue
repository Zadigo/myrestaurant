<template>

  <section id="restaurant-items">

    <div class="container">
      <div class="col-sm-12 col-md-9 offset-md-1">
        <div v-if="requiresHeading" role="heading">
          <slot name="header"></slot>
        </div>

        <!-- Jumbotron -->
        <base-jumbotron @addTocart="$emit('addToCart')" :requiresHeading="requiresHeading" :requiresActionCart="requiresActionCart">
        
        </base-jumbotron>

        <div class="col-sm-12 col-md-12">
          <div class="row">
            <router-view name="items" />
          </div>
        </div> 
      </div>
    </div>

  </section>
</template>

<script>
import BaseJumbotron from '../components/BaseJumbotron.vue'

export default {
  components: { BaseJumbotron },
  name: 'BaseWelcome',
  props: {
    requiresHeading: Boolean,
    requiresActionCart: Boolean
  }
}
</script>
