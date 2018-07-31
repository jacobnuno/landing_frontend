<template>
<div class="woonkly-top-divider-3" :style="`transform:translateY(-${svgHeigth}px);margin-bottom:-${svgHeigth}px`">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1365 300">
    <path ref="svgPath" d="m0.000008275 0.0000021924v300h1365v-58.681c-142.4-44.97-299.1-27.61-435.25 30.22-184.58 62.86-392.11 13.75-547.38-98.32-112.12-86.008-243.7-145.84-382.37-173.22z"/>
  </svg>
</div>
</template>

<style lang="scss">
.woonkly-top-divider-3 {
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
      this.svgHeigth = height - 2
    }
  },
  mounted () {
    this.setHeigth()
    resizeListener(this.setHeigth)
  }
}
</script>
