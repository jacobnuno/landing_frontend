<template lang="html">
  <div class="w-language-selector">
    <figure class="image is-inline-block">
      <img class="is-rounded" src="/img/icons/flags/spain.svg" alt="Spain">
      <span class="triangle"></span>
    </figure>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.w-language-selector {
  display: flex;
  align-items: center;
  padding: 0.5em;

  .triangle {
    margin-left: 2.6em;
    width: 0;
    height: 0;
    border-left: 0.8em solid transparent;
    border-right: 0.8em solid transparent;
    border-top: 0.8em solid var(--woonkly-light-blue);
    display: inline-block;
    transform: translateY(-1.3em);
  }
  .image {
    img {
      width: 2em;
      height: 2em;
    }
  }
}
</style>
