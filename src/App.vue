<template>
  <main id="woonkly">
    <w-header :current-section="currentSection"/>
    <router-view @userEnteredSection="currentSection = $event"/>

    <w-cookies/>

  </main>
</template>

<script>

// Parallax library
import Rellax from 'rellax'
import wHeader from '@/Header'
import wCookies from '@/components/shared/WoonklyCookies'

export default {
  name: 'App',
  data () {
    return {
      currentSection: 'WoonklyHero'
    }
  },
  components: {
    wHeader,
    wCookies
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
  w-cookies{
      position:fixed;
  }

}

// TODO: max-width limit
// #woonkly {
//   section > .section {
//     max-width: 800px;
//   }
// }
</style>
