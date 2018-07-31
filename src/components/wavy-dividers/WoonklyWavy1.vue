<template>
<div class="woonkly-top-divider-1" :style="`transform:translateY(-${svgHeigth}px);margin-bottom:-${svgHeigth}px`">
  <svg ref="svgPath" xmlns="http://www.w3.org/2000/svg" height="153" width="1460" version="1.1" viewBox="-135.849 1744.734 1460 153">
    <path d="m-135.86 1897.7c0.0002-0.01 1460 0 1460 0-173.32-147.8-351.57-195.99-567.05-111.53-215.47 84.456-350.65 92.761-553.5 63.242-200.2-29.133-335.93 46.294-339.47 48.287z"/>
  </svg>
</div>
</template>

<style lang="scss">
.woonkly-top-divider-1 {
  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: #fff;
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
      this.svgHeigth = height - 1
    }
  },
  mounted () {
    this.setHeigth()
    resizeListener(this.setHeigth)
  }
}
</script>
