<template>
  <section id="woonkly-allies" class="section">
    <span class="is-size-1-desktop is-size-5-mobile">ALIADOS TECNOLÓGICOS</span>

    <div class="black-line"></div>

    <img src="/img/icons/gradient-circle1.svg" id="gradient-circle-left">
    <img src="/img/icons/plugandplay.png">
    <img src="/img/icons/unitedcoin.png">

    <span class="is-size-1-desktop is-size-5-mobile">VISTO EN</span>

    <div class="black-line"></div>

    <img src="/img/icons/gradient-circle1.svg" id="gradient-circle-right">


  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#woonkly-allies {
  color: var(--woonkly-black-blue);
  text-align: center;
  position: relative;
  overflow: hidden;

  .black-line {
    height: 3em;
    width: 1px;
    background-color: var(--woonkly-black-blue);
    margin: 1em auto;
  }

  #gradient-circle-left {
    position: absolute;
    top: 2em;
    right: 13em;
    width: 14em;
  }
  #gradient-circle-right {
    position: absolute;
    bottom: 1em;
    transform: translateX(90%);
    width: 7em;
  }
}
</style>
