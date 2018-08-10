<template>
  <a v-if="href" :href="href" target="_self" class="woonkly-button">
    <span class="inner-border">
      <slot/>
    </span>
  </a>
  <button v-else class="woonkly-button">
    <span class="inner-border">
      <slot/>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    href: {
      default: null
    }
  }
}
</script>


<style lang="scss">
.woonkly-button {
  border: none;
  background: none;
  color: var(--woonkly-light-blue) !important;
  padding: 0.25em;
  border: .80px var(--woonkly-light-blue-quarter-opacity) solid;
  cursor: pointer;
  border-radius: 3em;
  font-size: 12.5px;
  &:focus, &:hover {
    text-decoration: none;
  }

  .inner-border {
    border-radius: inherit;
    padding: 8.5px;
    display: block;
    border: 1.2px var(--woonkly-light-blue) solid;
    font-size: 1.19em;
  }
}
</style>
