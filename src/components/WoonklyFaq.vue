<template>
  <section id="woonkly-faq" class="section">
    <div>
      <span class="w-span">PREGUNTAS</span>
    </div>

    <div class="title is-size-1-desktop is-size-5-mobile is-uppercase">Preguntas Frecuentes</div>

    <div class="line"></div>

    <div class="columns is-mobile is-multiline">
      <div class="column is-12-mobile is-half-tablet is-half-desktop is-offset-3-tablet is-offset-3-desktop is-small is-size-5-desktop">
        Si tienes dudas aquí te las intentaremos resolver, y si no encuentras la solución a tu pregunta siempre puedes contactarnos a contacto@woonkly.com
      </div>
    </div>

    <w-gradient-button class="green-blue has-text-uppercase" back-text="USU">
      Usuarios
    </w-gradient-button>

    <w-gradient-button class="pink-orange has-text-uppercase" back-text="ANU">
      Anunciantes
    </w-gradient-button>

    <w-gradient-button class="blue-purple has-text-uppercase" back-text="PRE">
      Pre-Ico & ico
    </w-gradient-button>

    <w-collabsible collapsible-id="singUp">
      <template slot="label">
        ¿Comó puedo registrarme en Woonkly?
      </template>
      <template slot="content">
        Some text
      </template>
    </w-collabsible>

    <w-collabsible collapsible-id="cost">
      <template slot="label">
        ¿Tendrá algún costo acceder a Woonkly?
      </template>
      <template slot="content">
        Second text
      </template>
    </w-collabsible>

    <w-collabsible collapsible-id="questions">
      <template slot="label">
        ¿Qué hago si tengo preguntas?
      </template>
      <template slot="content">
        Puedes contactarnos en cualquier momento por redes sociales o por correo a contacto@woonkly.com
      </template>
    </w-collabsible>

  </section>
</template>

<script>
import wGradientButton from '@/components/shared/WoonklyGradientButton'
import wCollabsible from '@/components/shared/WoonklyCollabsible'

export default {
  components: {
    wGradientButton,
    wCollabsible
  }
}
</script>

<style lang="scss">
#woonkly-faq {
  background: #0a0830;
  text-align: center;
  position: relative;

  & > div.title:nth-of-type(2) {
    margin: 3em 0 0 0;
  }

  .woonkly-gradient-button {
    margin: 0.5em 0;
    margin: 1em 1em 1em 1em;
  }

  .line {
      height: 35px;
      width: 1px;
      background-color: #00ffff;
      margin: auto;
      margin-bottom: 10px;
  }

  .w-span {
    font-weight: bold;
    position: absolute;
    right: 0;
    display: inline-block;
    opacity: 0.06;
    font-size: 12em;
    top: 0;
    line-height: .8;
    left: 0;
  }
}
@media only screen and (min-width: 769px) {
  #woonkly-faq {
    .w-span {
      font-size: 19em;
      line-height: 1.5;
    }
    .woonkly-gradient-button {
      margin: 3em 1em 3em 1em;
    }
    .line {
        height: 4em;
        margin-bottom: 4em;
    }
    & > div.title:nth-of-type(2) {
      margin-top: 3em;
    }
  }
}
</style>
