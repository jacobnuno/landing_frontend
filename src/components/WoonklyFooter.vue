<template>
  <footer id="woonkly-footer" class="">
    <div>
        <a href="#">
          <fai :icon="['fab', 'facebook-f']" class="icons" />
        </a>
        <a href="#">
          <fai :icon="['fab', 'twitter']" class="icons" />
        </a>
        <a href="#">
          <fai :icon="['fab', 'youtube']" class="icons" />
        </a>
        <a href="#">
          <fai :icon="['fab', 'telegram-plane']" class="icons" />
        </a>
    </div>
    <div class="w-div">
      <p class="is-size-7">
        Copyright © 2018, Woonkly by Inversión semántica SAPI de CV | Políticas de privacidad |
      </p>
    </div>
  </footer>

</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from '@fortawesome/fontawesome-free-brands'
import { faTelegramPlane } from '@fortawesome/fontawesome-free-brands'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'
import { faYoutube } from '@fortawesome/fontawesome-free-brands'
library.add(faTelegramPlane)
library.add(faFacebookF)
library.add(faTwitter)
library.add(faYoutube)

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
  }

  .w-div {
    padding-bottom: 2em;

    & > p {
      padding: 1em;
    }
  }
}
</style>
