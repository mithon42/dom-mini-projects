const timesEl = document.getElementById('time')
const progressEl = document.getElementById('progress-bar')

function updateTime(){
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  if(hour == '12') {
    var hours = 12
  } else if(hour == '24') {
      var hours = 0
  } else {
    var hours = hour % 12
  }

  if(hours < 10) {
    hours = "0" + hours
  }
  if(minute < 10){
    minute = "0" + minute
  }
  if(second < 10){
    second = "0" + second
  }

  let amPm = hour < 12? 'AM':'PM'
  let times = `${hours} : ${minute} : ${second} ${amPm}`
  timesEl.innerText = times
  progressEl.style.width = (second / 60) * 100 + '%'
}

updateTime()
setInterval(updateTime, 1000)