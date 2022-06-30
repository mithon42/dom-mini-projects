
const number = document.getElementById('number')
number.addEventListener('input', function(){

    if(number.value.length > 11 || number.value.length < 11){
        number.style.color = 'red'
        number.style.backgroundColor = 'white'
    } else{
        number.style.color = 'white'
        number.style.backgroundColor = 'green'
    }
})