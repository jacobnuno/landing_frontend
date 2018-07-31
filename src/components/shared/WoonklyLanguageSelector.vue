<template lang="html">
  <div @click="addClickListener" class="is-inline woonkly-language-selector">
    <input type="hidden" name="selected-language" :value="selectedLanguage">
    <span class="selected-language" v-if="selectedLanguage"><img class="flag-icon" :src="`/img/icons/flags/${selectedLanguage.img}`" :alt="selectedLanguage.label"></span>
    <ul :class="['options', {'opened':isListVisible}]">
      <li v-for="lang in languages" :key="lang.label" @click="selectedLanguage = lang"><img class="flag-icon" :src="`/img/icons/flags/${lang.img}`" :alt="lang.label"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WoonklylanguageSelector',
  data () {
    return {
      isListVisible: false,
      selectedLanguage: null,
      languages: [
        {
          label: 'Español',
          img: 'spain.svg'
        },
        {
          label: 'English',
          img: 'uk.svg'
        }
      ]
    }
  },
  methods: {
    addClickListener () {
      this.isListVisible = true
      setTimeout(() => { document.body.addEventListener('click', this.test) }, 500)
    },
    test (e) {
      console.log('click on body')
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
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 100px solid red;
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
