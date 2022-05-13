<template>
  <section id="restaurant">
    <!-- Content  -->
    <router-view v-slot="{ Component }">
      <transition name="opacity-transition" mode="in-out">
        <component :key="$route.name" :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script>
export default {
  name: 'GenericSite'
}
</script>
