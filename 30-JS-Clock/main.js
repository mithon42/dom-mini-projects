function time() {
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(hour == '12') {
        var hr = 12
    } else if(hour == '24') {
        var hr = 0
    } else {
        var hr = hour % 12
    }

    if(hr < 10) {
        hr = "0" + hr
    }
    if(min < 10) {
        min = '0' + min
    }
    if(sec < 10) {
        sec = '0' + sec
    }

    let amPm = hour < 12? 'AM':'PM'
    let times = hr+ ":" + min + ":" + sec + " " + amPm

    document.getElementById('clock').innerHTML = times
}
setInterval(time, 1000)