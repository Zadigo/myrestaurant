<template>
  <footer class="text-center text-lg-start bg-dark text-muted mt-5">
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-facebook-f" />
        </a>
      </div>
      <!-- Right -->
    </section>

    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <!-- Introduction -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              Enterprise
            </h6>

            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <!-- Links -->
          <div v-for="item in footerLinks" :key="item.section" class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              {{ item.section }}
            </h6>

            <p v-for="link in item.links" :key="link.name" class="m-0">
              <router-link :to="{ name: link.name }" class="text-reset">
                {{ link.text }}
              </router-link>
            </p>
          </div>

          <!-- Contact -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p class="m-0"><i class="fas fa-home me-3" /> New York, NY 10012, US</p>
            <p class="m-0"><i class="fas fa-envelope me-3" />info@example.com</p>
            <p class="m-0"><i class="fas fa-phone me-3" /> + 01 234 567 88</p>
            <p class="m-0"><i class="fas fa-print me-3" /> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </section>

    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2021 Copyright: <router-link :to="{ name: 'welcome_view' }" class="text-reset fw-bold">Enterprise</router-link>
    </div>
  </footer>
</template>

<script>
import footerLinks from '@/data/footer.json'

export default {
  name: 'BaseFooter',
  setup() {
    return {
      footerLinks
    }
  }
}
</script>
