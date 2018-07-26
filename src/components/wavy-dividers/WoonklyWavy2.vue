<template>
<div class="woonkly-top-divider-2" :style="`transform:translateY(-${svgHeigth}px);margin-bottom:-${svgHeigth + 1.5}px`">
  <svg xmlns="http://www.w3.org/2000/svg" height="55" width="360" version="1.1" viewBox="0 0 360 54.999998">
    <path ref="svgPath" d="m23.609 0.0083c-7.327 0.1273-15.205 1.7372-23.609 5.5532v49.438h173.9c-46.67 0-80.743-27.265-94.062-32.612-10.918-4.384-30.059-22.835-56.229-22.38zm150.29 54.992h186.1v-40.718c-28.13-8.0913-68.95-10.324-113.67 18.099-26.32 16.724-50.74 22.618-72.43 22.619z"/>
  </svg>
</div>
</template>

<style lang="scss">
.woonkly-top-divider-2 {
  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: var(--woonkly-black-blue);
  }
}
</style>

<script>
import { resizeListener } from './utils'

export default {
  data () {
    return {
      svgHeigth: null
    }
  },
  methods: {
    setHeigth () {
      let { height } = this.$refs.svgPath.getClientRects()[0]
      this.svgHeigth = Math.round(height)
    }
  },
  mounted () {
    this.setHeigth()
    resizeListener(this.setHeigth)
  }
}
</script>
