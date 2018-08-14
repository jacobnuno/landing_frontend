<template lang="html">
  <div class="woonkly-rating-element">
    <div class="star">
      <fai :icon="['fas', 'star']" class="icons" />
    </div>
    <span class="calification">
      <slot/>
    </span>
    <div class="image" :style="{ backgroundImage : `url(${imgUrl})`}"></div>
    <div class="bar" :class="ratingClass">
      <div class="colorBar"></div>
      <span class="spanBar"></span>
      <span class="spanBar"></span>
      <span class="spanBar"></span>
      <span class="spanBar"></span>
    </div>
    <div class="number">
      <span class="spanNumber">1</span>
      <span class="spanNumber">2</span>
      <span class="spanNumber">3</span>
      <span class="spanNumber">4</span>
      <span class="spanNumber">5</span>
    </div>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/fontawesome-free-solid'
library.add(faStar)

export default {
  computed: {
    ratingClass () {
      switch (this.rating) {
        case 1: return 'is-one'
        case 2: return 'is-two'
        case 3: return 'is-three'
        case 4: return 'is-four'
        case 5: return 'is-five'
        default: return 'is-five'
      }
    }
  },
  props: [
    'rating',
    'imgUrl'
  ]
}
</script>

<style lang="scss">
.woonkly-rating-element {
  width: 100%;
  height: 100%;
  text-align: center;

  .star {
    width: 5em;
    height: 3em;
    margin: auto;
    padding: .5em;

    .icons {
      font-size: 2.2em;
      color: #f7c015;
    }
  }
  .calification {
    color: #c48a20;
    font-weight: bold;
  }
  .image {
    width: 80%;
    height: 3.5em;
    background-color: var(--woonkly-black-blue);
    border-radius: .3em;
    margin: 1em 0 1em 10%;
    background-position: center center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .bar {
    position: relative;
    height: 1.5em;
    margin-bottom: 1em;
    .colorBar {
      width: 100%;
      height: 1.5em;
      border-radius: 5em;
      display: inline-block;
      position: relative;
    }

    span {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 2px;
      background: white;
      opacity: .3;

      &:nth-of-type(1) {
        left: 20%;
      }

      &:nth-of-type(2) {
        left: 40%;
      }

      &:nth-of-type(3) {
        left: 60%;
      }

      &:nth-of-type(4) {
        left: 80%;
      }
    }
  }
  .number {
    position: relative;
    background: var(--woonkly-black-blue);
    margin-left: 8%;
    width: 84%;
    height: 2em;
    color: pink;
    line-height: 1em;
    border-bottom: 1px #0e0b42 solid;
    border-radius: 0;
    font-size: .8em;

    span {
      position: absolute;
      top: 0;
      bottom: 0;

      &:nth-of-type(1) {
        left: 1%;
        color: #f82d64;
      }

      &:nth-of-type(2) {
        left: 25%;
        color: #f7c015;
      }

      &:nth-of-type(3) {
        left: 49%;
        color: #42c5bb;
      }

      &:nth-of-type(4) {
        left: 72%;
        color: #796af8;
      }
      &:nth-of-type(5) {
        left: 96%;
        color: #00cbff;
      }
    }
  }
  .is-one {
    .colorBar {
      background: linear-gradient(to right, #7D7D7D 15%, #f82d64);
      width: 20%;
      margin-right: 80%;
    }
    span:nth-of-type(1) {
      display: none;
    }
    span:nth-of-type(2) {
      display: none;
    }
    span:nth-of-type(3) {
      display: none;
    }
    span:nth-of-type(4) {
      display: none;
    }
  }
  .is-two {
    .colorBar {
      background: linear-gradient(to right, #fdd103 15%, #d22783);
      width: 40%;
      margin-right: 60%;
    }

    span:nth-of-type(2) {
      display: none;
    }
    span:nth-of-type(3) {
      display: none;
    }
    span:nth-of-type(4) {
      display: none;
    }

  }
  .is-three {
    .colorBar {
      background: linear-gradient(to right, #84e2b9 15%, #1eb7bd);
      width: 60%;
      margin-right: 40%;
    }
    span:nth-of-type(3) {
      display: none;
    }
    span:nth-of-type(4) {
      display: none;
    }

  }
  .is-four {
    .colorBar {
    background: linear-gradient(to right, #686ffc 15%, #b61afa);
    width: 80%;
    margin-right: 20%;
    }

    span:nth-of-type(4) {
      display: none;
    }

  }
  .is-five {
    .colorBar {
    background: linear-gradient(to right, #00b3e3 15%, #014b8a);
    }
  }

}
</style>
