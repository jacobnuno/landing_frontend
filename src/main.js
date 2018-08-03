import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/lang'
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
  i18n,
  render: h => h(App)
}).$mount('#app')
