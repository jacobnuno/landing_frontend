<template lang="html">
  <div @click="addClickListener" class="is-inline woonkly-language-selector">
    <span :class="['selected-language', {'opened':isListVisible}]" v-if="selectedLanguage"><img class="flag-icon" :src="`/img/icons/flags/${selectedLanguage.img}`" :alt="selectedLanguage.label"></span>
    <ul :class="['options', {'opened':isListVisible}]">
      <li v-for="lang in languages" :key="lang.label" @click="changeLanguage(lang)"><img class="flag-icon" :src="`/img/icons/flags/${lang.img}`" :alt="lang.label"></li>
    </ul>
  </div>
</template>

<script>
import { loadLanguageAsync } from '@/lang'

export default {
  name: 'WoonklylanguageSelector',
  data () {
    return {
      isListVisible: false,
      selectedLanguage: null,
      languages: [
        {
          label: 'Español',
          img: 'spain.svg',
          locale: 'es_MX'
        },
        {
          label: 'English',
          img: 'uk.svg',
          locale: 'en_UK'
        }
      ]
    }
  },
  methods: {
    changeLanguage (lang) {
      this.selectedLanguage = lang
      loadLanguageAsync(lang.locale)
    },
    addClickListener () {
      this.isListVisible = true
      setTimeout(() => { document.body.addEventListener('click', this.test) }, 500)
    },
    test (e) {
      this.isListVisible = false
      document.body.removeEventListener('click', this.test)
    }
  },
  mounted () {
    this.selectedLanguage = this.languages[0]
  }
}
</script>

<style lang="scss">
.woonkly-language-selector {
  cursor: pointer;
  position: relative;
  color: var(--woonkly-light-blue);

  .selected-language {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      top: 0.1em;
      left: 2.3em;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 15px solid var(--woonkly-light-blue);
      transition: transform 600ms ease;
    }

    &.opened {
      &::after {
        transform: rotate(180deg);
      }
    }
  }

  .flag-icon {
    max-height: 32px;
    max-width: 32px;
    border-radius: 50%;
  }

  .options {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;

    li {
      padding: 0.5em 0.8em;
      background: var(--woonkly-black-blue);
      transition: color 200ms ease, background 200ms ease;
      &:hover, &:focus, &:active {
        color: white;
        background: var(--woonkly-dark-blue);
      }
    }

    &.opened {
      display: inline;
    }
  }
}
</style>
