<template>
  <section id="woonkly-faq" class="section">

    <div class="title is-5 has-text-uppercase">Preguntas Frecuentes</div>

    <div class="line"></div>

    <p class="is-small">
        Si tienes dudas aquí te las intentaremos resolver, y si no encuentras la solución a tu pregunta siempre puedes contactarnos a contacto@woonkly.com
    </p>

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

    <div>
      <span class="w-span">PRE</span>
    </div>

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

  & > div.title:nth-of-type(1) {
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
    line-height: 1.1;
  }
}
</style>
