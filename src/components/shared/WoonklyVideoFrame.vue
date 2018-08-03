<template lang="html">
  <div id="woonkly-video-with-frame">
    <svg ref="videoFrame" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="video-frame-gradient" y2="907.89435" spreadMethod="repeat" gradientUnits="userSpaceOnUse" x2="630.78711" gradientTransform="translate(-8.5349999e-6,4.8618241e-6)" y1="-8.2679825" x1="631.29315">
          <stop stop-color="#41199f" offset="0"/>
          <stop stop-color="#09073a" offset="1"/>
        </linearGradient>
      </defs>
      <path style="paint-order:normal" d="m38.653555-0.000015138176c-21.413738 0-38.653567 15.892914-38.653567 35.634464v686.84506c0 19.74155 17.239829 35.63445 38.653567 35.63445h452.07146l-1.44517 13.3739s-3.94808 37.30454-12.0037 53.97222c-16.24786 19.99832-36.87182 35.94076-54.51512 54.68221-18.01934 15.72489-2.49011 16.02408 12.20398 18.01067 10.71026 1.21061 21.52924 0.98097 32.29188 1.23847 111.39134 0.56713 222.79608 1.04754 334.18376-0.0541 12.5921-0.54832 36.80504 1.96315 35.82271-13.23628 0 0-42.70924-39.31442-62.0682-60.84066-8.12545-21.02256-10.33968-44.83038-13.09797-67.1447h399.24932c21.4137 0 38.6535-15.8929 38.6535-35.63445v-686.84505c0-19.74155-17.2398-35.634458-38.6535-35.634458zm-2.24011 33.508524h1128.7849v615.95901h-1128.7849z" fill="url(#video-frame-gradient)"/>
      <rect ref="innerRect" style="paint-order:normal" height="615.95898" width="1128.7849" y="33.508511" x="36.413445" fill="none"/>
    </svg>
    <div id="woonkly-video-container"></div>
  </div>
</template>

<script>
import { resizeListener } from '@/components/wavy-dividers/utils'

let player

export default {
  name: 'WoonklyVideoFrame',
  methods: {
    videoContainerStyles () {
      let { width } = this.$refs.innerRect.getBoundingClientRect()
      let height = (width / 16) * 9
      return { height, width }
    },
    setVideoContainerStyle () {
      let videoFrame = document.getElementById('woonkly-video-container')
      let { height, width } = this.videoContainerStyles()
      videoFrame.height = height
      videoFrame.width = width
    },
    loadYoutubeScript () {
      var tag = document.createElement('script')
      tag.src = "https://www.youtube.com/player_api"
      var firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    },
    declareYoutubeReadyFunction () {
      window.onYouTubePlayerAPIReady = () => {
        let { width } = this.$refs.innerRect.getBoundingClientRect()
        let height = (width / 16) * 9
        player = new YT.Player('woonkly-video-container', {
          width,
          height,
          videoId: '2GIoPWmm3zI',
          events: {
            'onReady': function (event) {
              event.target.mute()
            }
          },
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            enablejsapi: 1
          }
        })
      }
    }
  },
  mounted () {
    // Declare the function to be executed when youtube is loaded
    this.declareYoutubeReadyFunction()
    // Load youtube api
    this.loadYoutubeScript()
    // On window resize we resize the video container
    resizeListener(this.setVideoContainerStyle)
  }
}
</script>

<style lang="scss">
#woonkly-video-with-frame {
  position: relative;
  z-index: 100;
  #woonkly-video-container {
    position: absolute;
    left: 3.2%;
    top: 3.5%;
  }
}
</style>
