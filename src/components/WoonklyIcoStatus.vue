<template>
<section id="woonkly-ico-status" class="section">
  <div class="columns is-mobile is-multiline">

    <div class="column is-12 has-text-centered phase">
      <strong>
        Fase <span class="w-light-blue">2</span> (40% Bonus)
      </strong>
    </div>

    <div class="column is-12 progress is-marginless">
      <w-progress :value="90" />
    </div>

    <div class="column is-12 has-text-centered wonks-sold">
      <span class="w-light-blue is-size-7">{{wnkSold}} WNKS</span>
    </div>

    <div class="column has-text-centered">
      <w-button>Compra WNK con 30% bonus</w-button>
    </div>
    <div class="column has-text-centered">
      <w-button>Whitepaper Woonkly</w-button>
    </div>

    <div class="column is-12 counter-wrapper">
      <div class="spark-container">
        <img class="rellax" data-rellax-speed="2" src="/img/icons/glowing-line.svg" alt="Glowing Line" height="16px">
        <img class="rellax" data-rellax-speed="4" src="/img/icons/glowing-line.svg" alt="Glowing Line" height="16px">
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
      wnkSold: '9827376'
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
      bottom: 0;
      display: flex;
      display: flex;
      justify-content: space-evenly;
      transform: translateY(-0.7em);
      z-index: -1;

      img {
        &:nth-of-type(1) {
          width: 10px;
        }
        &:nth-of-type(2) {
          width: 8px;
        }
        &:nth-of-type(3) {
          width: 6px;
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

@keyframes flashing-counter {
  0%, 100% {
    box-shadow: 0px 0px 25px 4px #08c2ee;
  }
  50%, 60% {
    box-shadow: 0px 0px 15px 4px #08c2ee;
  }
}
</style>
