<template>
  <section id="customer-order">
    Customer order
  </section>
</template>

<script>
// import ReconnectingWebsocket from 'reconnecting-websocket'

export default {
  name: 'CustomerOrderView',
  data: () => ({
    socket: null,
    stages: {
      preparing: false,
      prepared: false,
      waiting: false
    }
  }),
  watch: {
    completed(newValue) {
      if (newValue) {
        this.socket.send({
          type: 'order.completed',
          order: {}
        })
      }
    }
  },
  beforeMount() {
    var url = new URL(this.$route.params.reference, 'ws://127.0.0.1:8000/ws/customer-orders/')
    // var socket = new ReconnectingWebsocket(url.toString(), [], {
    //   maxReconnectionDelay: 200,
    //   // minUptime: 1000
    //   // connectionTimeout: 5000
    //   maxRetries: 5
    // })
    var socket = new WebSocket(url.toString())

    socket.onopen = () => {
      socket.send({type: 'order.confirmed', order: {
        reference: this.$route.params.reference
      }})
    }
    
    socket.onclose = (e) => {
      console.error(e)
    }

    socket.onmessage = (e) => {
      console.info(e)
      let { method } = e.data

      switch (method) {
        case 'preparing':
          break

        case 'prepared':
          break

        case 'waiting':
          break

        case 'invalid_reference':
          break
      
        default:
          break
      }
    }

    socket.onerror = (e) => {
      console.error(e)
    }
    
    this.socket = socket
  },
  unmounted() {
    if (this.socket) {
      this.socket.close()
    }
  },
}
</script>
