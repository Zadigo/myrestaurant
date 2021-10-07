<template>
  <base-choices :items="drinks">

    <template slot-scope="{ choice }">
      {{ choice.image }}
    </template>

  </base-choices>
</template>

<script>
import { mapState } from 'vuex'
import BaseChoices from './BaseChoices.vue'

export default {
  name: 'Drinks',
  components: { BaseChoices },

  computed: {
    ...mapState(['drinks'])
  }
}
</script>
