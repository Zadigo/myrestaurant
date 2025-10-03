<template>

  <section class="main">

    <div class="left p-3">
      <b-link v-for="(sideLink, i) in sideLinks" :key="i" class="sidelink" :to="{ name: sideLink.link }">
        {{ $t(sideLink.name) }}
      </b-link>
    </div>

    <div class="center bg-light">
      <div class="container">
        <div class="col-12">
          <div class="px-5">
            <!-- Header -->
            <!-- <div v-if="requiresHeading" role="heading">
              <slot name="header"></slot>
            </div> -->

            <!-- Jumbotron -->
            <!-- <base-jumbotron @addTocart="$emit('addToCart')" :requiresHeading="requiresHeading" :requiresActionCart="requiresActionCart">
        
            </base-jumbotron> -->

            <div class="col-sm-12 col-md-12">
              <div class="row">
                <router-view name="items" />
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="col-sm-12 col-md-9 offset-md-1">
        <div v-if="requiresHeading" role="heading">
          <slot name="header"></slot>
        </div>

        <base-jumbotron @addTocart="$emit('addToCart')" :requiresHeading="requiresHeading" :requiresActionCart="requiresActionCart">
        
        </base-jumbotron>

        <div class="col-sm-12 col-md-12">
          <div class="row">
            <router-view name="items" />
          </div>
        </div> 
      </div>
    </div> -->

  </section>
</template>

<script>

export default {
  name: 'BaseWelcomeTemplate',
  props: {
    requiresHeading: Boolean,
    requiresActionCart: Boolean
  },
  data() {
    return {
      sideLinks: [
        { name: 'Our menu', link: 'restaurant' },
        { name: 'Novelties', link: 'novelties' },
        { name: 'Good deals', link: 'good_plans' },
        { name: 'Drinks', link: 'drinks' },
        // { name: 'Menus', link: 'restaurant' },
      ]
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.left {
  height: 100%;
  min-height: 100%;
  width: 20%;
  background: #007bff;
}
.center {
  height: 100%;
  min-height: 100%;
  width: calc(100% - 20%);
  /* background-color: red; */
}
.sidelink {
  display: block;
  color: white;
  padding: 1rem;
  text-decoration: none;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: .5rem;
}
.sidelink:hover {
  background-color: rgba(0, 0, 0, .2);
  border-radius: .25rem;
}
.router-link-exact-active {
  background-color: rgba(0, 0, 0, .2);
  border-radius: .25rem;
}
</style>
