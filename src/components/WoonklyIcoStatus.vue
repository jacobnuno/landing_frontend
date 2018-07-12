<template>
<section id="woonkly-ico-status" class="section">
  <div class="columns is-mobile is-multiline">

    <div class="column is-12 has-text-centered phase">
      <strong>
        Fase <span>2</span> (40% Bonus)
      </strong>
    </div>

    <div class="column is-12 progress">
      <w-progress :value="90" />
      <!-- <progress class="progress is-large" value="60" max="100">60%</progress> -->
    </div>

    <div class="column has-text-centered">
      <w-button>Compra WNK con 30% bonus</w-button>
    </div>
    <div class="column has-text-centered">
      <w-button>Whitepaper Woonkly</w-button>
    </div>

    <div class="column is-12">
      <div class="counter">
        <span class="time-digit">05</span>
        <span class="colon">:</span>
        <span class="time-digit">05</span>
        <span class="colon">:</span>
        <span class="time-digit">05</span>
        <span class="colon">:</span>
        <span class="time-digit">05</span>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { counter } from '@/assets/utils/woonklyCounter'

import wProgress from '@/components/shared/WoonklyProgress'
import wButton from '@/components/shared/WoonklyButton'

export default {
  mounted () {
    counter()
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
  // background: #06062c;

  .phase {
    strong {
      color: white;
    }
  }

  div.progress {
    height: 3em;
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
      line-height: 2;
      border-radius: 50%;
      border: 2px #08c2ee solid;
      display: inline-block;
      height: 2.5em;
      width: 2.5em;
      position: relative;
      box-shadow: 0px 0px 45px 4px #08c2ee;
      text-shadow: 0px 0px 16px #08c2ee;
    }

    .colon {
      line-height: 2em;
    }
  }
}
</style>
