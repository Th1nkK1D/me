import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(vueSmoothScroll)

// Force reload on top
window.onbeforeunload = function () {
  window.scrollTo(0, 0)
}

new Vue({
  render: h => h(App),
}).$mount('#app')
