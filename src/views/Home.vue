<template>
<section id="woonkly-home">
  <w-description/>
  <w-ico-status/>
  <w-atention/>
  <w-what-is/>
  <w-tv/>
</section>
</template>

<script>
// @ is an alias to /src
import wDescription from '@/components/WoonklyHero'
import wIcoStatus from '@/components/WoonklyIcoStatus'
import wAtention from '@/components/WoonklyAtention'
import wWhatIs from '@/components/WoonklyWhat'
import wTv from '@/components/WoonklyTv'

export default {
  name: 'home',
  components: {
    wDescription,
    wIcoStatus,
    wAtention,
    wWhatIs,
    wTv
  },
  mounted () {
    console.log('this shit is mounted')
  }
}
</script>

<style>
#woonkly-home {
  color: white;
}
</style>
