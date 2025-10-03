<template>
  <ion-page>
    <app-header page-title="Products" />

    <ion-content :fullscreen="true" :scroll-events="true" @ion-scroll-end="getProducts">
      <div id="products">
        <ion-card v-for="i in 30" :key="i">
          <ion-card-content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reiciendis 
            neque dignissimos exercitationem atque odit vel esse excepturi. Eos qui quo sit 
            quasi minima nulla cumque aliquam provident distinctio omnis?
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue'
import { IonPage, IonContent, IonCard, IonCardContent } from '@ionic/vue'

import AppHeader from '../layouts/AppHeader.vue'

export default defineComponent({
  name: 'ProductsPage',
  components: { IonContent, IonPage, IonCard, IonCardContent, AppHeader },
  data () {
    return {
      products: []
    }
  },
  methods: {
    async getProducts () {
      try {
        const response = await this.$http.get('https://jsonplaceholder.typicode.com/todos')
        this.products = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>
