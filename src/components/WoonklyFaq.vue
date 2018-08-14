<template>
  <section v-observe-visibility="{ callback: visibilityChanged, intersection: { threshold: 0.25 } }" id="woonkly-faq">
    <w-divider/>
    <div class="section">
      <w-carousel :has_description="1">
        <div class="carousel-item is-active" data="amsterdam">
          <w-element-carousel :img-url="'https://hipertextual.com/files/2017/02/imagen_17117_social.jpg'">
          </w-element-carousel>
        </div>
        <!-- <div class="carousel-item" data="amsterdam">
          <w-element-carousel :img-url="'http://www.comingsoon.net/assets/uploads/2018/01/rey-in-star-wars-the-last-jedi-5j.jpg'">
          </w-element-carousel>
        </div> -->
        <div class="carousel-item" data="amsterdam">
          <w-element-carousel  :img-url="'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'">
          </w-element-carousel>
        </div>
        <div class="carousel-item" data="bef">
          <w-element-carousel :img-url="'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/08/Sphero-Star-wars-r2-d2-bb-9e-796x424.jpg'">
          </w-element-carousel>
        </div>
        <div class="carousel-item" data="bef">
          <w-element-carousel :img-url="'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/pyr/55673ed52a98bb41703ed903/dia-star-wars.jpg'">
          </w-element-carousel>
        </div>
      </w-carousel>

      <!-- Rating Carousel -->
      <w-carousel :has_description="0">
        <div class="carousel-item">
          <w-rating-element :rating="4" :img-url="'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'">4.0</w-rating-element>
        </div>
        <div class="carousel-item">
          <w-rating-element :rating="3" :img-url="'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/pyr/55673ed52a98bb41703ed903/dia-star-wars.jpg'">3.0</w-rating-element>
        </div>
        <div class="carousel-item">
          <w-rating-element :rating="5" :img-url="'https://hipertextual.com/files/2017/02/imagen_17117_social.jpg'">5.0</w-rating-element>
        </div>
        <div class="carousel-item">
          <w-rating-element :rating="2" :img-url="'https://starwarsblog.starwars.com/wp-content/uploads/2017/01/sw-the-last-jedi-tall-1200x630.jpg'">2.0</w-rating-element>
        </div>
        <div class="carousel-item">
          <w-rating-element :rating="1" :img-url="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXtquyiv3k0oQtXPojvQ9lTP955aIRI91h_q4B5_zS_2LaGfRag'">1.0</w-rating-element>
        </div>
      </w-carousel>
      <div>
        <span class="w-span is-uppercase">{{$t('message.questions')}}</span>
      </div>

      <div class="title is-size-1-desktop is-size-5-mobile is-uppercase">{{$t('message.frequentlyAskedQuestions')}}</div>

      <div class="line"></div>

      <div class="columns is-mobile is-multiline">
        <div class="column is-12-mobile is-half-tablet is-half-desktop is-offset-3-tablet is-offset-3-desktop is-size-4">{{$t('message.ifYouHaveDoubts')}}</div>
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

      <w-collabsible v-for="(q, index) in selectedArrayOfQuestions" :collapsible-id="`faqs-${index}`">
        <template slot="label">{{q.question}}</template>
        <template slot="content">{{q.answer}}</template>
      </w-collabsible>

    </div>
  </section>
</template>

<script>
import wDivider from '@/components/wavy-dividers/WoonklyWavy4'
import wCarousel from '@/components/shared/WoonklyCarousel/WoonklyCarousel'
import wGradientButton from '@/components/shared/WoonklyGradientButton'
import wCollabsible from '@/components/shared/WoonklyCollabsible'
import wElementCarousel from '@/components/shared/WoonklyCarousel/SingleElement'
import wRatingElement from '@/components/shared/WoonklyCarousel/WoonklyRatingElement'

export default {
  components: {
    wGradientButton,
    wCollabsible,
    wDivider,
    wCarousel,
    wElementCarousel,
    wRatingElement
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
  }
}
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
