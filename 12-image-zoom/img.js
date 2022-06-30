let mainImg = document.getElementById('mainImg')
// let Images = document.querySelectorAll('images')
let Images1 = document.getElementById('images1')
let Images2 = document.getElementById('images2')
let Images3 = document.getElementById('images3')
let Images4 = document.getElementById('images4')
let Images5 = document.getElementById('images5')
let Images6 = document.getElementById('images6')
let Images7 = document.getElementById('images7')



// Images1.addEventListener('click', function(){
//     mainImg.src = Images1.src
// })
// Images2.addEventListener('click', function(){
//     mainImg.src = Images2.src
// })
// Images3.addEventListener('click', function(){
//     mainImg.src = Images3.src
// })
// Images4.addEventListener('click', function(){
//     mainImg.src = Images4.src
// })
// Images5.addEventListener('click', function(){
//     mainImg.src = Images5.src
// })
// Images6.addEventListener('click', function(){
//     mainImg.src = Images6.src
// })
// Images7.addEventListener('click', function(){
//     mainImg.src = Images7.src
// })


Images(Images1)
Images(Images2)
Images(Images3)
Images(Images4)
Images(Images5)
Images(Images6)
Images(Images7)

function Images(imagesItem){
    imagesItem.addEventListener('click', function(){
        mainImg.src = imagesItem.src
    })
}
