let modal = document.getElementById('modal')
let close = document.getElementById('close')
let open = document.getElementById('open')




// open.addEventListener('click', function(){
//     modal.style.opacity = '1'
//     modal.style.transition = '.6s'
// })
// close.addEventListener('click', function(){
//     modal.style.opacity = '0'
//     modal.style.transition = '.6s'
// })




// Short Cut
function openClose(modal, btn, Opacity){
    btn.addEventListener('click', function(){
        modal.style.opacity = Opacity
        modal.style.transition = '.6s'
    })
}
openClose(modal, open, '1')
openClose(modal, close, '0')