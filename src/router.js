import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import PrivacyPolicy from './components/WoonklyPrivacyPolicy.vue'
import Cookies from './components/WoonklyCookies.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/privacy-policy',
      name: 'privacy policy',
      component: PrivacyPolicy
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: Cookies
    }
  ]
})
