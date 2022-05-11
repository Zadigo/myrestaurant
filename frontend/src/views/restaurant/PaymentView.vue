<template>
  <section id="payment">
    <header>
      <nav class="navbar navbar-expand-lg bg-transparent">
        <div id="navbar-nav" class="collapse navbar-collapse">
          <router-link :to="{ name: 'welcome_view' }" class="nav-link">
            Home
          </router-link>
        </div>
      </nav>
    </header>

    <div class="container">
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
                    <div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                      </div>
                      <p class="font-weight-bold">Couverts</p>
                      <p>Aidez-nous à réduire les déchets : ne demandez des couverts que si vous en avez besoin.</p>
                    </div>
                  </div>

                  <!-- TODO: Make this reusable -->
                  <div class="d-flex justify-content-between">
                    <div class="fw-bold">Adresse de livraison</div>
                    <div class="text-muted">Livraison</div>
                  </div>

                  <div class="border rounded-sm">
                    1 Rue de Paris, Paris 75001
                    +33 6 00 00 00 00
                  </div>

                  <div class="d-flex justify-content-between">
                    <div class="fw-bold">Instructions de livraison</div>
                    <div class="text-muted">Livraison</div>
                  </div>

                  <div class="d-flex justify-content-between">
                    <div class="fw-bold">Mode paiement</div>
                    <div class="text-muted">Livraison</div>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                      J'ai lu et j'accepte les nouvelles conditions générales.
                    </label>
                  </div>

                  <button class="btn btn-block btn-primary">
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
