<template>
  <button class="woonkly-button">
    <span class="inner-border">
      <slot/>
    </span>
  </button>
</template>

<style lang="scss">
.woonkly-button {
  border: none;
  background: none;
  color: var(--woonkly-light-blue);
  padding: 0.3em;
  border: 1px var(--woonkly-light-blue-quarter-opacity) solid;
  cursor: pointer;
  border-radius: 3em;

  .inner-border {
    border-radius: inherit;
    padding: 0.9em;
    display: block;
    border: 1.5px var(--woonkly-light-blue) solid;
  }
}
</style>
