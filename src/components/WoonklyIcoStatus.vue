<template>
<section id="woonkly-ico-status" class="section">
  <div class="columns is-mobile is-multiline">

    <div class="column is-12 has-text-centered phase">
      <strong v-html="$t(pahseMsgString)"></strong>
    </div>

    <div class="column is-12 progress is-marginless">
      <w-progress :value="75" />
    </div>

    <div class="column is-12 has-text-centered wonks-sold">
      <span class="w-light-blue is-size-7">{{wnkSold}} WNKS</span>
    </div>

    <div class="column has-text-centered">
      <w-button :buttonClass="'woonkly-button-light-to-dark'" href="//woonkly.com/privateico/whitelist-private/">Woonkly ICO</w-button>
    </div>

    <div class="column has-text-centered">
      <w-button :href="$t('message.whitePaperPdf')">{{$t('message.whitepaperWoonkly')}}</w-button>
    </div>

    <div class="column is-12 counter-wrapper">
      <div class="spark-container">
        <img class="rellax" data-rellax-speed="2" src="/img/icons/glowing-line.svg" alt="Glowing Line" height="16px">
        <img class="rellax" data-rellax-speed="1" src="/img/icons/glowing-line.svg" alt="Glowing Line" height="16px">
        <img class="rellax" data-rellax-speed="2" src="/img/icons/glowing-line.svg" alt="Glowing Line" height="16px">
      </div>
      <div class="counter">
        <span class="time-digit">{{time.d}}</span>
        <span class="colon">:</span>
        <span class="time-digit">{{time.h}}</span>
        <span class="colon">:</span>
        <span class="time-digit">{{time.m}}</span>
        <span class="colon">:</span>
        <span class="time-digit">{{time.s}}</span>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { startTimer, cleanTimerInterval, determineCurrentMessage } from '@/assets/utils/woonklyCounter'

import wProgress from '@/components/shared/WoonklyProgress'
import wButton from '@/components/shared/WoonklyButton'

export default {
  data () {
    return {
      time: {},
      buttonMsgString: null,
      pahseMsgString: null,
      wnkSold: null,
      phase: 3,
      bonus: 30
    }
  },
  methods: {
    setCurrentMessage () {
      var seasons = [
      { date: 1525132800000, message: 'message.woonklyPhaseTexts[0]' },
      { date: 1527811200000, message: 'message.woonklyPhaseTexts[1]' },
      { date: 1530403200000, message: 'message.woonklyPhaseTexts[2]' },
      { date: 1535760000000, message: 'message.woonklyPhaseTexts[3]' },
      { date: 1538352000000, message: 'message.woonklyPhaseTexts[4]' },
      { date: 1541030400000, message: 'message.woonklyPhaseTexts[5]' },
      { date: 1546300800000, message: 'message.woonklyPhaseTexts[6]' }
    ]
    this.pahseMsgString = determineCurrentMessage(seasons, 'message.woonklyPhaseTexts[6]')
      var messageDates = [
        { date: 1535760000000, message: 'message.buyWoonksMessage[0]' },
        { date: 1538352000000, message: 'message.buyWoonksMessage[1]' }
      ]
      // TODO: Resolve this hardcoded string
      this.buttonMsgString = determineCurrentMessage(messageDates, this.$t('message.icoHasEnded'))
    },
    getCurrentSoldWoonks () {
      fetch('https://www.woonklypanel.com/woonkly')
        .then(res => {
          if (res.status === 200) {
            return res.json()
          }
          this.wnkSold = 13976913
        })
        .then(json => {
          this.wnkSold = Math.floor(parseFloat(json.tokens))
        })
    }
  },
  mounted () {
    var timeStamps = [
      1525132800000,
      1527811200000,
      1530403200000,
      1535760000000,
      1538352000000,
      1541030400000,
      1546300800000
    ]
    // The first parameter is an array containing all the step dates
    // The second parameter is to update the local time object
    startTimer(timeStamps, (t) => { this.time = t })
    this.setCurrentMessage()
    this.getCurrentSoldWoonks()
  },
  destroyed () {
    cleanTimerInterval()
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
  // background: #06062c

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
      top: 0;
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
          animation-delay: 500ms;
        }
        &:nth-of-type(3) {
          animation-delay: 1000ms;
        }
        &:nth-of-type(5) {
          animation-delay: 1500ms;
        }
        &:nth-of-type(7) {
          animation-delay: 2000ms;
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
    box-shadow: 0px 0px 25px 4px #08c2ee;
  }
  50%, 60% {
    box-shadow: 0px 0px 15px 4px #08c2ee;
  }
}
</style>
