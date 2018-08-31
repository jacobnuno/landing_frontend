let intervalId

var calculateTimeLeft = function (endTimestamp, updateFunction) {
  var remaining = 0
  var diff = 0
  var timer = { d:0, h:0, m:0, s:0 }

  diff = endTimestamp - Date.now()

  timer.d = Math.floor(diff / 86400000)
  remaining = diff % 86400000
  timer.h = Math.floor(remaining / 3600000)
  remaining = remaining % 3600000
  timer.m = Math.floor(remaining / 60000)
  remaining = remaining % 60000
  timer.s = Math.floor(remaining / 1000)
  updateFunction(timer)
}

export function determineCurrentMessage (messagesArray, endMessage) {
  let messageToReturn = null

  for (let i = 0; i < messagesArray.length; i++) {
    if (messagesArray[i].date >= Date.now()) {
      return messagesArray[i].message
    }
  }

  return endMessage
}

export function startTimer (stepTimes, updateFunction) {
  var selectedDate = 0
  
  if (stepTimes[stepTimes.length-1] < Date.now()) {
    console.log('The timer has no more dates to diplay')
    return false
  } 
  
  for(let i = 0; i < stepTimes.length; i++) {
    if (stepTimes[i] > Date.now()) {
      selectedDate = stepTimes[i]
      break
    }
  }
  
  intervalId = setInterval(calculateTimeLeft, 1000, selectedDate, updateFunction)
}

export function cleanTimerInterval () {
  clearInterval(intervalId)
}