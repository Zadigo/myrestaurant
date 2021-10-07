<template>
  <div id="app">
    <v-app>
      <router-view :key="$route.name"></router-view>      

      <!-- <base-sidebar>
        <template>
          
          <transition name="general-transition">
          </transition>
          
        </template>
      </base-sidebar> -->

    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },

  data() {
    return {
      drawer: true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
@import url('./assets/style.css');
@import url('./assets/sidebar.css');

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
