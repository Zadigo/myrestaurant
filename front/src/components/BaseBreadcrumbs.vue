<template>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
</template>

<script>
var _ = require('lodash')

export default {
  name: 'BaseBreadcrumbs',
  props: ['currentPage'],

  data() {
    return {
      items: [
        { text: 'Carte', disabled: false, href: 'restaurant' },
        { text: null, disabled: true, href: null },
      ]
    }
  },

  beforeMount() {
    var lastItem = _.last(this.items)
    lastItem.text = this.currentPage
  }
}
</script>
