<template>
  <section id="woonkly-allies">
    <w-divider/>
    <div class="section">
      <span class="is-size-1-desktop is-size-5-mobile">ALIADOS TECNOLÓGICOS</span>
      <div class="black-line"></div>
      <!-- static circle decoration svg  -->
      <img class="rellax" data-rellax-speed="-0.1" src="/img/icons/gradient-circle1.svg" id="gradient-circle-left">
      <!-- static images  -->
      <figure>
        <img id ="plugandplay" src="/img/icons/plugandplay.png">
      </figure>
      <figure>
        <img id="unitedcoin" src="/img/icons/unitedcoin.png">
      </figure>
      <span class="is-size-1-desktop is-size-5-mobile has-text-centered">VISTO EN</span>
      <div class="black-line"></div>
      <!-- static images  -->
      <div class="seen-on">
        <figure>
          <img id="forbes" src="/img/icons/forbes.png">
        </figure>
        <figure>
            <img id="cointelegraph" src="/img/icons/cointelegraph.png">
        </figure>
        <figure>
          <img id="wbf" src="/img/icons/wbf.png">
        </figure>
        <figure>
          <img id="bef-logo" src="/img/icons/bef.svg">
        </figure>
      </div>
      <!-- static circle decoration svg  -->
      <img class="rellax" data-rellax-speed="0.4" src="/img/icons/gradient-circle1.svg" id="gradient-circle-right">
    </div>
  </section>
</template>

<script>
import wDivider from '@/components/wavy-dividers/WoonklyWavy3'

export default {
  components: {
    wDivider
  }
}
</script>

<style lang="scss">
#woonkly-allies {
  color: var(--woonkly-black-blue);
  text-align: center;
  position: relative;
  padding-bottom: 3em;
  // overflow: hidden;

  .black-line {
    height: 3em;
    width: 1px;
    background-color: var(--woonkly-black-blue);
    margin: 1em auto 0;
  }

  #gradient-circle-left {
    position: absolute;
    top: 2em;
    right: 13em;
    width: 14em;
  }

  #gradient-circle-right {
    position: absolute;
    bottom: 1em;
    transform: translateX(90%);
    width: 7em;
  }

  #plugandplay {
    max-width: 80%;
  }
  #unitedcoin {
    max-width: 80%;
  }
  #forbes {
    max-width: 60%;
  }
  #cointelegraph {
    max-width: 60%;
  }
  #wbf {
    max-width: 50%;
    margin: 1em;
  }
  #bef-logo {
    max-width: 40%;
  }
}

// changes the css properties if the size of the screen is equal or bigger than a tablet
@media only screen and (min-width: 769px) {
  #woonkly-allies {
    padding-bottom: 7em;

    .seen-on {
      display: flex;
      justify-content: space-between;
      & > * {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    #plugandplay {
      max-width: 30%;
    }

    #unitedcoin {
      max-width: 30%;
    }
    #gradient-circle-left {
      top: -27%;
      left: -36em;
      width: 60em;
    }

    #gradient-circle-right {
      bottom: -2%;
      width: 20em;
      right: -10em;
    }
  }
}
</style>
