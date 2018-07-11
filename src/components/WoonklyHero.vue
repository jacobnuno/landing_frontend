<template>
<section id="woonkly-description" class="hero">
  <div id="wavy-background"></div>
  <div class="wrapper">
    <img id="main-image" src="/img/sections/woonkly-main-2.svg" alt="Woonkly Main Illustration">
    <img class="woonkzalo" src="/img/sections/front-standing-woonkzalo.png" alt="Woonkzalo">
    <img class="circle" src="/img/icons/gradient-circle-2.svg" alt="Woonkly Circle">
  </div>
  <div class="titles section">
    <h1 class="title">Gana dinero por ver, compartir e interactuar con contenido digital</h1>
    <h2 class="subtitle has-text-weight-light">Conectando creadores de contenido, anunciantes y personas de la mejor forma posible.</h2>
  </div>
</section>
</template>

<style lang="scss">
#woonkly-description {
  margin-top: 52px;
  min-height: calc( 100vh - 52px );
  background-image: var(--woonkly-radial-gradient-1);
  position: relative;

  #wavy-background {
    position: absolute;
    z-index: 1;
    top: 52px;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(/img/wavy/main-wavy.svg);
    background-repeat: no-repeat;
    background-size: 100% 85%;
    background-position: center bottom;
  }

  .wrapper {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

    #main-image {
      position: relative;
      z-index: 10;
      margin-top: 5em;
      width: 100%;
    }

    .woonkzalo {
      position: relative;
      margin-left: 4em;
      margin-top: -4em;
      z-index: 10;
      width: 12em;
    }

    .circle {
      position: absolute;
      z-index: 10;
      left: 2em;
      width: 2em;
    }
  }
  
  .titles {
    position: relative;
    z-index: 10;
    .subtitle { color: white }
  }
}
</style>
