<template>
  <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>
          <ion-icon name="mail" slot="start"></ion-icon>
          <ion-label>Inbox</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonMenu,
  IonTitle,
  IonToolbar,
  menuController
} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonIcon,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar
  },
  methods: {
    openFirst () {
      menuController.enable(true, 'first')
      menuController.open('first')
    },
    openEnd () {
      menuController.open('end')
    },
    openCustom () {
      menuController.enable(true, 'custom')
      menuController.open('custom')
    }
  }
})
</script>

<style>
.my-custom-menu {
  --width: 500px
}
</style>

