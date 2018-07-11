<template>
<section id="woonkly-home">
  <w-description/>
  <w-ico-status/>
  <w-atention/>
  <w-what-is/>
  <w-tv/>
  <w-team/>
  <w-ac-token/>
  <w-dis-token/>
  <w-allies/>
  <w-faq/>
  <w-question/>
  <w-footer/>
</section>
</template>

<script>
// @ is an alias to /src
import wDescription from '@/components/WoonklyHero'
import wIcoStatus from '@/components/WoonklyIcoStatus'
import wAtention from '@/components/WoonklyAtention'
import wWhatIs from '@/components/WoonklyWhat'
import wTv from '@/components/WoonklyTv'
import wTeam from '@/components/woonkly-team/WoonklyTeam'
import wFaq from '@/components/WoonklyFaq'
import wQuestion from '@/components/WoonklyQuestion'
import wFooter from '@/components/WoonklyFooter'
import wAcToken from '@/components/WoonklyAcquireToken'
import wDisToken from '@/components/WoonklyDistributionToken'
import wAllies from '@/components/WoonklyAllies'


export default {
  name: 'Home',
  components: {
    wDescription,
    wIcoStatus,
    wAtention,
    wWhatIs,
    wTv,
    wTeam,
    wFaq,
    wQuestion,
    wFooter,
    wAcToken,
    wDisToken,
    wAllies

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
