<template>
  <nuxt-card>
    <template #header>
      <h3 class="font-bold">Votre panier</h3>
      <p class="text-muted">1 article · 15,90 €</p>
      <nuxt-button variant="soft" color="error" @click="empty">Vider le panier</nuxt-button>
    </template>

    {{ cart }}

    <template #footer>
      <div>
        <nuxt-button class="w-full" :disabled="cart.items.length === 0">
          Passer la commande
        </nuxt-button>
      </div>
    </template> 
  </nuxt-card>
</template>

<script lang="ts" setup>
const { cart, newCartItem, reset, empty } = useCart()
</script>
