<template>
  <section id="restaurant">
    <!-- <header>
      <base-navbar />
    </header> -->

    <div class="grid grid-cols-12 gap-2 h-screen">
      <div class="col-span-2 relative overflow-hidden">
        <base-sidebar />
      </div>

      <div class="col-span-10 p-3">
        <slot />
      </div>
    </div>

    <!-- Modals -->
    <!-- <website-menu />
    <favorites-modal /> -->

    <!-- Footer -->
    <!-- <keep-alive>
      <base-footer />
    </keep-alive> -->
  </section>
</template>

<script lang="ts" setup>
onMounted(() => {
  document.body.classList.add('bg-brand-50', 'dark:bg-brand-800' )
})

onUnmounted(() => {
  document.body.classList.remove('bg-brand-50', 'dark:bg-brand-800' )
})
</script>
