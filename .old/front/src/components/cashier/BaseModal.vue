<template>
  <b-modal v-model="showDrawer" id="modal-xl" size="xl" title="Drinks" centered hide-footer>
    <slot></slot>
  </b-modal>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    showDrawer: {
      type: Boolean,
      default: false
    }
  } 
}
</script>

<style>
  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: .5rem;
    z-index: 1000;
    max-height: 100%;
    overflow: hidden;
    border-radius: .5rem;
  }

  .items .item {
    position: relative;
    /* padding: 2rem; */
    text-align: center;
    background-color: rgba(0, 0, 0, .3);
    font-weight: 500;
  }

  .item .infos {
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    color: white;
    padding: 2rem;
  }
  .item .infos:first-child {
    font-size: 1.25rem;
  }
</style>

