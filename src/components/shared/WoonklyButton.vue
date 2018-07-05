<template>
  <button class="woonkly-button">
    <slot/>
  </button>
</template>

<style lang="scss">
.woonkly-button {
  margin: 0 0.3em;
  background: #06062c;
  color: #00d3ff;
  line-height: 1.5em;
  min-height: 1.5em;
  border: 2px #00d3ff solid;
  border-radius: 1.5em;
}
</style>