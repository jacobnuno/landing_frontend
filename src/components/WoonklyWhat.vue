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
        <h3 class="title is-3">¿Qué es Woonkly?</h3>

        <p class="is-small">
          Woonkly es la primera plataforma que paga a las personas por ver y compartir contenido digital (vídeo, imagen y texto) de diferentes plataformas.
        </p>

        <p class="extended-brief">
          El registro en woonkly es gratuito tanto para creadores de contenido como para usuarios. Los creadores de contenido pueden enlazar en woonkly sus vídeos, imágenes o posts de diferentes plataformas de manera gratuita para con ello conseguir más exposición o si lo prefieren pueden pagarle a su público objetivo usando nuestra criptomoneda “woonk” para conseguir miles e incluso millones de visualizaciones o interactuaciones en cuestión de horas, minutos o incluso segundos.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#woonkly-what-is {
  position: relative;

  #woonk-infinity {
    position: absolute;
    width: 22em;
    left: -20%;
  }

  #woonk-infinity2 {
    position: absolute;
    bottom: 8em;
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
