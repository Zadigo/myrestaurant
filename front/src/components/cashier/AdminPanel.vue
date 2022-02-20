<template>
  <base-modal :showDrawer="showDrawer">
    <template>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <b-list-group>
              <b-list-group-item class="d-flex justify-content-between">
                <span>Settings 1</span><span><v-switch hide-details></v-switch></span>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between">
                <span>Settings 1</span><span><v-checkbox hide-details></v-checkbox></span>
              </b-list-group-item>
            </b-list-group>
          </div>

          <div class="col-12">
            <div class="border p-3 rounded-1">
              <div class="col-10">
                <b-input v-model="password" type="password" class="my-3" placeholder="Mot de passe"></b-input>

                <b-btn v-if="settings.sessionOpened" :disabled="password==null || password==''" variant="danger">
                  <font-awesome-icon icon="lock" class="me-2" />
                  Fermer la session
                </b-btn>

                <b-btn v-else variant="danger">
                  <font-awesome-icon icon="lock-open" class="me-2" />
                  Ouvrir une session
                </b-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </base-modal>
</template>

<script>
import { mapState } from 'vuex'

import BaseModal from './BaseModal.vue'

export default {
  name: 'AdminPanel',
  components: { BaseModal },
  props: {
    showDrawer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      password: null
    }
  },
  computed: {
    ...mapState({
      settings: (state) => { return state.cashRegisterModule.cashRegisterSettingsModule.settings }
    })
  }
}
</script>
