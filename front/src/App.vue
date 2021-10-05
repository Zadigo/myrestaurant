<template>
  <div id="app">
    <v-app>

      <transition name="general-transition">
        <router-link :key="route.name"></router-link>      
      </transition>
    
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
@import url('./assets/style.css');

.general-transition-enter-active,
.general-transition-leave-active {
  transition: all .3s ease;
}

.general-transition-enter,
.general-transition-leave-to {
  opacity: 0;
}

.general-transition-leave,
.general-transition-enter-to {
  opacity: 1;
}
</style>
