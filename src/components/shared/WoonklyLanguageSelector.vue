<template lang="html">
  <div @click="addClickListener" class="is-inline woonkly-language-selector">
    <input type="hidden" name="selected-language" :value="selectedLanguage">
    <span v-if="selectedLanguage">{{selectedLanguage.label}}</span>
    <ul :class="['options', {'opened':isListVisible}]">
      <li v-for="lang in languages" :key="lang.label" @click="selectedLanguage = lang">{{lang.label}}</li>
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
          img: 'spanish.jpg'
        },
        {
          label: 'English',
          img: 'english.jpg'
        },
        {
          label: 'French',
          img: 'French.jgp'
        },
        {
          label: 'Japanese',
          img: 'japansese.jpg'
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
