// Select DOM Elements
var number1 = document.getElementById('number1')
var number2 = document.getElementById('number2')
var number3 = document.getElementById('number3')

// project
var count = 0
var project = setInterval(project, 10)

function project(){
    count++
    number1.innerHTML = count
    if(count === 200){
        clearInterval(project)
    }
}


// Client
var count2 = 0
var Client = setInterval(Client, 10)

function Client(){
    count2++
    number2.innerHTML = count2
    if(count2 === 250){
        clearInterval(Client)
    }
}

// Amount
var count3 = 0
var amount = setInterval(amount, 10)

function amount(){
    count3++
    number3.innerHTML = count3
    if(count3 === 300){
        clearInterval(amount)
    }
}



