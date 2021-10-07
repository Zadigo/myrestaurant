<template>
  <v-tabs @change="$emit('updateItems', tab)" v-model="tab">
    <v-tab v-for="(item, index) in tabs" :key="index">
      {{ item }}
    </v-tab>

    <slot></slot>
  </v-tabs>
</template>

<script>
export default {
  name: 'BaseTabs',
  props: ['tabs'],
  data() {
    return {
      tab: null
    }
  }
}
</script>
