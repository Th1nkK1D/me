// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'intersection-observer'
import scrollama from 'scrollama'

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.use(scrollama)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
