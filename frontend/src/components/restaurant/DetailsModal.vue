<template>
  <base-modal :show="show">
    <template #modal-title>
      RECETTE LOCALE - Le Barnabé
    </template>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <img src="http://via.placeholder.com/400x200" class="img-fluid" alt="">

          <h3 class="my-3">RECETTE LOCALE - Le Barnabé</h3>

          <p>
            Bœuf Limousin ou Charolais d'origine française, du Maroilles fermier AOP, 
            des chicons braisés, de la ciboulette, notre sauce Tata Fernande (sauce cocktail artisanale) + 
            Frites maison (patates lavées, coupées sur place) ou salade + Breuvage + Dessert artisanal
          </p>

          <div class="row">
            <div class="col-12 my-1">
              <p class="fw-bold">Cuisson du boeuf</p>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Saignant
                </label>
              </div>
            </div>

            <div class="col-12 my-1">
              <p class="fw-bold m-0 mt-2 mb-1">On enlève quelque chose ?</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
            </div>

            <div class="col-12 my-1">
              <p class="fw-bold m-0 mt-2 mb-1">On rajoute autre chose ?</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                  Fourme d'Ambert
                </label>
              </div>
            </div>
            
            <div class="col-12 my-1">
              <p class="fw-bold m-0 mt-2 mb-1">Votre Breuvage</p>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Pepsi
                </label>
              </div>
            </div>

             <div class="col-12 my-1">
              <p class="fw-bold m-0 mt-2 mb-1">Votre dessert</p>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Fondant
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #modal-footer>
      <input type="number">
    </template>
  </base-modal>
</template>

<script>
import BaseModal from '@/layouts/BaseModal'

export default {
  name: 'DetailsModal',
  props: {
    show: {
      type: Boolean
    }
  },
  components: {
    BaseModal
  }
}
</script>
