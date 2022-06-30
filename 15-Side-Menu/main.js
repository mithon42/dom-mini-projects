let toggleBtn = document.getElementById('toggleBtn')
let sideBar = document.getElementById('sideBarId')
let item1 = document.getElementById('item1')
let item2 = document.getElementById('item2')
let item3 = document.getElementById('item3')
let item4 = document.getElementById('item4')

toggleBtn.addEventListener('click', function(){
    sideBar.classList.toggle('close')
    item1.classList.toggle('itemClose')
    item2.classList.toggle('itemClose')
    item3.classList.toggle('itemClose')
    item4.classList.toggle('itemClose')

})