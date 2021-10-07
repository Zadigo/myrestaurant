<template>
  <base-tabs @updateItems="updateItems" @click="updateItems" :tabs="tabs">
    <template>

      <v-tabs-items v-model="tab">
        <v-tab-item :value="0">
          <v-container>
            <v-row>
              <v-col cols="2">
                Not set
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>

        <v-tab-item :value="1">
          <v-container>
            <v-row>
              <v-col cols="12">
                <drinks />
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>

    </template>
  </base-tabs>
</template>

<script>
import { mapState } from 'vuex'
import BaseTabs from './BaseTabs.vue'
import Drinks from './Drinks.vue'

export default {
  name: 'DishSides',
  components: { BaseTabs, Drinks },
  data() {
    return {
      tab: null,
      tabs: [
        'Accompagnements', 'Boissons'
      ],
      items: []
    }
  },
  computed: {
    ...mapState(['drinks'])
  },
  methods: {
    updateItems(position) {
      this.tab = position
      if (position == 0) {
        this.items = [1]
      } else {
        this.items = [2]
      }
    }
  }
}
</script>
