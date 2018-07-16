<template>
<section id="woonkly-description" class="hero">
  <div class="columns is-mobile is-multiline">
    <div class="column is-12-mobile is-half-tablet wrapper">
      <div id="wavy-background"></div>
      <img id="main-image" src="/img/sections/woonkly-illustration-2.svg" alt="Woonkly Main Illustration">
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
import wIcoStatus from '@/components/WoonklyIcoStatus'

export default {
  components: {
    wIcoStatus
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

    // TODO: Correct wavy background
    // #wavy-background {
    //   position: absolute;
    //   z-index: 1;
    //   top: 52px;
    //   left: 0;
    //   right: 0;
    //   bottom: 0;
    //   background-image: url(/img/wavy/main-wavy.svg);
    //   background-repeat: no-repeat;
    //   background-size: 100% 85%;
    //   background-position: center bottom;
    // }

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
    .subtitle { color: white }
  }
}

@media (min-width: 769px) {
  #woonkly-description {
    & > .columns {

      & > .column {
        &:nth-of-type(1) {
          order: 2;
        }
        &:nth-of-type(2) {
          order: 1;
          #woonkly-ico-status {
            max-width: 400px;
            margin: auto;
          }
        }
      }
    }
  }
}
</style>
