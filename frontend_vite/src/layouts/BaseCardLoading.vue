<template>
  <div class="row">
    <div v-for="i in 20" :key="i" class="col-3">
      <div class="card">
        <div class="card-body">
          Loading...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCardLoading'
}
</script>
