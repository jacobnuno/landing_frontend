<template>
  <div class="woonkly-progress">
    <span>
      <span :style="`width:${value}%`"></span>
    </span>
  </div>
</template>

<script>
/* This component is used mainly to represent the amount of WNK sold */
export default {
  props: {
    value: Number // This prop determines the actual ICO progress
  }
}
</script>

<style lang="scss">

.woonkly-progress {
  padding: 0.3em;
  border: 2px var(--woonkly-light-blue) solid;
  border-radius: 1em;
  position: relative;
  height: 2em;

  & > span {
    position: absolute;
    left: 0.3em;
    top: 0.3em;
    bottom: 0.3em;
    right: 0.3em;
    border-radius: 1em;
    background: rgba(9,7,46, 0.6);

    & > span {
      position: relative;
      display: inline-block;
      border-radius: 1em;
      height: 100%;
      background-color: #00d3ff;
      *zoom: 1;
      filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#FF02004A', endColorstr='#FF00D3FF');
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAyMDA0YSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwZDNmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
      background-size: 100%;
      background-image: linear-gradient(to right, #02004a 0%, #00d3ff 100%);

      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        right: 3px;
        top: 0;
        bottom: 0;
        width: 1em;
        border-radius: 1em;
        animation: light-glow 900ms ease-in-out infinite alternate;
        background: linear-gradient(to right, rgba(0,0,0,0) 0%, var(--woonkly-light-blue) 25%);
      }
    }
  }
}

@keyframes light-glow {
 from {
   // box-shadow: 0 0 12px 5px var(--woonkly-light-blue);
   transform: translateX(0);
   box-shadow: 0.5em 0 6px 2px var(--woonkly-light-blue);
 }
 to {
   transform: translateX(0.3em);
   box-shadow: 0.5em 0 6px 3px var(--woonkly-light-blue);
 }
}
</style>
