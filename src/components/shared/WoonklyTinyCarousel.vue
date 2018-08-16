<template>
<div class="w-carousel">
  <ul ref="wTinyCarousel">
    <slot/>
  </ul>
</div>
</template>

<script>
import 'tiny-slider/src/tiny-slider.scss'
import { tns } from 'tiny-slider/src/tiny-slider.js'

export default {
  name: 'WoonklyTinySlider',
  props: {
    onIndexChanged: {
      default: null
    }
  },
  methods: {
    initCarousel () {
      var slider = tns({
        container: this.$refs.wTinyCarousel,
        items: 1,
        gutter: 10,
        swipeAngle: false,
        speed: 400,
        nav: false,
        controlsText: [ '', '' ],
        responsive: {
          320: {
            edgePadding: 20,
            gutter: 28,
            items: 1,
            autoplay: true,
            autoplayButtonOutput: false
          },
          768: {
            items: 3,
            gutter: 30
          },
          1200: {
            items: 4
          }
        }
      })

      if (this.onIndexChanged != null) {
        slider.events.on('indexChanged', this.onIndexChanged)
      }
    }
  },
  mounted () {
    this.initCarousel()
  }
}
</script>

<style lang="scss">
.w-carousel {
  position: relative;

  span.title {
    color: white;
  }

  .tns-controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1010;
    width: 100%;
    button {
      position: absolute;
      background: var(--woonkly-light-blue);
      color: white;
      display: inline-block;
      height: 2.5em;
      width: 2.5em;
      border: none;
      appearance: none;
      border-radius: 50%;

      &::before {
        position: relative;
        content: '';
        display: inline-block;
        left: 0.15em;
        top: 0.15em;
        border-style: solid;
        border-width: 0.25em 0.25em 0 0;
        transform: rotate(-45deg);
        vertical-align: top;
        height: 1em;
        width: 1em;
        border-color: var(--woonkly-dark-blue);
      }

      // Left Button
      &:first-of-type {
        left: 0;
        transform: translateX(-50%);

        &::before {
          left: 0.25em;
          transform: rotate(-135deg);
        }
      }

      // Right Button
      &:last-of-type {
        right: 0;
        transform: translateX(50%);

        &::before {
          left: -0.03em;
          transform: rotate(45deg);
        }
      }
    }
  }

  button {
    &[data-action="stop"], &[data-action="start"] {
      display: none;
    }
  }

}

@media screen and (min-width: 768px) {
  .w-carousel {
    .tns-controls {
      button {
        // Left Button
        &:first-of-type {
          left: -0.5em;
          transform: translateX(-50%);
        }

        // Right Button
        &:last-of-type {
          right: -0.4em;
          transform: translateX(50%);
        }
      }
    }
  }
} // end of media query
</style>
