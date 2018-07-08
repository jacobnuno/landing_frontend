<template>
<section id="woonkly-home">
  <w-description/>
  <w-ico-status/>
  <w-atention/>
  <w-what-is/>
  <w-tv/>
<<<<<<< HEAD
  <w-ac-token/>
  <w-dis-token/>
=======
>>>>>>> 0fc6951db772e2a504dfe8b4c1e7b8a77d540eb4
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
<<<<<<< HEAD
import wAcToken from '@/components/WoonklyAcquireToken'
import wDisToken from '@/components/WoonklyDistributionToken'
=======
>>>>>>> 0fc6951db772e2a504dfe8b4c1e7b8a77d540eb4


export default {
  name: 'home',
  components: {
    wDescription,
    wIcoStatus,
    wAtention,
    wWhatIs,
    wTv,
<<<<<<< HEAD
    wFaq,
    wAcToken,
    wDisToken
=======
    wFaq
>>>>>>> 0fc6951db772e2a504dfe8b4c1e7b8a77d540eb4
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
