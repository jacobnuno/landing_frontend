<template lang="html">
  <div class="woonkly-rating-element">
    <div class="star">
      <!-- <span class="fas fa-star icon"></span> -->
      <fai :icon="['fas', 'fa-star']" class="icon" />
    </div>
    <span class="calification">5.0</span>
    <div class="blue"></div>
    <div class="bar">
      <span class="spanBar"></span>
      <span class="spanBar"></span>
      <span class="spanBar"></span>
      <span class="spanBar"></span>
    </div>
    <div class="number">12345</div>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/fontawesome-free-solid'
library.add(faStar)

export default {
}
</script>

<style lang="scss">
.woonkly-rating-element {
  width: 100%;
  height: 100%;
  background-color: #07062c;
  text-align: center;

  .star {
    width: 2em;
    height: 2em;
    //background-color: red;
    margin: auto;
    padding: .5em;

    .icon {
      font-size: 3em;
      color: yellow;
    }
  }
  .calification {
    color: #c48a20;
    font-weight: bold;
  }
  .blue {
    width: 3em;
    height: 2.5em;
    background-color: yellow;
    border-radius: .3em;
    margin: 1em 0 1em 2em;
  }
  .bar {
    margin-top: 2em;
    background: linear-gradient(to right, #03bfee 15%, #004d8b);
    width: 4em;
    height: 1em;
    border-radius: 5em;
    display: inline-block;
    position: relative;

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
    width: 5em;
    height: 2em;
    color: pink;
    line-height: 1em;
  }
}
</style>
