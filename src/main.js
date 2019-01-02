// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'

import App from './App'

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

// Force reload on top
window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
