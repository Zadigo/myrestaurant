<template>
  <!-- <base-welcome-template :requiresHeading="requiresHeading" :requiresActionCart="requiresActionCart">
    <template v-slot:header>
      <h2 aria-label="Nos menus">Notre carte</h2>
      <p aria-label="Description">
        Aucune excuse, faites-vous plaisir : il y en a pour tous les goûts !
      </p>
    </template>
  </base-welcome-template> -->
  <div>something</div>
</template>

<script>
// import BaseWelcomeTemplate from '../../components/restaurant/BaseWelcomeTemplate.vue'

export default {
  name: 'Welcome',
  props: { requiresHeading: { type: Boolean, default: false }, requiresActionCart: { type: Boolean, default: false } },
  // components: { BaseWelcomeTemplate }
}
</script>
