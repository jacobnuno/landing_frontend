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
  
</section>
</template>

<script>
// @ is an alias to /src
import wDescription from '@/components/WoonklyHero'
import wAtention from '@/components/WoonklyAtention'
import wWhatIs from '@/components/WoonklyWhat'
import wTv from '@/components/WoonklyTv'
import wTeam from '@/components/woonkly-team/WoonklyTeam'
import wBenefits from '@/components/woonkly-benefits/WoonklyBenefits'
import wQuestion from '@/components/WoonklyQuestion'
import wDisToken from '@/components/WoonklyDistributionToken'
import wAllies from '@/components/WoonklyAllies'
import wRoadmap from '@/components/WoonklyRoadmap'

/*---REMOVED BECAUSE ICO ENDED--*/
/*---
  If you want to restore one of this
  component, add it to the components
  down below

  import wFaq from '@/components/WoonklyFaq'
  import wAcToken from '@/components/WoonklyAcquireToken'
---*/ 

export default {
  name: 'Home',
  components: {
    wDescription,
    wAtention,
    wWhatIs,
    wTv,
    wBenefits,
    wTeam,
    wQuestion,
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
