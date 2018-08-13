<template lang="html">
  <div class="columns is-mobile carousel">
    <div class="column is-10-tablet is-offset-1-tablet">
      <div class="carousel carousel-animated carousel-animate-slide" data-size="4">
        <div class="description">
          <h3 class="title is-2 has-text-weight-normal has-text-center">{{$t(`message.carousel.${activedOption}.title`)}}</h3>
          <span class="has-text-left">{{$t(`message.carousel.${activedOption}.description`)}}</span>
        </div>

        <div class="carousel-container">
          <slot/>
        </div>
        <div class="carousel-navigation is-overlay">
          <div class="carousel-nav-left" ref="buttonLeft">
            <fai :icon="['fas', 'chevron-down']" class="icons rotatedLeft" />
          </div>
          <div class="carousel-nav-right" ref="buttonRight">
            <fai :icon="['fas', 'chevron-down']" class="icons rotatedRight" />
          </div>
        </div>
      </div>
    </div>

    <div class="simulated-buttons">
      <button type="button" name="button" @click="clickLeft">IZQUIERDA</button>
      <button type="button" name="button" @click="clickRight">DERECHA</button>
    </div>

  </div>

</template>

<script>
import bulmaCarousel from 'bulma-carousel'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown)

let carousels

export default {
  methods: {
    carouselSlide (item) {
      var data = item.node.getAttribute("data")
      this.activedOption = data
    },
    clickLeft () {
      this.$refs.buttonLeft.click()
    },
    clickRight () {
      this.$refs.buttonRight.click()
    }
  },
  mounted () {
    carousels = bulmaCarousel.attach()
    setTimeout(() => {
      carousels[1].on('carousel:slide:after', this.carouselSlide)
    }, 1000)
  },
  data () {
    return {
      activedOption: 'amsterdam'
    }
  }
}
</script>

<style lang="scss">
.simulated-buttons {
  position: relative;
  z-index: 10000;
}
.carousel {
  margin-bottom: 9em;

  .icons {
    color: var(--woonkly-black-blue);

    &.rotatedLeft {
      transform: rotate(-270deg);
    }
    &.rotatedRight {
      transform: rotate(-90deg);
    }
  }

  .description {
    margin-bottom: 3em;
  }

  .carousel-nav-left, .carousel-nav-right {
    background-color: var(--woonkly-light-blue) !important;
    transform: translateY(100%);
  }

  .carousel-container {
    height: 25em;
    //left: -448px !important;
  }

  .carousel-item {
    width: 30px !important;
  }

  .carousel-nav-right, .carousel-nav-left {
    border-radius: 50%;
    height: 1.5em !important;
    width: 1.5em !important;
  }
}
</style>
