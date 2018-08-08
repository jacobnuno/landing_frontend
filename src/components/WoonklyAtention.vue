<template>
  <section id="woonkly-atention" class="section">
    <img id="woonkly-moon" class="rellax glowing-circle" data-rellax-speed="-0.5" src="/img/icons/gradient-circle-2.svg" alt="Woonkly Moon">
    <img id="triangle" src="/img/icons/transparent-triangle.svg" alt="Woonkly triangle">
    <div class="columns">
      <div class="column is-12-mobile is-half-tablet atention">
        <div class="wrapper">
          <h3 class="title is-3">{{$t('message.attentionValue')}}</h3>
          <p>{{$t('message.contentCreators')}}</p>
        </div>
      </div>
      <div class="column is-12-mobile is-half-tablet">
        <w-video-frame/>
      </div>
    </div>
  </section>
</template>

<script>
import wVideoFrame from '@/components/shared/WoonklyVideoFrame'

export default {
  name: 'WoonklyAtention',
  components: {
    wVideoFrame
  }
}
</script>

<style lang="scss">
#woonkly-atention {
  position: relative;

  .columns {
    & > .atention {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .title {
      position: relative;
      z-index: 10;
    }
  }
  #woonkly-moon {
    z-index: 1;
    width: 7em;
    position: absolute;
    left: -22%;
  }

  #triangle {
    position: absolute;
    width: 8em;
    left: 2em;
  }

  background: #07062c;

  a.view-video {
    display: flex;
    align-items: center;
    margin: 1em 0;
  }
}

@media screen and (min-width: 769px) {
  #woonkly-atention {

    #woonkly-moon {
      left: -5em;
    }

    .columns {
      & > .atention {
        align-items: flex-end;
        .wrapper {
          max-width: 500px;
        }
      }
    }

  }
}
</style>
