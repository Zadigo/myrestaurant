<template>
  <div class="tag rounded font-weight-bold text-uppercase">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCardTag'
}
</script>

<style scoped>
  .tag {
    padding: .25rem;
    color: white;
    background-color: rgba(220, 53, 69, .8);
    /* background-color: #dc3545; */
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: .8rem;
  }
</style>
