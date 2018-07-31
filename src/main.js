import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import VueObserveVisibility from 'vue-observe-visibility'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Styles
import '@/assets/scss/styles.scss'

Vue.use(VueObserveVisibility)
Vue.use(VueScrollTo, {
  offset: -50
})

Vue.component('fai', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
