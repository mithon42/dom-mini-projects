// DOM References ==============>>
const hourSpan = document.getElementById('time-hours')
const minuteSpan = document.getElementById('time-minutes')
const secondSpan = document.getElementById('time-seconds')
let amPmSpan = document.getElementById('am-pm')
const darkMode = document.getElementById('darkMode')
const lightMode = document.getElementById('lightMode')
const clockAreaRoot = document.getElementById('clockAreaRoot')
const progress = document.getElementById('progress')

const audioSound = new Audio('./Amar_Babar_New.mp3')
audioSound.volume = 0.5



setInterval(updateAllTimeClock, 1000)

function updateAllTimeClock(){
  let currentDate = new Date()
  let currentHours = currentDate.getHours()
  let currentMinutes = currentDate.getMinutes()
  let currentSeconds = currentDate.getSeconds()

  currentHours = currentHours === '0' ? (currentHours = 12) : currentHours

  if(currentHours > 12){
    currentHours = currentHours - 12;
    amPmSpan.innerText = 'PM'
  }
  if(currentMinutes == 0){
    audioSound.play()
  }

  currentHours = currentHours < 10 ? '0' + currentHours : currentHours
  currentMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes
  currentSeconds = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds
  
  hourSpan.innerText = currentHours
  minuteSpan.innerText = currentMinutes
  secondSpan.innerText = currentSeconds

  progress.style.width = (currentSeconds / 60) * 100 + '%'
}
updateAllTimeClock()

darkMode.addEventListener('click', function(){
  if(clockAreaRoot){
    clockAreaRoot.classList.add('dark')
  }
})
lightMode.addEventListener('click', function(){
  if(clockAreaRoot){
    clockAreaRoot.classList.remove('dark')
  }
})
