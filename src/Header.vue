<template>
<header id="woonkly-header">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/img/logo.svg" alt="Woonkly Logo" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <button class="hamburger hamburger--collapse" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </a>
    </div>
  </nav>
  <aside id="woonkly-menu" class="container">
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
import wButton from '@/components/shared/WoonklyButton'

export default {
  name: 'WoonklyHeader',
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
  
  .navbar-burger {
    position: relative;
    z-index: 2020;
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
    transform: translateY(100%);

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
</style>
