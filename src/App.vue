<template>
  <main id="woonkly">
    <w-header :current-section="currentSection"/>
    <router-view @userEnteredSection="currentSection = $event"/>
    <w-cookies-banner/>
    <w-footer/>
  </main>
</template>

<script>
// Parallax library
import wFooter from '@/components/WoonklyFooter'
import Rellax from 'rellax'
import wHeader from '@/Header'
import wCookiesBanner from '@/components/shared/WoonklyCookieBanner'
import { loadLanguageAsync } from '@/lang'

export default {
  name: 'App',
  data () {
    return {
      currentSection: 'WoonklyHero'
    }
  },
  components: {
    wHeader,
    wCookiesBanner,
    wFooter
  },
  mounted () {
    if (window.matchMedia('screen and (min-width: 769px)').matches) {
      var rellaxVar = new Rellax()
    }
  }
}
</script>


<style lang="scss">
#woonkly, body, button, input, select, textarea {
  font-family: 'Futura', arial, sans-serif !important;
  font-weight: normal;

  .title {
    font-family: 'Futura', arial, sans-serif !important;
    font-weight: bold;
  }
}

// TODO: max-width limit
// #woonkly {
//   section > .section {
//     max-width: 800px;
//   }
// }
</style>
