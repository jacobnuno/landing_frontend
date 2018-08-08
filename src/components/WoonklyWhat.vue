<template>
  <section id="woonkly-what-is" class="section">
    <img src="/img/icons/woonk-infinity.svg" alt="Woonk Inifnity" id="woonk-infinity">
    <img src="/img/icons/woonk-infinity.svg" alt="Woonk Inifnity" id="woonk-infinity2">
    <div class="columns">
      <div class="column is-12-mobile is-half-tablet what-is-woonkly">
        <figure class="image">
          <img src="/img/sections/people.svg">
        </figure>
      </div>
      <div class="column is-12-mobile is-half-tablet">
        <h3 class="title is-3">{{$t('message.woonklyWhatIs')}}</h3>

        <p class="is-small">{{$t('message.woonklyIsTheFirstPlatform')}}</p>

        <p class="extended-brief">{{$t('message.signUpInWoonkly')}}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#woonkly-what-is {
  position: relative;

  .what-is-woonkly {
    figure {
      position: relative;
      z-index: 100;
    }
  }

  #woonk-infinity {
    position: absolute;
    width: 22em;
    left: -20%;
    z-index: 10;
  }

  #woonk-infinity2 {
    position: absolute;
    bottom: 8em;
    z-index: 10;
  }

  background: #0a0830;
  padding-bottom: 5em;
  .extended-brief {
    margin-top: 1.5em;
  }
}

@media screen and (min-width: 769px){
  #woonkly-what-is {
    .what-is-woonkly {
      .image {
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}
</style>
