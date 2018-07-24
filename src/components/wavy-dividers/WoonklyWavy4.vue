<template>
<div class="woonkly-top-divider-4" :style="`transform:translateY(-${svgHeigth}px);margin-bottom:-${svgHeigth}px`">
  <svg xmlns="http://www.w3.org/2000/svg" height="190" width="1360" version="1.1" viewBox="0 0 1360 190.00001">
    <path ref="svgPath" d="m1178.7 0.0015429c-133.2-3.6387-261.09 42.986-376.79 105.38-85.33 41.84-177.57 100.89-276.74 74.66-94.54-27.89-180.85-84.828-281.74-89.419-81.84-7.029-163.6 6.396-243.43 23.249v76.13h1360v-173.4c-59.8-10.526-120.5-16.675-181.3-16.598z"/>
  </svg>
</div>
</template>

<style lang="scss">
.woonkly-top-divider-4 {
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
      this.svgHeigth = height - 2
    }
  },
  mounted () {
    this.setHeigth()
    resizeListener(this.setHeigth)
  }
}
</script>
