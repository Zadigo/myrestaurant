<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="{ name: 'welcome_view' }">
          Home
        </router-link>
      </li>
      <slot />
      <li class="breadcrumb-item active" aria-current="page">
        {{ currentPage }}
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BaseBreadcrumbs',
  props: {
    currentPage: {
      type: String,
      required: true
    }
  }
}
</script>
