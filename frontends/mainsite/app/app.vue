<template>
  <u-app>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </u-app>
</template>

<script lang="ts" setup>
import type { Cart } from '~/types'

/**
 * Cart
 */

useState<Cart>('cart', () => ({ items: [] }))
</script>
