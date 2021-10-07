<template>
  <div id="wrapper">
    <nav id="sidebar">
      <div class="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
      </div>

      <ul class="list-unstyled components">
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="{ name: 'restaurant', params: link.params }">
            {{ link.text }}
          </router-link>
        </li>
          <!-- <p>Dummy Heading</p>
          <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li>
                    <a href="#">Home 1</a>
                </li>
                <li>
                    <a href="#">Home 2</a>
                </li>
                <li>
                    <a href="#">Home 3</a>
                </li>
            </ul>
          </li>

          <li>
              <a href="#">About</a>
          </li>

          <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                      <a href="#">Page 1</a>
                  </li>
                  <li>
                      <a href="#">Page 2</a>
                  </li>
                  <li>
                      <a href="#">Page 3</a>
                  </li>
              </ul>
          </li>

          <li>
              <a href="#">Portfolio</a>
          </li>
          <li>
              <a href="#">Contact</a>
          </li> -->
      </ul>

      <ul class="list-unstyled CTAs">
          <li>
              <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
          </li>
          <li>
              <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
          </li>
      </ul>
    </nav>

    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSidebar',
  data() {
    return {
      drawer: true,
      links: [
        { text: 'Notre carte', link: 'restaurant' },
        { text: 'Nos menus', link: 'restaurant_menus', params: { slug: 'menus' } },
      ]
    }
  }
}
</script>
