
let item = document.querySelectorAll('a')
let currentLocation = location.href

for(let i = 0; i < item.length; i++){

    if(item[i].href === currentLocation){
        item[i].className = 'active'
    }
}
