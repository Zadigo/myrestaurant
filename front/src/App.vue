<template>
  <div id="app">
    <v-app>
      <base-navbar />

      <transition name="general-transition">
        <router-view :key="$route.name" />      
      </transition>

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
  },

  // beforeMount() {
  //   var previouslySelectedLanguage = this.getItemFromLocalStorage('lang')
  //   if (!_.isUndefined(previouslySelectedLanguage)) {
  //     this.$i18.locale = previouslySelectedLanguage
  //   }
  // }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
@import url('./assets/style.css');
@import url('./assets/sidebar.css');

.general-transition-enter-active,
.general-transition-leave-active {
  transition: all .2s ease-out;
}

.general-transition-enter,
.general-transition-leave-to {
  opacity: 0;
  transform: translate(-5px);
}

.general-transition-leave,
.general-transition-enter-to {
  opacity: 1;
  transform: translate(0px);
}

.general-transition-move {
  transition: all .3s ease;
}
</style>
