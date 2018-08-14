<template lang="html">
  <div class="columns is-mobile carousel">
    <div class="column is-8-tablet is-offset-2-tablet">
      <div class="carousel carousel-animated carousel-animate-slide" data-size="4">
        <div class="description" :class="hasDescriptionClass">
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
      <button type="button" class="navigationButton left" name="button" @click="clickLeft">
        <fai :icon="['fas', 'chevron-down']" class="icons rotatedLeft" />
      </button>
      <button type="button" class="navigationButton right" name="button" @click="clickRight">
        <fai :icon="['fas', 'chevron-down']" class="icons rotatedRight" />
      </button>
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
  // computed: {
  //   hasDescriptionClass () {
  //     console.log('has_description: ', has_description);
  //     if(this.has_description == '1') {
  //       return 'has_description'
  //     }
  //   }
  // },
  data () {
    return {
      activedOption: 'amsterdam'
    }
  },
  props: [
    'has_description'
  ]
}
</script>

<style lang="scss">
.simulated-buttons {
  position: relative;
  z-index: 1000;
  .navigationButton {
    position: relative;
    border-radius: 50%;
    height: 2.5em !important;
    width: 2.5em !important;
    background-color: var(--woonkly-light-blue) !important;
    border: none;

    .icons {
      color: var(--woonkly-black-blue);
      font-size: 1.7em;

      &.rotatedLeft {
        transform: rotate(-270deg);

      }
      &.rotatedRight {
        transform: rotate(-90deg);
      }
    }
  }
  .left {
    top: 23.5em;
    right: 83em;
  }
  .right {
    top: 23.5em;
  }
}
.carousel {
  margin-bottom: 9em;
  position: relative;

  .description {
    margin-bottom: 3em;
  }

  .carousel-nav-left, .carousel-nav-right {
    visibility: hidden;
  }

  .carousel-container {
    height: 25em;
    //left: -448px !important;
  }

  .carousel-item {
    width: 30px !important;
  }

}
</style>
