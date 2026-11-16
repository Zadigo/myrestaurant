export const useWsComposable = createGlobalState(() => {
  const { ws } = useWebSocket('http://localhost:9000/ws/', {
    immediate: true,
    onConnected() {

    },
    onDisconnected() {

    },
    onMessage(_ws, _event) {

    },
  })

  return {
    ws
  }
})
