<template>
  <div ref="link" :class="{ show: show }" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Restaurant</h5>
      <button type="button" class="btn-close text-reset" aria-label="Close" @click="$emit('close-offcanvas')" />
    </div>

    <div class="offcanvas-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseOffcanvas',
  emits: ['close-offcanvas'],
  props: {
    show: {
      type: Boolean
    }
  },
  watch: {
    show(newValue) {
      if (newValue) {
        this.$refs.link.style.visibility = 'visible'
      } else {
        this.$refs.link.style.visibility = 'hidden'
      }
    }
  }
}
</script>
