var tittle = document.getElementById('tittle')

var on = document.getElementById('on')
var off = document.getElementById('off')

// Light On
on.addEventListener('click', function(){
    document.getElementById('image1').src = './img/on.png'
    document.getElementById('image2').src = './img/on.png'
    tittle.innerText = 'Light On'
    tittle.style.color = 'green'
    on.style.backgroundColor = 'green'
    off.style.backgroundColor = 'gray'
})
// Light Off
off.addEventListener('click', function(){
    document.getElementById('image1').src = './img/off.png'
    document.getElementById('image2').src = './img/off.png'
    tittle.innerText = 'Light Off'
    tittle.style.color = 'red'
    off.style.backgroundColor = 'red'
    on.style.backgroundColor = 'gray'
})