var stopBtn = document.getElementById('stop')
var startBtn = document.getElementById('start')
var carImg = document.getElementById('car')


var carStart
let m = 0

startBtn.addEventListener('click', function(){
    carStart = setInterval(run, 100)

    function run(){
        if(m == 1090){
            clearInterval(carStart)
            m = 0
        } else{
            m += 10
            carImg.style.marginLeft = m + 'px'
            carImg.style.transition = .4 +'s'
            console.log(m);
        }
    }
})

stopBtn.addEventListener('click', function(){
    clearInterval(carStart)
})









// function run(){
//     m += 5
//     carImg.style.marginLeft = m +'px'
//     console.log(m);
// }


