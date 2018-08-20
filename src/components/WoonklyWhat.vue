<template>
  <section id="woonkly-what-is" class="section">
    <img src="/img/icons/woonk-infinity.svg" alt="Woonk Inifnity" id="woonk-infinity">
    <img src="/img/icons/woonk-infinity.svg" alt="Woonk Inifnity" id="woonk-infinity2">
    <div class="columns">
      <div class="column is-12-mobile is-half-tablet what-is-woonkly">
        <figure class="image">
          <img class="platform" src="/img/sections/woonkly-platform.svg" alt="Platform">
          <div class="jumping-woonkzalo">
            <img class="stopped" src="/img/sections/woonkzalo-standing.png" alt="Woonkzalo">
            <img class="jumping" src="/img/sections/woonkzalo-jumping.png" alt="Woonkzalo">
          </div>
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
      padding-top: 3em;

      .jumping-woonkzalo {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;

        animation: jumping 3s cubic-bezier(.86,0,.07,1) infinite alternate;

        img {
          width: 100%;
        }

        .stopped {
          animation: fade-out 3s ease-in-out infinite alternate-reverse;
        }

        .jumping {
          position: absolute;
          left: 0;
          top: 0;

          animation: fade-out 3s ease-in-out infinite alternate;
        }
      }
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

@media screen and (min-width: 769px) {
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

@media screen and (min-width: 930px) {
  #woonkly-what-is {
    padding-bottom: 11em;
    & > .columns {
      max-width: 1300px;
      margin: 0 auto;
      .what-is-woonkly + div {
        margin-top: -5.5em;
      }
    }
  }
}

@keyframes jumping {
  from {
    transform: translateY(-25%);
  }
  to {
    transform: translateY(5%);
  }
}

@keyframes fade-out {
  0%, 50% {
    opacity: 1;
  }
  53%, 100% {
      opacity: 0;
  }
}
</style>
