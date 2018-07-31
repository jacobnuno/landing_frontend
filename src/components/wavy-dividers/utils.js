import { throttle } from 'lodash'

export function resizeListener (callback) {
  window.addEventListener('resize', throttle(function () {
    callback()
  }, 500))
}
