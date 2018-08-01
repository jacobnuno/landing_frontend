<template>
<section v-observe-visibility="{ callback: visibilityChanged, intersection: { threshold: 0.25 } }" id="woonkly-description" class="hero">
  <div id="wavy-background-desktop"></div>
  <div class="columns is-mobile is-multiline">
    <div class="column is-12-mobile is-half-tablet wrapper">
      <div id="wavy-background"></div>
      <img id="main-image" src="/img/sections/woonkly-illustration-final3.svg" alt="Woonkly Main Illustration">
      <object id="woonkly-animation" :data="require('@/assets/svg/woonkly-animation.svg')" type="image/svg+xml"></object>
      <img class="circle rellax glowing-circle" data-rellax-speed="1" src="/img/icons/gradient-circle-2.svg" alt="Woonkly Circle">
    </div>
    <div class="column is-12-mobile is-half-tablet titles section">
      <h1 class="title">{{$t('message.earnMoney')}}</h1>
      <h2 class="subtitle has-text-weight-light">{{$t('message.connectingCreators')}}</h2>
      <w-ico-status/>
    </div>
  </div>
</section>
</template>

<script>
import wIcoStatus from '@/components/WoonklyIcoStatus'

export default {
  data () {
    return {
      isPathAnimationStarted: false
    }
  },
  components: {
    wIcoStatus
  },
  methods: {
    triggerAnimation () {
      this.isPathAnimationStarted = true
      setTimeout(() => { this.isPathAnimationStarted = false }, 1500)
    },
    visibilityChanged (isVisible, entry) {
      if (isVisible) {
        this.$emit('currentSectionChanged', 'WoonklyHero')
      }
    }
  }
}
</script>


<style lang="scss">
#woonkly-description {
  min-height: 100vh;
  background-image: var(--woonkly-radial-gradient-1);
  position: relative;

  .wrapper {
    position: relative;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

    #woonkly-paths { // woonkly animated paths
      position: absolute;
      width: 100%;
      left: 0;
      z-index: 1000;
      top: 5em;
    }

    #woonkly-animation { // woonkly animated people
      position: absolute;
      width: 100%;
      left: 0;
      z-index: 1000;
      top: 5em;
    }

    #wavy-background {
      position: absolute;
      z-index: 1;
      top: 52px;
      left: -1em;
      right: 0;
      bottom: 0;
      background-image: url(/img/wavy/main-wavy.svg);
      background-repeat: no-repeat;
      background-size: cover;
    }

    #main-image {
      position: relative;
      z-index: 10;
      margin-top: 5em;
      width: 100%;
    }

    .circle {
      position: absolute;
      z-index: 10;
      left: 3em;
      bottom: 1em;
      width: 2em;
    }
  }

  .titles {
    position: relative;
    z-index: 10;
    background: var(--woonkly-gradient-to-bottom);
    .subtitle { color: white }

    & > h1 + h2 { margin-top: 1em }
  }
}

@media (min-width: 769px) {
  #woonkly-description {
    padding: 4em;

    .titles {
      background:   none;
    }

    #wavy-background-desktop {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      bottom: 0;
      background-image: url(/img/wavy/main-wavy-desktop.svg);
      background-repeat: no-repeat;
      background-position: 100% 100%;
      background-size: 80% 100%;
    }

    .wrapper {
      position: relative;

      // TODO: Wavy divider on desktop
      #wavy-background { display: none }

      #main-image {
        display: block;
        margin-top: 50%;
        transform: translateY(-25%) scale(1.4);
      }

      #woonkly-paths { // Animated paths with cash and woonklys
        position: absolute;
        display: block;
        margin-top: 50%;
        transform: translateY(-50%) scale(1.4);
      }

      #woonkly-animation { // Animated people
        position: absolute;
        display: block;
        margin-top: 50%;
        transform: translateY(-50%) scale(1.4);
      }

      .circle {
        top: 50%;
        left: -50vw;
      }

    }

    & > .columns {

    & > .column {
        &:nth-of-type(1) {
          order: 2;
        }
        &:nth-of-type(2) {
          order: 1;
          #woonkly-ico-status {
            max-width: 550px;
            margin: auto;
          }
        }
      }
    }
  }
}
</style>
