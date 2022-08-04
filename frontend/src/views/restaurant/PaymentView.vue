<template>
  <section id="payment" class="vh-100">
    <header>
      <nav class="navbar navbar-expand-lg bg-transparent shadow-none">
        <div class="container-fluid">
          <div id="navbar-nav" class="collapse navbar-collapse">
            <router-link :to="{ name: 'welcome_view' }" class="nav-link">
              Home
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <div class="container m-5">
      <div class="row">
        <div class="col-8">
          <div class="row">
            <div class="col-12">
              <h1>Falafel's 💚 - Lille</h1>
              <p class="text-muted">Livrée dans 20 - 40 min</p>
            </div>

            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="border rounded-sm">
                    <div class="p-3">
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Je veux des couverts</label>
                      </div>
                      <p class="font-weight-bold">Couverts</p>
                      <p>Aidez-nous à réduire les déchets : ne demandez des couverts que si vous en avez besoin.</p>
                    </div>
                  </div>

                  <!-- TODO: Make this reusable -->
                  <div class="d-flex justify-content-between mt-3 mb-1">
                    <div class="fw-bold">Adresse de livraison</div>
                    <div class="text-muted">Modifier</div>
                  </div>

                  <div class="border rounded-sm p-3">
                    1 Rue de Paris, Paris 75001
                    +33 6 00 00 00 00
                  </div>

                  <div class="d-flex justify-content-between mt-3 mb-1">
                    <div class="fw-bold">Instructions de livraison</div>
                    <div class="text-muted">Modifier</div>
                  </div>

                  <div class="d-flex justify-content-between mt-3 mb-1">
                    <div class="fw-bold">Mode paiement</div>
                    <div class="text-muted">Modifier</div>
                  </div>

                  <div class="form-check my-4">
                    <input v-model="consent" class="form-check-input" type="checkbox" name="consent" id="consent">
                    <label class="form-check-label" for="consent">
                      J'ai lu et j'accepte les nouvelles conditions générales.
                    </label>
                  </div>

                  <button class="btn btn-block btn-primary bn-lg" @click="doPayment">
                    Commander avec livraison
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <div class="font-weight-bold">Panier</div>

              <div class="row">
                <div class="col1">1x</div>
                <div class="col-8">
                  <p>Menu sandwich + frites 🌯🍟</p>
                  <p class="text-muted">Dwich Falafel 🧆</p>
                </div>
                <div class="col-2">
                  12€
                </div>
              </div>

              <hr class="my-3">

              <div class="row">
                <div class="d-flex justify-content-between">
                  <span>Sous-total</span>
                  <span>12€</span>
                </div>
                
                <div class="d-flex justify-content-between">
                  <span>Frais de livraison</span>
                  <span>Offert</span>
                </div>

                <div class="d-flex justify-content-between">
                  <span>Frais de service</span>
                  <span>0.96€</span>
                </div>

                <div class="d-flex justify-content-between">
                  <span>Pourboir livreur livreuse</span>
                  <span>0€</span>
                </div>

                <hr class="my-3">

                <div class="d-flex justify-content-between">
                  <span class="fw-bold">Total</span>
                  <span>12€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRestaurant } from '@/store/restaurant'

export default {
  name: 'PaymentView',
  setup() {
    var store = useRestaurant()
    store.$subscribe(({ type }) => {
      console.log(type)
    })
    return {
      store
    }
  },
  data: () => ({
    consent: false
  }),
  beforeMount() {
    // Check if the user has orders in order
    // to be able to access this page
  },
  methods: {
    async doPayment() {
      try {
        this.store.$patch((state) => {
          state.currentOrder = { reference: 'b044cb79-e209-4ad5-8a59-493736932cb7' }
          this.$router.push({ name: 'customer_order_view', params: { reference: 'b044cb79-e209-4ad5-8a59-493736932cb7' } })
        })
      } catch(error) {
        console.error(error)
      }
    },
    async getCart() {
      // Do something
    }
  }
}
</script>
