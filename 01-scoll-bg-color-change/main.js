// var bgNavbar = document.getElementById('bg-navbar')

// window.onscroll = function(){
//     var scrollY = window.scrollY;
//     if(scrollY >= 100){
//         bgNavbar.classList.add('afterScrollNavbar')
//     } else {
//         bgNavbar.classList.remove('afterScrollNavbar')
//     }
// }



// let bgNavbar = document.getElementById('bg-navbar')

// window.onscroll = function (){
//     let scrollY = window.scrollY

//     if(scrollY >= 90){
//         bgNavbar.classList.add('afterScrollNavbar')
//     } else {
//         bgNavbar.classList.remove('afterScrollNavbar')
//     }
// }





// let bgColor = document.getElementById('bg-navbar')

// window.onscroll = function () {
//     let scrollY = window.scrollY

//     if(scrollY >= 100) {
//         bgColor.classList.add('afterScrollNavbar')
//     } else {
//         bgColor.classList.remove('afterScrollNavbar')
//     }
// }





const navbarBgColor = document.getElementById('bg-navbar')
const topBtnArea = document.getElementById('topBtnArea')
window.onscroll = () => {
    const scrollY = window.scrollY
    if(scrollY >= 150){
        navbarBgColor.classList.add('afterScrollNavbar')
        topBtnArea.classList.add('topBtnOpen')
    } else {
        navbarBgColor.classList.remove('afterScrollNavbar')
        topBtnArea.classList.remove('topBtnOpen')
    }

    if(scrollY >= 350){
        topBtnArea.classList.add('topBtnOpen')
    } else {
        topBtnArea.classList.remove('topBtnOpen')
    }
}