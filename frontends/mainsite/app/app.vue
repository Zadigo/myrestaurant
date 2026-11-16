<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup>
import type { Cart } from '~/types'

/**
 * Cart
 */

useState<Cart>('cart', () => ({ items: [] }))
</script>
