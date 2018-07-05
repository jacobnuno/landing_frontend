<template>
  <button class="woonkly-button">
    <slot/>
  </button>
</template>

<style lang="scss">
.woonkly-button {
  background: purple;
  color: white;
  line-height: 1.5em;
  min-height: 1.5em;
  border: 4px cyan solid;
  border-radius: 1.5em;
}
</style>