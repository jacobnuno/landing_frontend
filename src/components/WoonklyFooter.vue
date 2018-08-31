<template>
  <footer id="woonkly-footer" class="">
    <div>
        <a href="https://www.facebook.com/woonkly/" target="_blank">
          <fai :icon="['fab', 'facebook-f']" class="icons" />
        </a>
        <a href="https://twitter.com/WoonklyTV" target="_blank">
          <fai :icon="['fab', 'twitter']" class="icons" />
        </a>
        <a href="https://www.youtube.com/c/MrSantos" target="_blank">
          <fai :icon="['fab', 'youtube']" class="icons" />
        </a>
        <a href="https://t.me/joinchat/HIxsXg7y5_EDCgXmkT3yRA" target="_blank">
          <fai :icon="['fab', 'telegram-plane']" class="icons" />
        </a>
        <a href="https://github.com/Woonkly" target="_blank">
          <fai :icon="['fab', 'github']" class="icons" />
        </a>
        <a>
          <fai :icon="['fab', 'medium-m']" class="icons" />
        </a>
    </div>
    <div class="w-div">
      <p class="is-size-7-mobile is-size-5-tablet">
          {{ $t('message.copyRight') }}
          <router-link to="/privacy-policy" id="text-cookies-and-copyrights" target="_blank">{{ $t('message.privacyPolicyLink.title') }}</router-link>
          <router-link to="/cookies" id="text-cookies-and-copyrights" target="_blank">{{$t('message.cookiesLink.title')}}</router-link>
      </p>
    </div>
  </footer>

</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTelegramPlane, faTwitter, faYoutube, faGithub, faMediumM } from '@fortawesome/fontawesome-free-brands'
library.add(faFacebookF, faTelegramPlane, faTwitter, faYoutube, faGithub, faMediumM)

export default {
}
</script>

<style lang="scss">
#woonkly-footer {
  background: -webkit-linear-gradient(left bottom, #02004A, #09072E 70%);
  text-align: center;
  position: relative;
  overflow: hidden;

  .icons {
    display: inline;
    color: #00d2ff;
    margin: .8em;
    transition: transform 600ms ease-out;

    &:hover, &:active, &:focus {
      animation: slightly-scale 1s ease-out;
    }
  }

  .w-div {
    padding-bottom: 2em;

    & > p {
      padding: 1em;
    }
  }
}
@media only screen and (min-width: 769px) {
  #woonkly-footer {
    .svg-inline--fa {
      font-size: 2em;
    }
  }
}

@keyframes slightly-scale {
  0% { transform: rotate(0) scale(1) }
  50% {
    transition-timing-function: step-start;
    transform: rotate(230deg) scale(1.3);
  }
  100% { transform: rotate(360deg) scale(1) }
}

#text-cookies-and-copyrights{
    color: rgb(255,255,255);
}
</style>
