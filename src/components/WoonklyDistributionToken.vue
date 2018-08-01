<template>

  <section v-observe-visibility="{ callback: visibilityChanged, intersection: { threshold: 0.25 } }" id="woonkly-dis-token" class="section">
    <div class="columns is-mobile is-multiline">

      <div class="column is-12-mobile is-6-tablet">
        <h3 class="title is-6-mobile is-1-desktop has-text-centered">Distribución de tokens</h3>
        <!-- start svg DistributionToken -->
        <distribution-token></distribution-token>
      </div>

      <div class="column is-12-mobile is-6-tablet use-funds">
        <h3 class="title is-4-mobile is-1-desktop has-text-centered">Uso de fondos</h3>
        <!-- start svg UseFunds -->
        <use-funds></use-funds>
      </div>

    </div>

    <img src="/img/icons/blue-line.svg" class="blue-line" id="blue-line-left">
    <img src="/img/icons/blue-line.svg" class="blue-line" id="blue-line-middle">
    <img src="/img/icons/blue-line.svg" class="blue-line" id="blue-line-right">


 </section>



</template>

<script>
// import vue components from src
import useFunds from '@/components/svg-components/UseFunds'
import distributionToken from '@/components/svg-components/DistributionToken'
export default {
  methods: {
    visibilityChanged (isVisible, entry) {
      if (isVisible) {
        this.$emit('currentSectionChanged', 'WoonklyDistributionToken')
      }
    }
  },
  components: {
    useFunds,
    distributionToken
  }
}
</script>

<style lang="scss">
#woonkly-dis-token {
  background: var(--woonkly-black-blue);
  position: relative;
  .blue-line {
    display: none;
  }

  .use-funds {
    flex-direction: column;
    display: flex;
    align-items: center;
    h3.title {
      margin-bottom: 3em;
    }
  }
}
// changes the css properties if the size of the screen is equal or bigger than a tablet
@media only screen and (min-width: 769px) {
  #woonkly-dis-token {
    .blue-line {
      display: inline;
    }
    #blue-line-left {
      position: absolute;
      left: 3em;
      top: 22em;
      width: .5%;
    }
    #blue-line-middle {
      position: absolute;
      left: 55em;
      top: 11em;
      width: .4%;
    }
    #blue-line-right {
      position: absolute;
      right: 11em;
      bottom: 9em;
      width: .4%;
    }
  }
}
</style>
