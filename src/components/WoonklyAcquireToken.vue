<template>
<section id="woonkly-ac-token">
  <w-divider/>
  <div class="section">
    <img src="/img/icons/linea_luz.svg" id="blue-line-left" alt="Woonkly blue line">

    <div class="is-size-4-mobile is-size-2-tablet has-text-centered is-uppercase">{{$t('message.acquireTokens')}}</div>
    <div class="columns">
      <div class="column is-12-mobile is-4-tablet is-offset-2-tablet">
        <p class="has-text-left is-size-7-mobile is-size-6-tablet is-3-tablet w-p">
          {{$t('message.withTheObjectiveOf')}}
        </p>
        <ul>
          <li v-for="index in 6" :key="index" class="list-tkn">
            <img v-if="isDone($t('message.acquireTokensFirstList['+(index-1)+'].endTime'))" src="/img/icons/bullet-done.svg" class="bullet" alt="Woonkly bullet">
            <object v-else-if="isInProgress()" data="/img/icons/bullet-in-progress.svg" type="image/svg+xml" class="bullet-in-progress">
              <img src="/img/icons/group.svg" alt="Woonkly Bullet In Progress"/>
            </object>
            <img v-else src="/img/icons/group.svg" class="bullet" alt="Woonkly bullet">
            <p>
            </p>
            <div>
              <div class="is-size-6-mobile is-size-4-tablet">{{ $t('message.acquireTokensFirstList['+(index-1)+'].title') }}</div>
              {{ $t('message.acquireTokensFirstList['+(index-1)+'].content') }}
            </div>
          </li>
        </ul>
      </div>
      <div class="column is-12-mobile is-6-tablet is-offset-1-tablet w-div-right">
        <ul>
          <li v-for="index in 6" :key="index" class="list-tkn">
            <img src="/img/icons/infinite-bullet.svg" class="bullet" alt="Woonkly bullet">
            <div>
              <div class="is-size-6-mobile is-size-4-tablet">{{ $t('message.acquireTokenSecondList['+(index-1)+'].title') }}</div>
              {{ $t('message.acquireTokenSecondList['+(index-1)+'].content') }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <img src="/img/icons/linea_luz.svg" id="blue-line-right" alt="Woonkly blue line">
    <img src="/img/icons/ilustracion.svg" id="blue-cube" alt="Woonkly blue cube">
  </div>
</section>
</template>

<script>
import wDivider from '@/components/wavy-dividers/WoonklyWavy2'

let allDatesDone = 0

export default {
  methods: {
    isDone (textTimestamp) {
      textTimestamp = parseInt(textTimestamp)
      let localDate = new Date()
      let utcDate = Math.floor(localDate.valueOf() / 1000) - (localDate.getTimezoneOffset() * 60)
      if (textTimestamp > utcDate) {
        allDatesDone++
      }
      return textTimestamp < utcDate
    },
    isInProgress () {
      return allDatesDone === 1
    }
  },
  components: {
    wDivider
  }
}
</script>

<style lang="scss" scope>
#woonkly-ac-token {

  & > div.section {
    overflow-x: hidden;
    position: relative;
    background: var(--woonkly-black-blue);
  }

  .extended-brief {
    margin-top: 1.5em;
  }

  #blue-line-left {
    position: absolute;
    transform: translate(-30%, -45%);
    width: 6em;
  }

  #blue-line-right {
    position: absolute;
    transform: translate(55%, -170%);
    width: 14em;
  }

  #blue-cube {
    position: absolute;
    transform: translate(74%, -88%);
    width: 12em;
  }

  .bullet {
    max-width: 10%;
  }

  .list-tkn {
    display: flex;
    align-items: center;
    margin: 1em;
    text-align: left;
    position: relative;
    .bullet {
      margin-right: 0.7em;
    }

    .bullet-in-progress {
      margin-right: 0.7em;
      display: inline-block;
      width: 1em;
      height: 1em;
    }
  }

  .w-p {
    margin: 1em 0 4em;
  }

}

// changes the css properties if the size of the screen is equal or bigger than a tablet
@media only screen and (min-width: 769px) {
  #woonkly-ac-token {
    .bullet {
      max-width: 5%;
    }
    .w-div-right {
      margin-top: 4em;
    }
    #blue-line-left {
      transform: translate(12%, -13%);
      width: 16em;
    }

    #blue-line-right {
      transform: translate(290%, -90%);
      width: 16em;
    }

    #blue-cube {
      transform: translate(220%, -105%);
      width: 30em;
    }
  }
}

@media screen and (min-width: 1490px) {
  #woonkly-ac-token {

    #blue-cube {
      transform: translate(250%, -105%);
      width: 30em;
    }

  }
}

@media screen and (min-width: 1820px) {
  #woonkly-ac-token {

    #blue-cube {
      transform: translate(280%, -105%);
      width: 30em;
    }

  }
}

</style>
