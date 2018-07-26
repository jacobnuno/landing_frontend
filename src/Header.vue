<template>
<header id="woonkly-header" :class="[{'scrolled':isScrolledDown}]">
  <nav :class="['navbar']" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <w-logo height="50px" width="auto"/>
      </a>

      <a @click="isMenuOpen = true" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
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
        <nav class="column is-12-mobile is-8-tablet navigation">
          <ul>
            <li class="selected">
              <a href="" target="_blank">Proyecto</a>
            </li>
            <li>
              <a href="" target="_blank">Tokens</a>
            </li>
            <li>
              <a href="" target="_blank">Objetivos</a>
            </li>
            <li>
              <a href="" target="_blank">Equipo</a>
            </li>
            <li>
              <a href="" target="_blank">FAQs</a>
            </li>
          </ul>
        </nav>
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
      isScrolledDown: false,
    }
  },
  methods: {
    pageScroll: throttle(function () {
      let currentScroll = window.scrollY

      if (currentScroll > 100) {
        this.isScrolledDown = true
      } else {
        this.isScrolledDown = false
      }
    }, 1000)
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
  }

  #woonkly-menu {
    position: fixed;
    padding: 1em;
    z-index: 2000;
    background: var(--woonkly-dark-blue);
    top: 0;
    bottom: 0;
    right: 0;
    left: 2em;

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

@media screen and (min-width: 769px) {
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

        .profile {
          display: none;
        }

        .language {
          order: 2;
        }

        .buttons {
          order: 3;
          margin: 0;

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
