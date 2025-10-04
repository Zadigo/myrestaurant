<template>
  <base-offcanvas :show="showWebsiteMenu" @close="showWebsiteMenu=false">
    <ul class="nav nav-pills nav-fill flex-column">
      <li class="nav-item">
        <router-link :to="{ name: 'welcome_view' }" class="nav-link">
          Votre compte
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'welcome_view' }" class="nav-link">
          Historique de commandes
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'welcome_view' }" class="nav-link">
          FAQ
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Deconnexion</a>
      </li>
    </ul>
  </base-offcanvas>
</template>
