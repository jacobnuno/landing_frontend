<template>
<header id="woonkly-header">
  <nav :class="['navbar', {'scrolled':isScrolledDown}]" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/img/logo.svg" alt="Woonkly Logo" width="112" height="28">
      </a>

      <a @click="isMenuOpen = true" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>

    </div>
  </nav>
  <aside id="woonkly-menu" :class="['container', {'open':isMenuOpen}]">

    <button class="w-close-button" @click="isMenuOpen = false">&times;</button>

    <div class="columns is-multiline">
      <div class="column profile">
        <figure class="image is-96x96">
          <img src="/img/defaults/profile.jpg" alt="Profile Picture">
        </figure>
      </div>
      <div class="column language">
        <span>Next...</span>
        <!-- TODO: Actual language selector -->
      </div>
      <div class="column buttons">
        <w-button>Comprar</w-button>
        <w-button>Faucet Beta</w-button>
      </div>
      <nav class="column navigation">
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
          <li>
            <a href="" target="_blank">Confiugraicon</a>
          </li>
          <li>
            <a href="" target="_blank">Cerrar sesión</a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</header>
</template>

<script>
import { throttle } from 'lodash'
import wButton from '@/components/shared/WoonklyButton'

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
    wButton
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
    background: rgba(0, 0, 0, 0);
    transition: background-color 400ms ease-in-out;
    
    &.scrolled {
      background: var(--woonkly-black-blue);
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

    .w-close-button {
      display: none;
    }

    .navbar-burger {
      display: none;
    }

    #woonkly-menu {
      left: 100%;
      transform: none;

      .navigation {
        position: fixed;
        display: inline-block;
        right: 2em;
        top: 0;

        ul {
          display: inline-flex;
        }
      }
    }
  }
}
</style>
