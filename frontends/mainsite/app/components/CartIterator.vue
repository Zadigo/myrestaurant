<template>
  <u-card>
    <template #header>
      <h3 class="font-bold">Votre panier</h3>
      <p class="text-muted">1 article · 15,90 €</p>
      <u-button icon="lucide:trash" variant="soft" color="error" @click="empty">
        Vider le panier
      </u-button>
    </template>

    {{ cart }}

    <template #footer>
      <div>
        <u-button to="/restaurant/payment" class="w-full" :disabled="cart.items.length === 0">
          Passer la commande
        </u-button>
      </div>
    </template> 
  </u-card>
</template>

<script lang="ts" setup>
const { cart, newCartItem, reset, empty } = useCart()
</script>
