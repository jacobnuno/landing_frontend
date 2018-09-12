<template>
  <section v-observe-visibility="{ callback: visibilityChanged, intersection: { threshold: 0.25 } }" id="woonkly-faq">
    <w-divider/>
    <div class="section">
      <div>
        <span class="w-span is-uppercase">{{$t('message.questions')}}</span>
      </div>

      <div class="title is-size-1-desktop is-size-5-mobile is-uppercase">{{$t('message.frequentlyAskedQuestions')}}</div>

      <div class="line"></div>

      <div class="columns is-mobile is-multiline">
        <div class="column is-12-mobile is-half-tablet is-half-desktop is-offset-3-tablet is-offset-3-desktop is-size-5">{{$t('message.ifYouHaveDoubts')}}</div>
      </div>

      <w-gradient-button @click.native="selectedQuestions = 'userQuestions'" class="green-blue has-text-uppercase" back-text="USU">
        {{$t('message.users')}}
      </w-gradient-button>

      <w-gradient-button @click.native="selectedQuestions = 'advertiserQuestions'" class="pink-orange has-text-uppercase" back-text="ANU">
        {{$t('message.advertisers')}}
      </w-gradient-button>

      <w-gradient-button @click.native="selectedQuestions = 'icoQuestions'" class="blue-purple has-text-uppercase" back-text="PRE">
        {{$t('message.preIcoAndIco')}}
      </w-gradient-button>

      <w-collabsible v-for="(q, index) in selectedArrayOfQuestions" :key="`faqs-${index}`" :collapsible-id="`faqs-${index}`">
        <template slot="label">{{q.question}}</template>
        <template slot="content">{{q.answer}}</template>
      </w-collabsible>

    </div>
  </section>
</template>

<script>
import wDivider from '@/components/wavy-dividers/WoonklyWavy4'
import wGradientButton from '@/components/shared/WoonklyGradientButton'
import wCollabsible from '@/components/shared/WoonklyCollabsible'

export default {
  components: {
    wGradientButton,
    wCollabsible,
    wDivider
  },
  data () {
    return {
      selectedQuestions: 'userQuestions'
    }
  },
  computed: {
    selectedArrayOfQuestions () {
      return this[this.selectedQuestions]
    },
    userQuestions () {
      return this.getQuestionsFromTranslation('users', 3)
    },
    advertiserQuestions () {
      return this.getQuestionsFromTranslation('advertisers', 4)
    },
    icoQuestions () {
      return this.getQuestionsFromTranslation('ico', 4)
    }
  },
  methods: {
    getQuestionsFromTranslation ( questionPath, noQuestions ) {
      let questionsArray = []
      for(let i = 0; i < noQuestions; i ++) {
        questionsArray.push({
          question: this.$t(`message.faq.${questionPath}[${i}].question`),
          answer: this.$t(`message.faq.${questionPath}[${i}].answer`),
        })
      }
      return questionsArray
    },
    visibilityChanged (isVisible, entry) {
      if (isVisible) {
        this.$emit('currentSectionChanged', 'WoonklyFaq')
      }
    }
  }
}
</script>

<style lang="scss">
#woonkly-faq {
  background: #0a0830;
  text-align: center;
  position: relative;

  .section {
    position: relative;
    z-index: 2500;

    & > div:nth-of-type(1) span {
      z-index: -1 !important;
    }
  }

  .w-new-carousel {
    position: relative;
    z-index: 1000;
    max-width: 800px;
    margin: 0 auto 2em auto;
  }

  #woonkly-around-the-world {
    .tns-item {
      // max-width: 160px;
      padding: 0;
    }
  }

  & > div.title:nth-of-type(2) {
    margin: 3em 0 0 0;
  }

  .woonkly-gradient-button {
    margin: 0.5em 0;
    margin: 1em 1em 1em 1em;
  }

  .line {
      height: 35px;
      width: 1px;
      background-color: #00ffff;
      margin: auto;
      margin-bottom: 10px;
  }

  .w-span {
    font-weight: bold;
    position: absolute;
    right: 0;
    display: inline-block;
    opacity: 0.06;
    font-size: 12em;
    top: 0;
    line-height: .8;
    left: 0;
    z-index: 0 !important;
  }
}

// Desktop styles
@media only screen and (min-width: 769px) {
  #woonkly-faq {
    .w-span {
      font-size: 19em;
      line-height: 1.5;
      top: 1.55em;
    }
    .woonkly-gradient-button {
      margin: 3em 1em 3em 1em;
    }
    .line {
        height: 4em;
        margin-bottom: 4em;
    }
    & > div.title:nth-of-type(2) {
      margin-top: 3em;
    }
  }
}
</style>
