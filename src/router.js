import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import PrivacyPolicy from './components/WoonklyPrivacyPolicy.vue'
import Cookies from './components/WoonklyCookies.vue'
import NotFound from './components/NotFound404.vue'
// Change lang function
import { loadLanguageAsync } from '@/lang'

Vue.use(Router)

var determineLanguage = function (lang) {
  if (lang.includes('en')) {
    return { simple: 'en', i18n: 'en_UK' }
  } else if(lang.includes('es')) {
    return { simple: 'es', i18n: 'es_MX' }
  } else return { simple: 'en', i18n: 'en_UK' }
}

const router = new Router({
  routes: [
    {
      path: '/:lang/',
      name: 'home',
      component: Home
    },
    {
      path: '/:lang/about',
      name: 'about',
      component: About
    },
    {
      path: '/:lang/privacy-policy',
      name: 'privacy policy',
      component: PrivacyPolicy
    },
    {
      path: '/:lang/cookies',
      name: 'cookies',
      component: Cookies
    },
    {
      path: '*',
      name: 'not found',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ( to.params.lang == 'es' ) {
    loadLanguageAsync('es_MX')
  } else if ( to.params.lang == 'en') {
    loadLanguageAsync('en_UK')
  } else {
    // First we check if local storage is available
    if (typeof(Storage) !== 'undefined') {
      // If the user already visited woonkly.com
      // the localStorage is going to be already set
      if (localStorage.getItem('woonkly-lang') !== null) {
        // Finally, if the route param is not
        // defined we set our own
        if (to.params.lang) {
          // If the route param is set we do nothing
          next()
          return false
        }
        // If the route param is not set get set the one
        // from our local storage
        var woonklyLang = localStorage.getItem('woonkly-lang')
        var wnkLang = determineLanguage(woonklyLang)
        next({ path: `/${wnkLang.simple}${to.fullPath}` })
        return false
      }
    }

    var userLang = window.navigator.language || navigator.browserLanguage
    var woonklyLang = determineLanguage(userLang)
    next({ path: `/${woonklyLang.simple}${to.fullPath}` })
    
    if (typeof(Storage) === 'undefined') return false
    localStorage.setItem('woonkly-lang', woonklyLang.simple)
  }
  next()
})

export default router