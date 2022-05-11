<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link :to="{ name: 'welcome_view' }" class="navbar-brand">
        <img src="http://via.placeholder.com/100x100" width="30" height="30" class="d-inline-block align-top" alt="Company">
        Restaurant
      </router-link>

      <div id="navbar-nav" class="collapse navbar-collapse">
        <router-link :to="{ name: 'welcome_view' }" class="nav-link">
          Home
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BaseNavbar'  
}
</script>

<style scoped>
.navbar {
  z-index: 1000;
}
</style>
