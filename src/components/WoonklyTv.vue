<template>
  <section id="woonkly-tv" ref="section">
  <w-divider/>
  <div class="section">
    <div class="columns is-mobile is-multiline">
      <w-cash-animate id="billetes-1" :class="{'animate':animateCash}"/>
      <w-cash-animate id="billetes-2" :class="{'animate':animateCash}"/>
      <div class="column is-12">
        <h3 class="title is-3 has-text-centered">{{$t('message.discoverWoonklyTv')}}</h3>
      </div>

      <div class="main-content-wrapper column is-12">
        <img id="line1" class="glowing-line rellax" data-rellax-speed="0.6" src="/img/icons/glowing-line.svg" alt="Line">
        <img id="line2" class="glowing-line rellax" data-rellax-speed="0.4" src="/img/icons/glowing-line.svg" alt="Line">
        <img id="line3" class="glowing-line rellax" data-rellax-speed="0.5" src="/img/icons/glowing-line.svg" alt="Line">

        <p class="brief is-size-5-tablet has-text-justified">{{$t('message.contentCreatorsAnyPlatform')}}</p>
        <figure class="image">
          <img src="/img/sections/woonkly_tv.jpg" alt="Woonkly Tv">
        </figure>
        <p class="brief is-size-5-tablet has-text-justified">{{$t('message.woonklyTvBriefs[0]')}}</p>
        <p class="brief is-size-5-tablet has-text-justified">{{$t('message.woonklyTvBriefs[1]')}}</p>
        <p class="brief is-size-5-tablet has-text-justified">{{$t('message.woonklyTvBriefs[2]')}}</p>

      </div>

    </div>
  </div>
</section>
</template>

<script>
import wCashAnimate from '@/components/svg-components/CashAnimationSVG'
import wDivider from '@/components/wavy-dividers/WoonklyWavy1'
import { throttle } from 'lodash'

export default {
  data () {
    return {
      lastScrolled: 0,
      animateCash: false
    }
  },
  components: {
    wDivider,
    wCashAnimate
  },
  methods: {
    createEventListeners () {
      window.addEventListener('scroll', throttle(() => {
        let elementOffsetTop = this.$refs.section.getBoundingClientRect().top
        let elementHeight = this.$refs.section.clientHeight
        let viewport = window.innerHeight

        let distance = ((elementOffsetTop - viewport) + elementHeight) + 66

        if (distance < 250 && distance > -250) {
          this.animateCash = true
        } else {
          this.animateCash = false
        }

      }, 600))
    }
  },
  mounted () {
    this.createEventListeners()
  }
}
</script>


<style lang="scss">
@import '../assets/scss/mixins';

#woonkly-tv {
  position: relative;

  .section {
    & > .columns.is-mobile.is-multiline {
      position: relative;
      max-width: 1300px;
      margin: 0 auto;
    }
  }

  .main-content-wrapper {
    position: relative;
    .glowing-line {
      z-index: -1;
      position: absolute;
      width: 9px;
    }
    #line1 {
      left: 2px;
      top: 25%;
    }
    #line2 {
      left: 12px;
      bottom: 6%;
    }
    #line3 {
      left: 50%;
      bottom: 1%;
      width: 6px;
    }
  }

  #billetes-1, #billetes-2 {
    position: absolute;
    z-index: -1;
  }

  #billetes-1 {
    width: 5em;
    top: 25%;
    left: -2.5em;
  }

  #billetes-2 {
    width: 8em;
    bottom: 1%;
    right: -4em;
  }

  .top-divider {
    @include divider('/img/wavy/top-divider.svg')
  }

  .brief {
    color: grey;
    margin-bottom: 0.9em;
  }

  .title {
    color: var(--woonkly-dark-blue);
  }
}

@media screen and (min-width: 769px) {
  #woonkly-tv {
    .main-content-wrapper {
      max-width: 1000px;
      margin: auto;
      .image {
        float: left;
        margin: 0 1em;
        padding: 3em;
        max-width: 400px;
        box-sizing: border-box;
      }
      .glowing-line {
        z-index: -1;
        position: absolute;
        width: 9px;
      }
      #line1 {
        left: unset;
        right: 0;
      }
    }
  }
}
</style>
