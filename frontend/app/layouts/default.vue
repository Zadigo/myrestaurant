<template>
  <section id="restaurant">
    <header>
      <base-navbar />
    </header>

    <section class="d-flex justify-content-between">
      <div class="left">
        <!-- Sidebar -->
        <keep-alive>
          <base-sidebar />
        </keep-alive>
      </div>

      <div class="right w-100 p-3">
        <slot />
      </div>
    </section>

    <!-- Modals -->
    <website-menu />
    <favorites-modal />

    <!-- Footer -->
    <keep-alive>
      <base-footer />
    </keep-alive>
  </section>
</template>
