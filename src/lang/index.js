import Vue from 'vue'
import VueI18n from 'vue-i18n'

// default language
import esMx from '@/lang/locales/es_MX'

Vue.use(VueI18n)

const messages = {
  es_MX: esMx
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'es_MX', // set locale
  fallbackLocale: 'es_MX',
  messages // set locale messages
})

export default i18n

const loadedLanguages = ['es_MX'] // our default language that is preloaded

function setI18nLanguage (lang) {
  i18n.locale = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync (lang) {
  if (i18n.locale !== lang) {
    if (!loadedLanguages.includes(lang)) {
      return import(`@/lang/locales/${lang}.json`).then(msgs => {
        i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang)
        return setI18nLanguage(lang)
      })
    }
    return Promise.resolve(setI18nLanguage(lang))
  }
  return Promise.resolve(lang)
}

export var determineLanguage = function (lang) {
  if (lang.includes('en')) {
    return { simple: 'en', i18n: 'en_UK' }
  } else if(lang.includes('es')) {
    return { simple: 'es', i18n: 'es_MX' }
  } else return { simple: 'en', i18n: 'en_UK' }
}