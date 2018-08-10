<template>
<section id="woonkly-ico-status" class="section">
  <div class="columns is-mobile is-multiline">

    <div class="column is-12 has-text-centered phase is-size-4-tablet">
      <strong v-html="$t('message.icoPhaseBonus', {phase, bonus} )"></strong>
      <span class="w-light-blue is-size-4-tablet">{{wnkSold}} WNKS</span>
    </div>

    <div class="column is-12 progress is-marginless">
      <w-progress :value="90" />
    </div>

    <div class="column has-text-centered">
      <w-button>{{$t('message.buyWithBonus', {bonus} )}}</w-button>
    </div>
    <div class="column has-text-centered">
      <w-button>{{$t('message.whitepaperWoonkly')}}</w-button>
    </div>

    <div class="column is-12 counter-wrapper">
      <div class="spark-container">
        <img class="rellax" data-rellax-speed="2" src="/img/icons/glowing-line.svg" alt="Glowing Line" height="16px">
        <img class="rellax" data-rellax-speed="1" src="/img/icons/glowing-line.svg" alt="Glowing Line" height="16px">
        <img class="rellax" data-rellax-speed="2" src="/img/icons/glowing-line.svg" alt="Glowing Line" height="16px">
      </div>
      <div class="counter">
        <span class="time-digit">{{time.days}}</span>
        <span class="colon">:</span>
        <span class="time-digit">{{time.hours}}</span>
        <span class="colon">:</span>
        <span class="time-digit">{{time.minutes}}</span>
        <span class="colon">:</span>
        <span class="time-digit">{{time.seconds}}</span>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { counter, cleanInterval } from '@/assets/utils/woonklyCounter'

import wProgress from '@/components/shared/WoonklyProgress'
import wButton from '@/components/shared/WoonklyButton'

export default {
  data () {
    return {
      time: {},
      wnkSold: '9827376',
      phase: 3,
      bonus: 30
    }
  },
  methods: {
    setTimeOnThisContext (timeObject) {
      this.time = timeObject
    }
  },
  mounted () {
    counter(this.setTimeOnThisContext)
  },
  destroyed () {
    cleanInterval()
  },
  components: {
    wButton,
    wProgress
  }
}
</script>


<style lang="scss">
#woonkly-ico-status {
  margin-left: -1.5rem;
  margin-right: -1.5rem;

  .phase {
    strong {
      color: white;
    }
  }

  div.progress {
    height: 3em;
  }

  .wonks-sold {
    padding-top: 0;
    padding-left: 2em;
  }

  .counter-wrapper {
    position: relative;

    .spark-container {
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10em;
      display: flex;
      justify-content: space-between;
      transform: translateY(-5em);
      z-index: -1;

      img {
        width: 2px;
        &:first-of-type {
          margin-left: 2.5em;
        }
        &:last-of-type {
          margin-top: 1em;
          margin-right: 2.5em;
        }
      }
    }

    .counter {
      margin-top: 1em;
      margin-left: auto;
      margin-right: auto;
      color: #00a0ca;
      font-size: 20px;
      display: flex;
      justify-content: space-between;

      .time-digit {
        position: relative;
        text-align: center;
        line-height: 2.3em;
        border-radius: 50%;
        border: 2px #08c2ee solid;
        display: inline-block;
        height: 2.5em;
        width: 2.5em;
        position: relative;
        text-shadow: 0px 0px 16px #08c2ee;
        animation: flashing-counter 2s ease infinite alternate;

        &::after {
          content: "";
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          border: 1px solid var(--woonkly-light-blue-quarter-opacity);
          border-radius: 50%;
        }

        &:nth-of-type(1) {
          animation-delay: 200ms;
        }
        &:nth-of-type(3) {
          animation-delay: 400ms;
        }
        &:nth-of-type(5) {
          animation-delay: 600ms;
        }
        &:nth-of-type(7) {
          animation-delay: 800ms;
        }
      }

      .colon {
        line-height: 2em;
      }
    }
  }
}

@media screen and (min-width: 769px) {
  #woonkly-ico-status {

    .counter-wrapper {

      .spark-container {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -14em;
        display: flex;
        justify-content: space-between;
        transform: translateY(-0.7em);
        z-index: -1;

        img {
          &:first-of-type {
            margin-left: -4em;
          }
          &:last-of-type {
            margin-right: -4em;
          }
        }

      }
    }
  }
}

@keyframes flashing-counter {
  0%, 100% {
    box-shadow: 0px 0px 85px 4px #08c2ee;
  }
  50%, 60% {
    box-shadow: 0px 0px 15px 4px #08c2ee;
  }
}
</style>
