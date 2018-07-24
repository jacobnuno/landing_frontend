<template>
<section id="woonkly-description" class="hero">
  <div id="wavy-background-desktop"></div>
  <div class="columns is-mobile is-multiline">
    <div class="column is-12-mobile is-half-tablet wrapper">
      <div id="wavy-background"></div>
      <w-path-animation/>
      <w-people-animation/>
      <!-- <img id="main-image" src="/img/sections/woonkly-illustration-2.svg" alt="Woonkly Main Illustration"> -->
      <img id="main-image" src="/img/sections/woonkly-illustration-final.svg" alt="Woonkly Main Illustration">
      <img class="circle" src="/img/icons/gradient-circle-2.svg" alt="Woonkly Circle">
    </div>
    <div class="column is-12-mobile is-half-tablet titles section">
      <h1 class="title">Gana dinero por ver, compartir e interactuar con contenido digital</h1>
      <h2 class="subtitle has-text-weight-light">Conectando creadores de contenido, anunciantes y personas de la mejor forma posible.</h2>
      <w-ico-status/>
    </div>
  </div>
</section>
</template>

<script>
import wPeopleAnimation from '@/components/shared/WoonklyPeople'
import wPathAnimation from '@/components/shared/WoonklyMainAnimation'
import wIcoStatus from '@/components/WoonklyIcoStatus'

export default {
  components: {
    wIcoStatus,
    wPathAnimation,
    wPeopleAnimation
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

    #people-svg { // woonkly animated people
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
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(/img/wavy/main-wavy.svg);
      background-repeat: no-repeat;
      background-size: 100% 85%;
      background-position: center bottom;
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

      #people-svg { // Animated people
        position: absolute;
        display: block;
        margin-top: 50%;
        transform: translateY(-50%) scale(1.4);
      }

      .circle {
        top: 40%;
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
