<template>
  <section class="section">
    <div class="container">
      <div class="col-sm-12 col-md-8 offset-md-2">

        <v-card>
          <v-toolbar>
            <v-toolbar-title>
              Caisse
            </v-toolbar-title>

            <v-spacer></v-spacer>


            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-on="on" v-bind="attrs" icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>                
              </template>

              <v-list>
                <v-list-item-group>
                  <v-list-item>
                    Freeze
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </v-toolbar>

          <v-card-text>
            <v-list two-line>
              <v-list-item-group multiple>
                <template v-for="(item, index) in noneCompleted">
                  <v-list-item @click="markCompleted(item)" :key="index">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title class="text--primary">
                          {{ item.headline }}
                        </v-list-item-title>

                        <v-list-item-subtitle class="text--primary">
                          {{ item.subtitle }}
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text>
                          {{ item.action }}
                        </v-list-item-action-text>

                        <v-icon v-if="!active" color="grey lighten-1">
                          mdi-star-outline
                        </v-icon>

                        <v-icon v-else color="yellow darken-3">
                          mdi-star
                        </v-icon>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
        
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      selected: []
    }
  },

  computed: {
    ...mapState('pickupsModule', ['items']),
    ...mapGetters('pickupsModule', ['noneCompleted'])
  },

  methods: {
    markCompleted (item) {
      if (item.paid) {
        setTimeout(() => { item.completed = true }, 1000)
      }
    }
  }
}
</script>
