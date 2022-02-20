<template>
  <section id="cashier">
    <div class="container">
      <div class="row">
        <div class="col-12">

          <router-view />
          
          <!-- Side -->
          <div class="side">
            <a @click="currentComponent='products', showDrawer=!showDrawer" class="item">
              <font-awesome-icon icon="hamburger" class="fa-2x"></font-awesome-icon>
            </a>

            <a @click="currentComponent='drinks', showDrawer=!showDrawer" class="item">
              <font-awesome-icon icon="glass-martini" class="fa-2x"></font-awesome-icon>
            </a>

            <router-link :to="{ name: 'orders' }" class="item">
              <font-awesome-icon icon="book" class="fa-2x"></font-awesome-icon>
            </router-link>

            <v-btn :to="{ name: 'menus' }" elevation="0" class="item" text>
              <font-awesome-icon icon="bookmark" class="fa-2x"></font-awesome-icon>
              <v-badge color="red" bordered overlap dot></v-badge>
            </v-btn>

            <a @click="currentComponent='admin-panel', showDrawer=!showDrawer" class="item">
              <font-awesome-icon icon="user-shield" class="fa-2x"></font-awesome-icon>
            </a>

            <router-link :to="{ name: 'menus' }" class="item">
              <font-awesome-icon icon="info-circle" class="fa-2x"></font-awesome-icon>
            </router-link>
          </div>

          <!-- <div class="calculator">
            <div class="result"></div>

            <div class="numbers">
              <div v-for="key in calculatorKeys" :key="key" id="value">
                {{ key }}
              </div>
            </div>
          </div> -->

          <div class="row p-3">
            <!-- Header -->
            <div class="col-sm-12 col-md-11 d-flex justify-content-left">
              <div class="border rounded-1 p-4 me-3">
                Some header there
              </div>

              <div class="border rounded-1 p-4 me-3">
                Some header there
              </div>

              <div class="border rounded-1 p-4">
                Some header there
              </div>
            </div>
            
            <!-- Items -->
            <div class="col-sm-12 col-md-11 my-3">
              <div class="row">

                <!-- List -->
                <div class="col-10">
                  <div class="border p-4 rounded-1 shadow-sm">
                    <div v-for="key in Object.keys(currentOrder)" :key="key" class="col-12">
                      <h1 class="fs-6 blue lighten-4 p-3 rounded-1 font-weight-bold text-uppercase">
                        {{ key }}
                      </h1>

                      <b-list-group>
                        <b-list-group-item v-for="item in currentOrder[key]" :key="item.id" class="p-3 d-flex justify-content-between">
                          <span>{{ item.name }} - {{ item.price_post_tax|euro }}</span>
                          
                          <div class="actions">
                            <b-btn v-if="!paymentStep" size="sm" class="me-3">
                              <font-awesome-icon icon="plus" />
                            </b-btn>

                            <b-btn v-if="!paymentStep" size="sm">
                              <font-awesome-icon icon="trash" />
                            </b-btn>
                          </div>
                        </b-list-group-item>
                      </b-list-group>
                    </div>
                  </div>
                </div>

                <div class="col-2">
                  <div class="border p-3 rounded-1 shadow-sm text-center">
                    <h1 class="fs-6 p-3 red lighten-4 rounded-1 font-weight-bold text-uppercase">
                      Total
                    </h1>

                    <h1 class="grey lighten-4 p-3 rounded-1 mt-1">
                      {{ orderTotal|euro }}
                    </h1>

                    <b-btn class="mt-2" variant="info" block>
                      <font-awesome-icon icon="percent" />
                    </b-btn>
                  </div>
                </div>
              
              </div>
            </div>

            <!-- Actions -->
            <div class="col-sm-12 col-md-11">
              <div class="p-3 rounded-1 border shadow-sm">
                <transition name="general-transition">
                  <div v-if="paymentStep" class="col-12 text-right">
                    <b-btn @click="paymentStep=false" size="lg" variant="dark" class="me-3">
                      <font-awesome-icon icon="stop" class="me-3" />Annuler
                    </b-btn>

                    <b-btn @click="putAside" size="lg" variant="primary" class="me-3">
                      <font-awesome-icon icon="user" class="me-3" />
                    </b-btn>

                    <b-btn @click="clearOrder" size="lg" variant="primary" class="me-3">
                      <font-awesome-icon icon="user" class="me-3" />
                    </b-btn>
                  </div>
                  
                  <div v-else class="col-12 text-right">
                    <b-btn @click="putAside" :disabled="!hasCurrentOrder" size="lg" variant="secondary" class="me-3">
                      <font-awesome-icon icon="pause" class="me-3" />Mettre de côté
                    </b-btn>
                    
                    <b-btn @click="clearOrder" :disabled="!hasCurrentOrder" size="lg" variant="secondary" class="me-3">
                      <font-awesome-icon icon="stop" class="me-3" />Effacer
                    </b-btn>

                    <b-btn @click="paymentStep=true" :disabled="!hasCurrentOrder" size="lg" variant="primary">
                      <font-awesome-icon icon="check" class="me-3" />Terminer
                    </b-btn>
                  </div>
                </transition>
              </div>
            </div>
          </div>

          <transition name="general-transition">
            <component @closeModal="showDrawer=false" :showDrawer="showDrawer" :is="currentComponent" />
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

import Drinks from '../../components/cashier/Drinks.vue'
import Products from '../../components/cashier/Products.vue'
import AdminPanel from '../../components/cashier/AdminPanel.vue'

export default {
  name: 'Cashier',
  components: { Drinks, Products, AdminPanel },
  data() {
    return {
      currentComponent: 'drinks',
      showDrawer: false,
      calculatorKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      paymentStep: false
    }
  },
  computed: {
    ...mapState('cashRegisterModule', ['currentOrder']),
    ...mapGetters('cashRegisterModule', ['hasCurrentOrder', 'orderTotal'])
  },
  methods: {
    ...mapMutations('cashRegisterModule', ['clearOrder']),
    putAside() {
      // Put a current order aside for later use. A typical
      // case would be to retrieve the items of a past order
      this.$store.commit('cashRegisterModule/putAside')
      this.$store.commit('cashRegisterModule/clearOrder')
    }
  }
}
</script>


<style scoped>
  .side {
    position: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 0;
    border-left: 1px solid #dee2e6;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  }
  .side .item {
    /* margin-bottom: -1px; */
    padding: 2rem;
    /* background-color: white; */
    width: 100%;
    text-align: center;
    /* border-bottom: 1px solid #dee2e6; */
  }

  .calculator {
    padding: 4rem;
  }
  .calculator .result {
    width: 100%;
    background-color: white;
    height: 100px;
    border-radius: .2rem;
    border: 1px solid rgba(0, 0, 0, .2);
  }
  .calculator .numbers {
    display: grid;
    padding-top: 1rem;
    padding-bottom: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: .5rem;
  }

  .numbers #value {
    text-align: center;
    padding: 2rem;
    background-color: rgba(0, 0, 0, .5);
    cursor: pointer;
    border-radius: .25rem;
    font-size: 2rem;
    font-weight: 600;
    color: white;
  }
</style>
