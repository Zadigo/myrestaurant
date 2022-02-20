<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand href="/" class="text-uppercase font-weight-bold">
        Restaurant
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown :text="$i18n.locale" class="text-uppercase" right>
            <b-dropdown-item @click="changeLanguage('en')">EN</b-dropdown-item>
            <b-dropdown-item @click="changeLanguage('fr')">FR</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">
              {{ $t('profile') }}
            </b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'BaseNavbar',
  methods: {
    changeLanguage(lang) {
      this.$localstorage.update('lang', lang)
      this.$router.push({ name: 'restaurant', params: { lang: lang } })
    }
  }
}
</script>
