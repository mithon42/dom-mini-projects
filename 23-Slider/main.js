const element = document.querySelectorAll('.element')

// let count = 1

// setInterval(() => {
//     count++
//     let currentElement = document.querySelector('.current')

//     currentElement.classList.remove('current')

//     if(count > element.length){
//         element[0].classList.add('current')
//         count = 1
//     } else{
//         currentElement.nextElementSibling.classList.add('current')
//     }

// }, 2200);







// let count = 1

// setInterval(() => {
//     count++
//     let currentElement = document.querySelector('.current')

//     currentElement.classList.remove('current')

//     if(count > element.length){
//         element[0].classList.add('current')
//         count = 1
//     } else{
//         currentElement.nextElementSibling.classList.add('current')
//     }

// }, 1000);






// let count = 1

// setInterval(() => {
//     count++
//     let currentElement = document.querySelector('.current')
//     currentElement.classList.remove('current')

//     if(count > element.length){
//         element[0].classList.add('current')
//         count = 1
//     } else{
//         currentElement.nextElementSibling.classList.add('current')
//     }
// }, 1000);




let count = 1

setInterval(() => {
    count++
    let currentElement = document.querySelector('.current')

    currentElement.classList.remove('current')
    if(count > element.length){
        element[0].classList.add('current')
        count = 1
    } else{
        currentElement.nextElementSibling.classList.add('current')
    }
}, 1000);