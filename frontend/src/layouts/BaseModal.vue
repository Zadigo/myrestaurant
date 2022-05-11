<template>
  <div ref="link" :class="modalClasses" class="modal" tabindex="-1" role="dialog">
    <div :class="dialogClasses" class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="$slots.modalTitle" class="modal-title">
            <slot name="modal-title" />
          </h5>
          <button type="button" class="btn-close" aria-label="Close" @click="$emit('close-modal')" />
        </div>
        
        <div class="modal-body">
          <slot />
        </div>
        {{ $slots }}
        <div v-if="$slots.modalFooter" class="modal-footer">
          <slot name="modal-footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  emits: ['close-modal'],
  props: {
    dialogClasses: {
      type: String
    },
    show: {
      type: Boolean
    }
  },
  computed: {
    modalClasses() {
      return [
        this.show ? 'show':null,
        'fade'
      ]
    }
  },
  watch: {
    show(newValue) {
      if (newValue) {
        this.$refs.link.style.display = 'block'
      } else {
        this.$refs.link.style.display = 'none'
      }
    }
  },
  mounted() {
    if (this.show) {
      this.$refs.link.style.display = 'block'
    }
  }
}
</script>
