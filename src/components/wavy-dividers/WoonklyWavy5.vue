<template>
<div class="woonkly-top-divider-5" :style="`transform:translateY(-${svgHeigth}px);margin-bottom:-${svgHeigth}px`">
  <svg xmlns="http://www.w3.org/2000/svg" height="160" width="1365" version="1.1" viewBox="0 0 1365 159.99999">
    <path ref="svgPath" d="m149.03 0.0025254c-44.06 0.51846-93.895 14.039-149.03 51.661v108.33h666.58c-160.56-0.57-277.76-79.371-323.67-94.868-37.69-12.721-103.67-66.181-193.88-65.119zm1034.4 26.043c-78.192-0.0291-168.75 16.995-264.47 68.151-90.29 48.243-174.11 65.503-248.69 65.793h694.76v-102.89c-45.643-15.96-108.17-31.03-181.61-31.057z"/>
  </svg>
</div>
</template>

<style lang="scss">
.woonkly-top-divider-5 {
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
      this.svgHeigth = height
    }
  },
  mounted () {
    this.setHeigth()
    resizeListener(this.setHeigth)
  }
}
</script>
