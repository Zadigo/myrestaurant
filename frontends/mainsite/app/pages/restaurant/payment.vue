<template>
  <section id="payment" class="vh-100">
    <header>
      <nav class="bg-transparent px-10">
        <nuxt-link to="/" class="nav-link">
          Home
        </nuxt-link>
      </nav>
    </header>

    <u-container class="my-10">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-8">
          <div class="py-3 rounded-lg">
            <h1>Falafel's 💚 - Lille</h1>
            <p class="text-slate-500">Livrée dans 20 - 40 min</p>
          </div>

          <div>
            <u-card>
              <form @submit.prevent>
                <div class="border rounded-lg border-slate-300">
                  <div class="p-3">
                    <u-checkbox label="Je veux des couverts" />

                    <div class="mt-5">
                      <p class="font-bold">Couverts</p>
                      <p>Aidez-nous à réduire les déchets : ne demandez des couverts que si vous en avez besoin.</p>
                    </div>
                  </div>
                </div>
  
                <!-- TODO: Make this reusable -->
                <div class="flex justify-between mt-3 mb-1">
                  <div class="font-bold">Adresse de livraison</div>
                  <u-button icon="lucide:pen" variant="soft">Modifier</u-button>
                </div>
  
                <div class="border rounded-lg border-slate-300 p-3">
                  1 Rue de Paris, Paris 75001
                  +33 6 00 00 00 00
                </div>
  
                <div class="flex justify-between mt-3 mb-1">
                  <div class="font-bold">Instructions de livraison</div>
                  <u-button icon="lucide:pen" variant="soft">Modifier</u-button>
                </div>
  
                <div class="flex justify-between mt-3 mb-1">
                  <div class="font-bold">Mode paiement</div>
                  <u-button icon="lucide:pen" variant="soft">Modifier</u-button>
                </div>
  
                <u-checkbox label="J'ai lu et j'accepte les nouvelles conditions générales." />
              </form>

              <template #footer>
                <div class="flex justify-end">
                  <u-button icon="lucide:credit-card" @click="doPayment">
                    Commander avec livraison
                  </u-button>
                </div>
              </template>
            </u-card>
          </div>
        </div>
        
        <aside class="col-span-4">
          <u-card>
            <template #title>
              Panier
            </template>

            <div class="grid grid-cols-12 gap-1">
              <div class="col-span-2">1x</div>
              <div class="col-span-8">
                <p>Menu sandwich + frites 🌯🍟</p>
                <p class="text-muted">Dwich Falafel 🧆</p>
              </div>
              <div class="col-span-2">
                12€
              </div>
            </div>

            <u-separator class="my-3" />

            <div class="space-y-2">
              <div class="flex justify-between">
                <span class="font-semibold">Sous-total</span>
                <span>12€</span>
              </div>
              
              <div class="flex justify-between">
                <span class="font-semibold">Frais de livraison</span>
                <span>Offert</span>
              </div>

              <div class="flex justify-between">
                <span class="font-semibold">Frais de service</span>
                <span>0.96€</span>
              </div>

              <div class="flex justify-between">
                <span class="font-semibold">Pourboir livreur livreuse</span>
                <span>0€</span>
              </div>

              <u-separator class="my-3" />

              <div class="flex justify-between">
                <span class="font-semibold">Total</span>
                <span class="font-bold">12€</span>
              </div>
            </div>
          </u-card>
        </aside>
      </div>
    </u-container>
  </section>
</template>

<script lang="ts" setup>
const { doPayment } = usePaymentComposable()
</script>
