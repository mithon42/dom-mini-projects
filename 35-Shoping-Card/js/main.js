let plusBtn = document.getElementById('plus')
let minusBtn = document.getElementById('minus')
let countInput = document.getElementById('itemInput')
let price = document.getElementById('itemPrice')

let yourPrice = document.getElementById('yourPrice')
let charge = document.getElementById('charge')
let totalAmmount = document.getElementById('totalAmmount')


plusBtn.addEventListener('click', () => {
    let result = parseInt(price.innerHTML) + parseInt(yourPrice.innerHTML)
    let charges = parseInt(charge.innerHTML)

    if(countInput.value >= 5){
        countInput.value = 5
        alert('Only Five Product Allow')
    } else{
        countInput.value++
        yourPrice.innerHTML = result
        totalAmmount.innerHTML = result + charges
    }
})


