<template lang="html">
  <div class="woonkly-gradient-button">
    <span class="text-background">{{backText}}</span>
      <span>
          <slot/>
      </span>
  </div>
</template>

<script>
export default {
  props: {
    backText: String
  }
}
</script>

<style lang="scss">
  .woonkly-gradient-button {
    color: white;
    padding: .5em;
    display: inline-block;
    position: relative;
    width: 10em;

    .text-background {
      font-weight: bold;
      position: absolute;
      right: 0;
      display: inline-block;
      opacity: 0.1;
      font-size: 2.5em;
      line-height: .5;
    }

    &.green-blue {
      background: linear-gradient(to right, #93e9b8 30%, #20b7bc);
      border-radius: .2em;
    }

    &.pink-orange {
      background: linear-gradient(to right, #df51ca 30%, #f08d3b);
      border-radius: .2em;
    }

    &.blue-purple {
      background: linear-gradient(to right, #4582fd 30%, #ab23fa);
      border-radius: .2em;
    }
  }
  @media only screen and (min-width: 769px) {
    .woonkly-gradient-button {
      font-size: 2em;
    }
  }
</style>
