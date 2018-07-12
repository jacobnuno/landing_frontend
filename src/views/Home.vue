<template>
<section id="woonkly-home">
  <w-description/>
  <w-ico-status/>
  <w-atention/>
  <w-what-is/>
  <w-tv/>
  <w-Benefits/>
  <w-team/>
  <w-ac-token/>
  <w-dis-token/>
  <w-allies/>
  <w-token-distribution/>
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
import wBenefits from '@/components/woonkly-benefits/WoonklyBenefits'
import wQuestion from '@/components/WoonklyQuestion'
import wFooter from '@/components/WoonklyFooter'
import wAcToken from '@/components/WoonklyAcquireToken'
import wDisToken from '@/components/WoonklyDistributionToken'
import wAllies from '@/components/WoonklyAllies'
import wTokenDistribution from '@/components/WoonklyDistributionToken'



export default {
  name: 'Home',
  components: {
    wDescription,
    wIcoStatus,
    wAtention,
    wWhatIs,
    wTv,
    wFaq,
    wBenefits,
    wTeam,
    wFaq,
    wQuestion,
    wFooter,
    wAcToken,
    wDisToken,
    wAllies,
    wTokenDistribution


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
