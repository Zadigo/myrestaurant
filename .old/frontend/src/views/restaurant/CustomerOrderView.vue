<template>
  <section id="customer-order">
    Customer order
  </section>
</template>

<script>
// import ReconnectingWebsocket from 'reconnecting-websocket'
import { createWebsocket, socketSendMessage } from '@/utils'

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
    const socket = createWebsocket(`/ws/customer-orders/${this.$route.params.reference}`, {
      onopen: () => {
        socket.send(socketSendMessage('order.confirmed', {
          reference: this.$route.params.reference
        }))
      },
      onclose: (e) => {
        console.error(e)
      },
      onmessage: (e) => {
        console.info(e)
        const { method } = e.data

        switch (method) {
          case 'preparing':
            break

          case 'prepared':
            break

          case 'waiting':
            break

          case 'already_completed':
            break
        
          default:
            break
        }
      },
      onerror: (e) => {
        console.error(e)
      }
    })
    this.socket = socket
    // var url = new URL(this.$route.params.reference, 'ws://127.0.0.1:8000/ws/customer-orders/')
    // var socket = new ReconnectingWebsocket(url.toString(), [], {
    //   maxReconnectionDelay: 200,
    //   // minUptime: 1000
    //   // connectionTimeout: 5000
    //   maxRetries: 5
    // })
    // // var socket = new WebSocket(url.toString())

    // socket.onopen = () => {
    //   socket.send(socketSendMessage('order.confirmed', {
    //     reference: this.$route.params.reference
    //   }))
    // }
    
    // socket.onclose = (e) => {
    //   console.error(e)
    // }

    // socket.onmessage = (e) => {
    //   console.info(e)
    //   let { method } = e.data

    //   switch (method) {
    //     case 'preparing':
    //       break

    //     case 'prepared':
    //       break

    //     case 'waiting':
    //       break

    //     case 'already_completed':
    //       break
      
    //     default:
    //       break
    //   }
    // }

    // socket.onerror = (e) => {
    //   console.error(e)
    // }
    
    // this.socket = socket
  },
  unmounted() {
    if (this.socket) {
      this.socket.close()
    }
  },
}
</script>
