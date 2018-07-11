<template>
<header id="woonkly-header">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/img/logo.svg" alt="Woonkly Logo" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
</header>
</template>

<script>
export default {
  name: 'WoonklyHeader'
}
</script>

<style lang="scss">
#woonkly-header {
  position: fixed;
  z-index: 2000;
  left: 0;
  right: 0;
  top: 0;
}
</style>
