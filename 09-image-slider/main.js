
let image = document.getElementById('image')
var allImage = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg']




let countIndex = 0

function myImagesChange(){
    countIndex++
    if(countIndex >= allImage.length){
        countIndex = 0
        image.src = allImage[countIndex]
    } else{
        image.src = allImage[countIndex]
    }

    setTimeout('myImagesChange', 1000)
}

window.onload = myImagesChange()
