<template>
  <section id="woonkly-question" class="section">

    <h3 class="title is-5">DUDAS</h3>

    <div class="line"></div>

    <p class="is-small space">
        Si quieres más información estamos a tu disposición para resolverte las dudas que puedan sugerirte.
    </p>

    <div class="columns is-mobile woonkly-container">
      <div class="column is-6">
        <fai :icon="['far', 'envelope']" class="icons" />
        <span class="is-small woonkly-span">info@woonkly.com</span>
      </div>
      <div class="column is-6">
        <fai :icon="['fab', 'telegram-plane']" class="icons" />
        <a href="https://t.me/joinchat/Hu8281CBxcNDycg10WZKLw">
          <span class="is-small woonkly-span">Únete al grupo de Telegram</span>
        </a>
      </div>
    </div>

    <w-input w-placeholder="Tu Nombre"></w-input>
    <w-input w-placeholder="Tu Email"></w-input>
    <w-input w-placeholder="Tu Mensaje"></w-input>
    <button type="button" class="w-button has-text-uppercase">Contactar ahora</button>
    <img src="/img/icons/gradient-circle1.svg" id="gradient-circle1">

    <span class="w-span">DUDAS</span>

  </section>
</template>

<script>
import wInput from '@/components/shared/WoonklyInput'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/fontawesome-free-regular'
import { faTelegramPlane } from '@fortawesome/fontawesome-free-brands'
library.add(faEnvelope)
library.add(faTelegramPlane)

export default {
  components: {
    wInput
  }
}
</script>

<style lang="scss">
  #woonkly-question {
    background: #0a0830;
    text-align: center;
    position: relative;
    overflow: hidden;

    & > div.title:nth-of-type(1) {
      margin: 3em 0 0 0;
    }

    .line {
      height: 25px;
      width: 1px;
      background-color: #00d2ff;
      margin: 10px auto;
    }

    .space {
      margin: 20px;
    }

    .woonkly-container {
      font-size: smaller;
      line-height: 1;

      .icons {
        color: #00d2ff;
        margin-right: 5px;
      }

      .woonkly-span {
        color: white;
      }
    }

    .w-button {
      margin:3em 0.3em;
      background: #06062c;
      color: #00d3ff;
      line-height: 1.5em;
      height: 4.5em;
      width: 14em;
      border: 1px #00d3ff solid;
      border-radius: 3em;
      font-size: .5rem;
    }

    #gradient-circle1 {
      position: absolute;
      bottom: 1.5em;
      transform: translateX(35%);
    }

    .w-span {
      font-weight: bold;
      position: absolute;
      right: 0;
      left: 0;
      display: inline-block;
      opacity: 0.06;
      font-size: 6.2em;
      top: 0;
      line-height: 1.4;
    }
  }
</style>
