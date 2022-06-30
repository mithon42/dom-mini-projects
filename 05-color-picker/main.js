let hexNumber = document.getElementById('hexNumber')
let color = document.getElementById('color')
let learn = document.getElementById('learn')



color.addEventListener('input', function(){
    let inputColor = color.value
    hexNumber.value = inputColor
    learn.style.color = inputColor
})