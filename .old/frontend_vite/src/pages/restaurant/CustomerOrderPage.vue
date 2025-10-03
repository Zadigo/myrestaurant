<template>
  <section id="customer-order">
    Customer order
  </section>
</template>

<script>
import { ref } from 'vue'
import { useWebSocket } from '@vueuse/core'
import { useRoute } from 'vue-router'

export default {
  name: 'CustomerOrderPage',
  setup () {
    var { params } = useRoute()
    var stages = ref({
        preparing: false,
        prepared: false,
        waiting: false
      })
    var { status, data, close } = useWebSocket(`/ws/customer-orders/${params.reference}`, {
      immediate: false,
      onConnected: (ws) => {
        console.log(ws, status, data)
      }
    })
    return {
      stages,
      close
    }
  },
  unmounted() {
    this.close()
  }
}
</script>
