<template>
  <ion-app>
    <sidemenu-layout />

    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { defineComponent } from 'vue'

import SidemenuLayout from '@/layouts/SidemenuLayout.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    SidemenuLayout
  }
})
</script>
