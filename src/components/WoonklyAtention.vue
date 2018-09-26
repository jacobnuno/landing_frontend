<template>
  <section id="woonkly-atention" class="section">
    
    <div class="colum">
      <div class="column is-12">
        <w-carousel class="w-new-carousel">
          <li>
            <a href="https://foxico.io/project/woonkly" target="_blank">
              <w-rating-element :rating="4" img-url="https://www.invoxfinance.io/images/featuredIn/foxico.png">
                <span>4.80</span>
              </w-rating-element>
            </a>
          </li>
          <li>
            <a href="https://icoholder.com/en/woonkly-ico-23874" target="_blank">
              <w-rating-element :rating="3" img-url="https://icoholder.com/assets/app/img/logo_white.svg">
                <span>3.26</span>
              </w-rating-element>
            </a>
          </li>
          <li>
            <a href="https://www.trackico.io/ico/woonkly/" target="_blank">
              <w-rating-element :rating="4" img-url="https://www.trackico.io/static/img/partner_logo_white.png">
                <span>4.80</span>
              </w-rating-element>
            </a>
          </li>
          <li>
            <a href="https://foxico.io/project/woonkly" target="_blank">
              <w-rating-element :rating="4" img-url="https://www.invoxfinance.io/images/featuredIn/foxico.png">
                <span>4.80</span>
              </w-rating-element>
            </a>
          </li>
          <li>
            <a href="https://icoholder.com/en/woonkly-ico-23874" target="_blank">
              <w-rating-element :rating="3" img-url="https://icoholder.com/assets/app/img/logo_white.svg">
                <span>3.26</span>
              </w-rating-element>
            </a>
          </li>
          <li>
            <a href="https://www.trackico.io/ico/woonkly/" target="_blank">
              <w-rating-element :rating="4" img-url="https://www.trackico.io/static/img/partner_logo_white.png">
                <span>4.80</span>
              </w-rating-element>
            </a>
          </li>
        </w-carousel>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12-mobile is-half-tablet atention">
        <img id="woonkly-moon" class="rellax glowing-circle" data-rellax-speed="-0.5" src="/img/icons/gradient-circle-2.svg" alt="Woonkly Moon">
        <img id="triangle" src="/img/icons/transparent-triangle.svg" alt="Woonkly triangle">
        <div class="wrapper">
          <h3 class="title is-3">{{$t('message.attentionValue')}}</h3>
          <p>{{$t('message.contentCreators')}}</p>
        </div>
      </div>
      <div class="column is-12-mobile is-half-tablet">
        <w-video-frame/>
      </div>
    </div>
  </section>
</template>

<script>
import wVideoFrame from '@/components/shared/WoonklyVideoFrame'
import wRatingElement from '@/components/shared/WoonklyCarousel/WoonklyRatingElement'
import wCarousel from '@/components/shared/WoonklyTinyCarousel'

export default {
  name: 'WoonklyAtention',
  components: {
    wVideoFrame,
    wRatingElement,
    wCarousel
  }
}
</script>

<style lang="scss">
#woonkly-atention {
  position: relative;

  .columns {
    position: relative;
    max-width: 1300px;
    margin: 0 auto;

    & > .atention {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .title {
      position: relative;
      z-index: 10;
    }
  }
  #woonkly-moon {
    z-index: 1;
    width: 7em;
    position: absolute;
    top: 0;
    left: -22%;
  }

  #triangle {
    position: absolute;
    top: 0;
    width: 8em;
    left: 2em;
  }

  background: #07062c;

  a.view-video {
    display: flex;
    align-items: center;
    margin: 1em 0;
  }
}

@media screen and (min-width: 769px) {
  #woonkly-atention {

    #woonkly-moon {
      left: -5em;
    }

    .columns {
      & > .atention {
        align-items: flex-end;
        .wrapper {
          max-width: 500px;
        }
      }
    }

  }
}

@media screen and (min-width: 1400px) {
  #woonkly-atention {

    .columns {
      & > .atention {
        align-items: center;
        .wrapper {
          margin-top: -25%;
          max-width: unset;
        }
      }
    }

  }
}
</style>
