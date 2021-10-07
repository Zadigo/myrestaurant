<template>
  <base-welcome :requiresHeading="requiresHeading" :requiresActionCart="requiresActionCart">
    <template v-slot:header>
      <h2 aria-label="Nos menus">Notre carte</h2>
      <p aria-label="Description">
        Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !
      </p>
    </template>
  </base-welcome>
</template>

<script>
import BaseWelcome from './BaseWelcome.vue'

export default {
  name: 'Welcome',
  props: { requiresHeading: Boolean, requiresActionCart: Boolean },
  components: { BaseWelcome }
}
</script>
