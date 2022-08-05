<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>

      <ion-title size="large">{{ pageTitle }}</ion-title>

      <ion-buttons slot="end">
        <ion-button @click="openSearch">
          <ion-icon name="search"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonMenuButton, IonButtons, IonButton, IonIcon, IonHeader, IonToolbar, IonTitle, menuController } from '@ionic/vue'
import { search } from 'ionicons/icons'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  setup () {
    return {
      search
    }
  },
  components: {
    IonMenuButton,
    IonButtons,
    IonButton,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonTitle
  },
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  },
  methods: {
    openSearch () {
      menuController.enable(true, 'first')
      menuController.open('first')
    }
  }
})
</script>
