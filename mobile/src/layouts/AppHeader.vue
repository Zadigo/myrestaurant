<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>

      <ion-title>{{ pageTitle }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonMenuButton, IonButtons, IonHeader, IonToolbar, IonTitle } from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    IonMenuButton,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle
  },
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  }
})
</script>
