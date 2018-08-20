<template>
  <a v-if="href" :href="href" target="_self" v-bind:class="chooseClass">
    <span class="inner-border">
      <slot/>
    </span>
  </a>
  <button v-else v-bind:class="chooseClass">
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
    },
    buttonClass: ''
  },
  computed: {
    chooseClass: function() {
      switch (this.buttonClass) {
        case 'woonkly-button-light-to-dark': {}
        case 'woonkly-button-opacity-to-light': {}
        case 'woonkly-button': {
          return this.buttonClass;
        }
        default: {
          return 'woonkly-button';
        }
      }
    }
  }
};
</script>


<style lang="scss">
.woonkly-button {
  border: none;
  background: none;
  color: var(--woonkly-light-blue) !important;
  padding: 0.25em;
  border: 0.8px var(--woonkly-light-blue-quarter-opacity) solid;
  cursor: pointer;
  border-radius: 3em;
  font-size: 12.5px;
  &:focus,
  &:hover {
    text-decoration: none;
  }
  
  .inner-border {
    border-radius: inherit;
    padding: 8.5px;
    display: block;
    border: 1.2px var(--woonkly-light-blue) solid;
  }
}
.woonkly-button-opacity-to-light {
  border: none;
  color: white !important;
  padding: 0.25em;
  border: 0.8px var(--woonkly-light-blue-quarter-opacity) solid;
  cursor: pointer;
  border-radius: 3em;
  font-size: 12.5px;
  text-decoration: none;
  background: none;

  .inner-border {
    background: none;
    background: var(--woonkly-gradient-opacity-to-light-right);
    border-radius: inherit;
    padding: 8.5px;
    display: block;
    font-size: 1.19em;
    //text-decoration: none;
  }
}
.woonkly-button-light-to-dark {
  border: none;
  color: white !important;
  padding: 0.25em;
  border: 0.8px var(--woonkly-light-blue-quarter-opacity) solid;
  cursor: pointer;
  border-radius: 3em;
  font-size: 12.5px;
  text-decoration: none;
  background: none;

  .inner-border {
    background: none;
    background: var(--woonkly-gradient-light-to-dark-right);
    border-radius: inherit;
    padding: 8.5px;
    display: block;
    font-size: 1.19em;
    //text-decoration: none;
  }
}
</style>
