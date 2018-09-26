<template lang="html">
  <div v-click-outside="closeOptions" class="is-inline woonkly-language-selector">
    <span @click.stop="isListVisible = !isListVisible" :class="['selected-language', {'opened':isListVisible}]" v-if="selectedLanguage"><img class="selected-flag" :src="`/img/icons/flags/${selectedLanguage.img}`" :alt="selectedLanguage.label"></span>
    <ul :class="['options', {'opened':isListVisible}]">
      <li v-for="lang in languages" :key="lang.label" @click="changeLanguage(lang)"><img class="flag-icon" :src="`/img/icons/flags/${lang.img}`" :alt="lang.label"></li>
    </ul>
  </div>
</template>

<script>
import { loadLanguageAsync, determineLanguage } from '@/lang'
import vClickOutside from 'v-click-outside'

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
      this.isListVisible = false
      this.selectedLanguage = lang
      var routeLang = determineLanguage(lang.locale)
      this.$router.push({ name: 'home', params: { lang: routeLang.simple }})
    },
    closeOptions () {
      if (this.isListVisible) {
        this.isListVisible = false
      }
    }
  },
  mounted () {
    if (this.$route.params.lang == 'es') {
      this.selectedLanguage = this.languages[0]
    } else {
      this.selectedLanguage = this.languages[1]
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
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
      top: -4px;
      left: 26px;
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

  .selected-flag {
    height: 24px;
    width: 24px;
    border-radius: 50%;
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
