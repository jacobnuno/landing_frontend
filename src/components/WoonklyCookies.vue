<template>
<div>
  <h1>{{$t('message.cookiesLink.title')}}</h1>
</div>
</template>

<template>
  <div class="text-cookies">
    <div class="font-size-control">
      <label for="fontSizeControl">Tamaño de fuente </label>
      <input type="range" name="fontSizeControl" id="fontSizeControl" v-model="fontSize" min="4" max="64">
    </div>

    <div class="content-wrapper" :style="{fontSize: `${fontSize}px`}" style="font-size:16px" v-html="$t('message.cookiesDisclaimer')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiesDisclaimer',
  data() {
    return {
      fontSize: 16
    }
  }
}
</script>

<style>
.text-cookies {
  padding: 4em 12px;
  padding-top: 8em;
  background-color: var(--woonkly-black-blue);
  color: white;
  text-align: justify;
}

.content-wrapper {
  padding: 0 1em;
}

.content-wrapper > p {
  max-width: 32em;
  margin: 0 auto;
  margin-bottom: 19px;
}
</style>
