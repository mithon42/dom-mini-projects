// Copy Text
var copyText = document.getElementById('copyText')
var copyBtn = document.getElementById('copyBtn')

copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(copyText.innerText)
})


// Cutting Text
var cutText = document.getElementById('cutText')
var cutBtn = document.getElementById('cutBtn')

cutBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(cutText.innerText)
})

// Paste
var paste = document.getElementById('paste')
var pasteBtn = document.getElementById('pasteBtn')

pasteBtn.addEventListener('click', function(){
    // paste.value = ''
    // navigator.clipboard.readText()
    // .then(function(text){
    //     paste.value = text
    // })
})

// pasteBtn.addEventListener('click', function(){
//     navigator.clipboard.readText()
//     .then(function(text){
//         paste.value = text
//     })
// })