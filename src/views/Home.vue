<template>
<section id="woonkly-home">
  <w-description @currentSectionChanged="changeCurrentSection"/>
  <w-atention/>
  <w-what-is/>
  <w-tv/>
  <w-Benefits/>
  <w-ac-token/>
  <w-dis-token @currentSectionChanged="changeCurrentSection"/>
  <w-roadmap @currentSectionChanged="changeCurrentSection"/>
  <w-team @currentSectionChanged="changeCurrentSection"/>
  <w-allies/>
  <w-faq @currentSectionChanged="changeCurrentSection"/>
  <w-question/>
  <w-footer/>
</section>
</template>

<script>
// @ is an alias to /src
import wDescription from '@/components/WoonklyHero'
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
import wRoadmap from '@/components/WoonklyRoadmap'




export default {
  name: 'Home',
  components: {
    wDescription,
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
    wRoadmap,
    wDisToken,
    wAllies
  },
  methods: {
    changeCurrentSection ($event) {
      this.$emit('userEnteredSection', $event)
    }
  }
}
</script>

<style>
#woonkly-home {
  color: white;
}
</style>
