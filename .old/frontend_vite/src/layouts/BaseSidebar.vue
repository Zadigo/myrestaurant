<template>
  <div id="sidebar" class="d-flex flex-column flex-shrink-0 p-3 bg-white" style="width: 220px;">
    <ul class="nav nav-pills flex-column mb-auto">
      <li v-for="link in links" :key="link.name" class="nav-item">
        <router-link :to="{ name: link.name }" class="nav-link">
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseSidebar',
  data: () => ({
    links: [
      { name: 'welcome_view', text: 'Welcome' },
      { name: 'menus_view', text: 'Menus' }
    ]
  })
}
</script>

<style>
#sidebar {
  height: 100vh;
}
</style>
