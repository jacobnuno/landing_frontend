import moment from 'moment'

let intervalId = null

export function counter (setTime) {
  // TODO: Make this function to work with more time steps
  let endTimestamp = 1538352000
  let startTimestamp = null

  intervalId = setInterval(function () {
    startTimestamp = moment.utc().unix()
    let timeLeft = moment.duration((endTimestamp - startTimestamp), 'seconds')

    if (setTime) {
      setTime({
        days: Math.floor(timeLeft.days()),
        hours: Math.floor(timeLeft.hours()),
        minutes: Math.floor(timeLeft.minutes()),
        seconds: Math.floor(timeLeft.seconds())
      })
    } else {
      console.log(`D: ${Math.floor(timeLeft.asDays())}, H: ${Math.floor(timeLeft.hours())}, M: ${Math.floor(timeLeft.hours())}, S: ${Math.floor(timeLeft.hours())}`)
    }
  }, 1000)
}

export function cleanInterval () {
  clearInterval(intervalId)
}
