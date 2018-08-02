<template>
<header id="woonkly-header" :class="[{'scrolled':isScrolledDown}]">
  <nav :class="['navbar']" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <w-logo height="50px" width="auto" :infinite-invisible="isMenuOpen"/>
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
        <div class="column is-12-mobile is-1-tablet language">
          <w-language-selector/>
        </div>
        <div class="column is-12-mobile is-3-tablet buttons">
          <w-button>Comprar</w-button>
          <w-button>Faucet Beta</w-button>
        </div>
        <nav class="column is-12-mobile is-5-tablet navigation">
          <ul>
            <li :class="{'selected':currentSection == 'WoonklyHero'}">
              <a href="" v-scroll-to="{ el: '#woonkly-description', onDone: closeMenu }">Proyecto</a>
            </li>
            <li :class="{'selected':currentSection == 'WoonklyDistributionToken'}">
              <a href="" v-scroll-to="{ el: '#woonkly-dis-token', onDone: closeMenu }">Tokens</a>
            </li>
            <li :class="{'selected':currentSection == 'WoonklyRoadmap'}">
              <a href="" v-scroll-to="{ el: '#woonkly-roadmap', onDone: closeMenu }">Objetivos</a>
            </li>
            <li :class="{'selected':currentSection == 'WoonklyTeam'}">
              <a href="" v-scroll-to="{ el: '#woonkly-team', onDone: closeMenu }">Equipo</a>
            </li>
            <li :class="{'selected':currentSection == 'WoonklyFaq'}">
              <a href="" v-scroll-to="{ el: '#woonkly-faq', onDone: closeMenu }">FAQs</a>
            </li>
          </ul>
        </nav>
        <div class="column is-hidden-mobile is-3-tablet social-media">
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
      </div>
    </aside>
  </nav>
</header>
</template>

<script>
import { throttle } from 'lodash'
import wLogo from '@/components/svg-components/LogoSVG'
import wButton from '@/components/shared/WoonklyButton'
// TODO: Create language selector
import wLanguageSelector from '@/components/shared/WoonklyLanguageSelector'

export default {
  name: 'WoonklyHeader',
  data () {
    return {
      isMenuOpen: false,
      isScrolledDown: false
    }
  },
  props: ['currentSection'],
  methods: {
    pageScroll: throttle(function () {
      let currentScroll = window.scrollY

      if (currentScroll > 100) {
        this.isScrolledDown = true
      } else {
        this.isScrolledDown = false
      }
    }, 1000),
    closeMenu () {
      setTimeout(() => { this.isMenuOpen = false }, 100)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.pageScroll)
  },
  components: {
    wLogo,
    wButton,
    wLanguageSelector
  }
}
</script>

<style lang="scss">
#woonkly-header {
  position: fixed;
  z-index: 2000;
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
    @media screen and (min-width: 1088px) and (max-width: 1104px) {
      cursor: pointer;
      display: block;
      height: 3.25rem;
      position: relative;
      width: 3.25rem;
      margin-left: auto;
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

    .social-media {
      display: none;
    }

    .navigation {
      padding: 0;

      a { outline: none }
      li {
        height: 2.7em;
        line-height: 2.7em;
        padding-left: 2em;
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
      max-width: 1250px;
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

        .social-media {
          order: 4;
          display: flex;
          justify-content: space-between;
          .icons {
            display: inline-block;
            font-size: 1.5em;
            color: var(--woonkly-light-blue);
            transition: transform 600ms ease-out;

            &:hover, &:active, &:focus {
              animation: slightly-scale 1s ease-out;
            }
          }
        }

        .profile {
          display: none;
        }

        .language {
          order: 2;
          .woonkly-language-selector {
            @media (mex-width: 1280px) {
              margin-left: 2em;
            }
          }
        }

        .buttons {
          order: 3;
          margin: 0;
          justify-content: right;

          @media (mex-width: 1280px) {
            justify-content: center;
          }

          .woonkly-button {
            margin: 0;
          }
        }

        .navigation {
          order: 1;
          li {
            display: inline;
          }
        }
      }
    } // End of woonkly menu styles

  }
}
</style>
