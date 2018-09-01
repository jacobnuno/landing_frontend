<template>
  <section id="woonkly-question" class="section">
    <span class="w-span is-uppercase">{{ $t('message.doubts') }}</span>

    <div class="title is-size-1-desktop is-size-5-mobile is-uppercase">{{ $t('message.doubts') }}</div>

    <div class="line"></div>

    <div class="columns is-mobile">
      <p class="is-size-5-mobile is-size-4-tablet space column is-12-mobile is-6-desktop is-offset-3-desktop">
          {{ $t('message.ifYouWantMoreInfo') }}
      </p>
    </div>

    <div class="columns is-mobile woonkly-container">
      <div class="column is-6-mobile is-one-third-desktop is-offset-2-desktop">
        <fai :icon="['fas', 'envelope']" class="icons" />
        <span class="is-size-7-mobile is-size-5-tablet woonkly-span">info@woonkly.com</span>
      </div>
      <div class="column is-6-mobile is-one-third-desktop">
        <a href="https://t.me/joinchat/Hu8281CBxcNDycg10WZKLw" target="_blank">
          <fai :icon="['fab', 'telegram-plane']" class="icons" />
          <span class="is-size-7-mobile is-size-5-tablet woonkly-span">{{ $t('message.joinTelegramGroup') }}</span>
        </a>
      </div>
    </div>

    <w-input
      :w-placeholder="$t('message.contactFormPlaceHolders.yourName')"
      v-model="form.name" />
    <w-input
      :w-placeholder="$t('message.contactFormPlaceHolders.yourEmail')"
      v-model="form.email" />
    <w-input
      is-textarea
      :w-placeholder="$t('message.contactFormPlaceHolders.yourMessage')"
      v-model="form.message" />
    <button type="button" class="w-button has-text-uppercase" @click="sendFormData">{{ $t('message.contactNow') }}</button>
    <img src="/img/icons/gradient-circle1.svg" id="gradient-circle1" alt="Woonkly blue circle">

  </section>
</template>

<script>
import wInput from '@/components/shared/WoonklyInput'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTelegramPlane } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'
library.add(faEnvelope)
library.add(faTelegramPlane)

export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    sendFormData () {
      let { form } = this
      fetch(`${process.env.VUE_APP_API_URL}/contact-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: form.email,
          subject: this.$t('message.woonklyEmailSubject'),
          type: 'html',
          content: this.$t('message.emailContent', { name: form.name })
        })
      }).then(res => {
        if (res.status === 200) {
          form = { name: '', email: '', message: '' }
          console.log('Success!')
          fetch(`${process.env.VUE_APP_API_URL}/contact-form`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              to: 'contact@woonkly.com',
              subject: 'New Woonkly Form Submission',
              type: 'html',
              content: `Name: ${form.name}<br>Email: ${form.email}<br>Message: ${form.message}`
            })
          })
        } else {
          console.log('Something went wrong :(')
          alert(this.$t('message.somethingWentWrong'))
        }
      })
    }
  },
  components: {
    wInput
  }
}
</script>

<style lang="scss">
  #woonkly-question {
    background: #0a0830;
    text-align: center;
    position: relative;
    overflow: hidden;

    & > div.title:nth-of-type(1) {
      margin: 3em 0 0 0;
    }

    .line {
      height: 25px;
      width: 1px;
      background-color: #00d2ff;
      margin: 10px auto;
    }

    .space {
      margin-bottom: 20px;
    }

    .woonkly-container {
      // font-size: smaller;
      line-height: 1;

      .icons {
        color: #00d2ff;
        margin-right: 5px;
      }

      .woonkly-span {
        color: white;
      }
    }

    .w-button {
      margin:3em 0.3em;
      background: #06062c;
      color: #00d3ff;
      line-height: 1.5em;
      height: 4.5em;
      width: 14em;
      border: 1px #00d3ff solid;
      border-radius: 3em;
      font-size: .5rem;

      @media screen and (min-width: 769px) {
        font-size: 1em;
      }
    }

    #gradient-circle1 {
      position: absolute;
      bottom: 1.5em;
      transform: translateX(35%);
    }

    .w-span {
      font-weight: bold;
      position: absolute;
      right: 0;
      left: 0;
      display: inline-block;
      opacity: 0.06;
      font-size: 6.2em;
      top: 0;
      line-height: 1.4;
    }
  }
  @media only screen and (min-width: 769px) {
    #woonkly-question > * {
      margin-top: 4em;
    }
    #woonkly-question {
      .svg-inline--fa {
        font-size: 3em;
      }
      .w-span {
        font-size: 16em;
        line-height: 1.9;
        margin-top: 0;
      }
      .line {
        height: 4em;
      }
      #gradient-circle1 {
        top: 50em;
        width: 24em;
        transform: translateX(65%);
      }
    }
  }
</style>
