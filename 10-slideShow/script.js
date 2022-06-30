const slideShowElements = document.querySelectorAll('.slideShow-element')


let count = 1
setInterval(() => {
    count++
    let current = document.querySelector('active')

    current.classList.remove('active')

    if(count > slideShowElements.length){
        slideShowElements[0].classList.add('active')
    } else {
        current.nextElementSibling.classList.add('active')
    }
}, 1000)