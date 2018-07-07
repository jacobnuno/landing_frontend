<template>
<section id="woonkly-home">
  <w-description/>
  <w-ico-status/>
  <w-atention/>
  <w-what-is/>
  <w-tv/>
  <w-ac-token/>
  <w-faq/>
</section>
</template>

<script>
// @ is an alias to /src
import wDescription from '@/components/WoonklyHero'
import wIcoStatus from '@/components/WoonklyIcoStatus'
import wAtention from '@/components/WoonklyAtention'
import wWhatIs from '@/components/WoonklyWhat'
import wTv from '@/components/WoonklyTv'
import wFaq from '@/components/WoonklyFaq'
import wAcToken from '@/components/WoonklyAcquireToken'


export default {
  name: 'home',
  components: {
    wDescription,
    wIcoStatus,
    wAtention,
    wWhatIs,
    wTv,
    wFaq,
    wAcToken
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
