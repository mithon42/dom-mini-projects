

window.onload = () => {
  main()
}

function main(){
  let userTextInput = document.getElementById('user-text')
  let userNumberInput = document.getElementById('user-number')
  let btn = document.getElementById('btn')
  let display = document.getElementById('display')


  btn.addEventListener('click', function(){
    
    display.innerText = userTextInput.value
  })
}
