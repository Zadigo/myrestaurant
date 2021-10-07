<template>
  <div ref="intro" id="intro" class="p-5 text-center bg-light shadow-5 rounded-5 mb-5">

    <div class="row">
      <div :class="`col-${ col }`">

        <h1 :class="titleClassList" class="mb-3 h2" id="name" aria-label="Name">
          {{ currentItem.lead }}
        </h1>

        <p class="mb-3" id="description" aria-label="Description">
          {{ currentItem.description }}
        </p>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseJumbotron',
  props: {
    lead: String,
    description: String,
    image: null,
    col: {
      type: Number,
      default: 12
    },
    titleBold: Boolean,
    titleUppercase: Boolean,
    requiresActionCart: Boolean
  },

  data() {
    return {
      currentItem: {}
    }
  },

  computed: {
    titleClassList() {
      return {
        'font-weight-bold': this.titleBold,
        'text-uppercase': this.titleUppercase
      }
    }
  }, 

  beforeMount() {
    if (this.image != null) {
      this.$refs.intro.style.backgroundImage = `url(${this.image})`
      this.$refs.intro.classList.push('bg-image')
    }

    if (this.$route.meta.requiresItem == 'menu') {
      this.currentItem = this.$store.getters['getMenu'](this.$route.params.name)
    }
  }
}
</script>
