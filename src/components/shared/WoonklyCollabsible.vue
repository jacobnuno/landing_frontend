<template lang="html">
  <div class="columns is-mobile">
    <div class="wrap-collabsible column is-12-mobile is-8-tablet is-offset-2-tablet">
      <input :id="collapsibleId" v-model="isOpened" class="toggle" type="checkbox">
      <label :for="collapsibleId" class="lbl-toggle">
        <span><slot name="label"/></span>
        <fai icon="chevron-down" :class="['chevron', {'rotated':isOpened}]"/>
      </label>
      <div class="collapsible-content">
        <div class="content-inner">
          <p class="has-text-left w-p">
            <slot name="content"/>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown)

export default {
  data () {
    return {
      isOpened: false
    }
  },
  props: ['collapsibleId']
}
</script>

<style lang="scss">
  input[type='checkbox'] {
    display: none;
  }

  .lbl-toggle {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: .7em;
    text-align: center;
    padding: 1rem;
    color: white;
    background: #14123d;
    cursor: pointer;
    transition: all 0.25s ease-out;
    border-bottom: 1px solid #00d2ff;
  }

  .lbl-toggle:hover {
    color: white;
  }

  .toggle:checked + .lbl-toggle::before {
    transform: rotate(90deg) translateX(-3px);
  }

  .collapsible-content {
    max-height: 0px;
    overflow: hidden;
    transition: max-height .25s ease-in-out;
  }

  .toggle:checked + .lbl-toggle + .collapsible-content {
    max-height: 350px;
  }

  .toggle:checked + .lbl-toggle {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .w-p {
    font-size: .625rem;
  }

  .collapsible-content .content-inner {
    background: #0e0c36;
    padding: .5rem 1rem;
  }

  .chevron {
    color: #00d2ff;
    transition: transform 300ms ease-out;

    &.rotated {
      transform: rotate(-180deg);
    }
  }
  @media only screen and (min-width: 769px) {
    .lbl-toggle {
      font-size: 1.8em;
    }
    .w-p {
      font-size: 1.4em;
    }
  }
</style>
