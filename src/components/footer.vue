<template>
  <footer>
      <div class="footer-btm">
        <div class="container">
          <div class="row">
            <div class="inner-ftr-btm">
              <div class="col-md-6 col-md-push-6">
                <div class="footer-logo">
                  <img src="~static/img/logo.png" alt="Logo" />
                </div>
              </div>
              <!-- col-md-6 -->
              <div class="col-md-6 col-md-pull-6">
                <div class="copyright">
                  <p>{{newYear}} - All rights reserved
                  </p>
                </div>
              </div>
              <!-- col-md-6 -->
            </div>
          </div>
        </div>
      </div>
    </footer>

</template>

<script>
export default {
  data() {
    return {
      newYear: ''
    }
  },
  mounted() {
    this.newYear =  new Date().getFullYear()
  },
}
</script>
