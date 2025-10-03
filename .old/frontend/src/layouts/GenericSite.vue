<template>
  <section id="restaurant">
    <!-- Content  -->
    <router-view v-slot="{ Component }">
      <transition name="opacity" mode="in-out">
        <component :is="Component" :key="$route.name" />
      </transition>
    </router-view>
  </section>
</template>

<script>
export default {
  name: 'GenericSite'
}
</script>
