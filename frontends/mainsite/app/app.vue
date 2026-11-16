<template>
  <u-app>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </u-app>
</template>

<script lang="ts" setup>
/**
 * Cart
 */

useState<Cart>('cart', () => ({ items: [] }))

/**
 * Websocket
 */

useWsComposable()
</script>
