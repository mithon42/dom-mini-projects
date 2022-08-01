let plusBtn = document.getElementById('plus')
let minusBtn = document.getElementById('minus')
let countInput = document.getElementById('countInput')

let price = document.getElementById('price')
let item = document.getElementById('item')

let ammount = document.getElementById('ammount')
let charge = document.getElementById('charge')
let totalAmmount = document.getElementById('totalAmmount')

/* Plus Button */
plusBtn.addEventListener('click', function(){
    let result = parseInt(price.innerHTML) + parseInt(item.innerHTML)
    let charges = parseInt(charge.innerHTML)
    if(countInput.value >= 5){
        countInput.value = 5
        alert('Only Five Product Allow')
    } else{
        countInput.value++
        item.innerHTML = result
        ammount.innerHTML = result
        totalAmmount.innerHTML = result + charges
    }
})

/* Minus Button */
minusBtn.addEventListener('click', function(){
    let result = parseInt(item.innerHTML) - parseInt(price.innerHTML)
    let charges = parseInt(charge.innerHTML)
    if(countInput.value <= 0){
        countInput.value = 0
    } else{
        countInput.value--
        item.innerHTML = result
        ammount.innerHTML = result
        var all = result - charges
        totalAmmount.innerHTML = all
        if(all <= 0){
            totalAmmount.innerHTML = '00'
        }
    }
})