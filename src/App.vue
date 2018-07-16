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
}
</style>
