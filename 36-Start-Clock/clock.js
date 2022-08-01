var saveButton = document.getElementById('startBtn')
var message = document.getElementById('message')

saveButton.addEventListener('click', startClock)

function startClock(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let time = hours + ":" + minutes + ":" + seconds

    message.textContent = time

    setInterval(startClock, 1000)

}

// startClock()