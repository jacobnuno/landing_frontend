export function counter (TIME) {
  var timeOutId = setTimeout(() => {
    console.log('COUNTER ALMOST WORKING')
  }, 1000)

  console.log(timeOutId)
}
