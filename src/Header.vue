<template>
  <header id="woonkly-header" :class="[{'scrolled':isScrolledDown}]">
    <nav :class="['navbar']" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <w-logo height="50px" width="auto" :infinite-invisible="isMenuOpen" />
        </a>

        <a @click="isMenuOpen = true" role="button" :class="['navbar-burger', {'hidden':isMenuOpen}]" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>
      <aside id="woonkly-menu" :class="['container', {'open':isMenuOpen}]">

        <button class="w-close-button" @click="isMenuOpen = false">&times;</button>

        <div class="columns is-multiline">
          <div class="column profile">
            <figure class="image is-96x96">
              <img src="/img/defaults/profile.jpg" alt="Profile Picture">
            </figure>
          </div>
          <div class="column is-12-mobile is-1-tablet is-offset-1 language">
            <w-language-selector/>
          </div>
          <div class="column is-5 is-12-mobile is-4-tablet buttons">
            <w-button :buttonClass="'woonkly-button-opacity-to-light'" :href="'https://woonkly.com/workingonit/index.html'">{{ $t('message.menu.buttonBuy') }}</w-button>
            <w-button :href="'https://woonkly.com/tv11/'">{{ $t('message.menu.buttonFaucet') }}</w-button>
            <w-button :href="'https://woonkly.com/workingonit/index.html'">{{ $t('message.menu.buttonLogin') }}</w-button>
          </div>

          <nav class="column is-12-mobile is-5-tablet navigation">
            <ul>
              <li :class="{'selected':currentSection == 'WoonklyHero'}">
                <a href="" v-scroll-to="{ el: '#woonkly-description', onDone: closeMenu }">{{ $t('message.menu.project') }}</a>
              </li>
              <li :class="{'selected':currentSection == 'WoonklyDistributionToken'}">
                <a href="" v-scroll-to="{ el: '#woonkly-dis-token', onDone: closeMenu }">{{ $t('message.menu.tokens') }}</a>
              </li>
              <li :class="{'selected':currentSection == 'WoonklyRoadmap'}">
                <a href="" v-scroll-to="{ el: '#woonkly-roadmap', onDone: closeMenu }">{{ $t('message.menu.objectives') }}</a>
              </li>
              <li :class="{'selected':currentSection == 'WoonklyTeam'}">
                <a href="" v-scroll-to="{ el: '#woonkly-team', onDone: closeMenu }">{{ $t('message.menu.team') }}</a>
              </li>
              <li :class="{'selected':currentSection == 'WoonklyFaq'}">
                <a href="" v-scroll-to="{ el: '#woonkly-faq', onDone: closeMenu }">{{ $t('message.menu.faqs') }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </nav>
    <div class="column is-3-tablet social-media">
      <a href="https://www.facebook.com/woonkly/" target="_blank">
        <fai :icon="['fab', 'facebook-f']" class="icons" />
      </a>
      <a href="https://twitter.com/WoonklyTV" target="_blank">
        <fai :icon="['fab', 'twitter']" class="icons" />
      </a>
      <a href="https://www.youtube.com/c/MrSantos" target="_blank">
        <fai :icon="['fab', 'youtube']" class="icons" />
      </a>
      <a :href="$t('message.woonklyTelegramLink')" target="_blank">
        <fai :icon="['fab', 'telegram-plane']" class="icons" />
      </a>
      <a href="https://github.com/Woonkly" target="_blank">
        <fai :icon="['fab', 'github']" class="icons" />
      </a>
      <!-- <a>
        <fai :icon="['fab', 'bitcoin']" class="icons" />
      </a>
      <a>
        <fai :icon="['fab', 'reddit']" class="icons" />
      </a>
      <a>
        <fai :icon="['fab', 'medium-m']" class="icons" />
      </a> -->
    </div>
  </header>
</template>

<script>
import { throttle } from "lodash";
import wLogo from "@/components/svg-components/LogoSVG";
import wButton from "@/components/shared/WoonklyButton";
// TODO: Create language selector
import wLanguageSelector from "@/components/shared/WoonklyLanguageSelector";

export default {
  name: "WoonklyHeader",
  data() {
    return {
      isMenuOpen: false,
      isScrolledDown: false
    };
  },
  props: ["currentSection"],
  methods: {
    pageScroll: throttle(function() {
      let currentScroll = window.scrollY;

      if (currentScroll > 100) {
        this.isScrolledDown = true;
      } else {
        this.isScrolledDown = false;
      }
    }, 1000),
    closeMenu() {
      setTimeout(() => {
        this.isMenuOpen = false;
      }, 100);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.pageScroll);
  },
  components: {
    wLogo,
    wButton,
    wLanguageSelector
  }
};
</script>

<style lang="scss">
#woonkly-header {
  position: fixed;
  z-index: 5000;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0);
  transition: background-color 400ms ease-in-out;

  &.scrolled {
    background: var(--woonkly-black-blue);
  }

  .hidden {
    display: none !important;
  }

  .w-close-button {
    background: none;
    color: white;
    border: none;
    margin: none;
    outline: none;
    font-size: 2.5em;
    line-height: 0.5;
    user-select: none;
    position: absolute;
    right: 10px;
    top: 15px;
    z-index: 2010;
    cursor: pointer;
  }

  .navbar {
    background: none;

    .navbar-item {
      img {
        max-height: unset;
        height: 2.5em;
      }
    }
  }

  .navbar-burger {
    color: white;
    @media screen and (max-width: 1104px) {
      display: block;
    }
  }

  div.column {
    display: flex;
    align-items: center;
  }

  .social-media {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 0.8px var(--woonkly-light-blue-quarter-opacity) solid;
    background: var(--woonkly-gradient-black-to-opacity-bottom);
    border-radius: 3em;
    padding: 0.25em;
    width: 2.5em;
    position: fixed;
    right: 3%;
    top: 30%;
    .icons {
      display: inline-block;
      font-size: 1.5em;
      color: var(--woonkly-light-blue);
      transition: transform 450ms ease-out;

      &:hover,
      &:active,
      &:focus {
        transform: scale(1.3);
      }

      &:first-of-type {
        margin-left: 10px;
      }
      &:last-of-type {
        margin-right: 10px;
      }
    }

    @media screen and (max-width: 1104px) {
      flex-direction: row;
      right: 10%;
      top: 70px;
      width: 80%;
      padding: 0.05em;
      .icons {
        display: inline-block;
        font-size: 1em;
        color: var(--woonkly-light-blue);
        transition: transform 600ms ease-out;

        &:hover,
        &:active,
        &:focus {
          animation: slightly-scale 1s ease-out;
        }
      }

      div.column {
        display: flex;
        align-items: center;
      }
    }
  }

  #woonkly-menu {
    position: fixed;
    padding: 1em;
    z-index: 2000;
    background: var(--woonkly-dark-blue);
    top: 0;
    bottom: 0;
    left: 2em;
    width: calc(100vw - 2em);

    @media screen and (min-width: 1088px) and (max-width: 1104px) {
      left: 100%;
    }

    transition: transform 500ms linear;
    transform: translateX(100%);

    &.open {
      transform: translateX(0);
    }

    .buttons {
      .woonkly-button {
        margin: 0 0.7em;
      }
    }

    .navigation {
      padding: 0;

      a {
        outline: none;
      }
      li {
        height: 2.7em;
        line-height: 2.7em;
        padding-left: 1.5em;
        a {
          color: var(--woonkly-light-blue);
        }
      }
      li.selected {
        background: var(--woonkly-black-blue);
        a {
          color: white;
        }
      }
    }
  }
}

@media screen and (min-width: 1104px) {
  #woonkly-header {
    nav.navbar {
      max-width: 1300px;
      margin: 0 auto;
    }

    .w-close-button {
      display: none;
    }

    .navbar-burger {
      display: none;
    }

    #woonkly-menu {
      position: unset;
      padding: 0;
      background: none;
      top: unset;
      bottom: unset;
      right: unset;
      left: unset;
      transform: none !important;

      div.columns {
        width: 100%;

        .column {
          display: flex;
          align-items: center;
        }

        .profile {
          display: none;
        }

        .language {
          order: 3;
          .woonkly-language-selector {
            position: fixed;
            right: 5%;
          }
        }

        .buttons {
          order: 2;
          margin: 0;
          justify-content: center;
          text-align: right;
          .woonkly-button {
            margin-right: 0em;
          }
        }

        .navigation {
          order: 1;
          li {
            display: inline;

            &.selected {
              background: none;
            }
          }
        }
      }
    } // End of woonkly menu styles
  }
}
</style>
