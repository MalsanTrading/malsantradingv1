import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/normalize.css'
import '@/assets/css/bootstrap.css'
import '@/assets/css/slicknav.min.css'
import '@/assets/css/owl.theme.default.css'
import '@/assets/css/essential.css'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'

import '@/assets/js/bootstrap.js'
import '@/assets/js/jquery.slicknav.min.js'
import '@/assets/js/counterup.min.js'
import '@/assets/js/main.js'

Vue.config.productionTip = false

router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
