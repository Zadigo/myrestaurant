<template>
  <base-modal :id="id" :show="showDeliveryModal" @close="showDeliveryModal=false">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="form-check">
            <input id="delivery" v-model="deliveryOption.type" value="Click & collect" class="form-check-input" type="radio" name="delivery" checked>
            <label class="form-check-label" for="delivery">
              Click & collect
            </label>
          </div>
        </div>

        <div class="col-12">
          <div class="d-flex justify-content-between my-4">
            <p class="m-0">Loos, Lille</p>
            <a href class="m-0 text-info" @click.prevent>Modifier</a>
          </div>

          <div class="d-flex justify-content-between my-4">
            <p class="m-0">Livré dans 25 - 45 minutes</p>
            <a href class="m-0 text-info" @click.prevent>Modifier</a>
          </div>
        </div>

        <button type="button" class="btn btn-lg btn-block btn-primary shadow-none" @click="showDeliveryModal=false">
          Confirmer
        </button>
      </div>
    </div>
  </base-modal>
</template>
