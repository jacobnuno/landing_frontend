<template>
  <main id="woonkly">
    <w-header/>
    <router-view/>
  </main>
</template>

<script>
import wHeader from '@/Header'

export default {
  name: 'App',
  components: {
    wHeader
  }
}
</script>


<style lang="scss">
#woonkly {
  font-family: 'Futura', arial, sans-serif;
  font-weight: normal;

  .title {
    font-family: 'Futura', arial, sans-serif;
    font-weight: bold;
  }

  // TODO: Set max width for whole components
  // @media (min-width: 769px) {
  //   & > section {
  //     & > * {
  //       max-width: 700px;
  //       margin-left: auto;
  //       margin-right: auto;
  //     }
  //   }
  // }
}
</style>
