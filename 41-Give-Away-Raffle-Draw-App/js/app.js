/*
 * Date: 18-03-2022
 * Time: 11:50 PM
 * Author: Md. Mithon Islam
 * Description: Give Away Raffle Draw
*/

/** 
 * ToDo 1 - Extract text from text area and store it to an array
 * ToDo 2 - Render the names extracted from text area
 * ToDo 3 - Shuffle the names array for better result
 * ToDo 4 - Pick a random winner, Remove Him/Hir form the names array
 * ToDo 5 - Display Winners Name
*/

// Onload Function
window.onload = function (){
    const inputAllNames = document.getElementById('textareaName')
    const nameList = document.getElementById('name-list')
    const display = document.getElementById('display')
    const giveATryBtn = document.getElementById('give-a-try-btn')
    const firstPosition = document.getElementById('first-position')
    const secondPosition = document.getElementById('second-position')
    const thirdPosition = document.getElementById('third-position')
    const participantNames = []
    
    // Textarea input field
    inputAllNames.addEventListener('keypress', function(event){
        if (event.key === 'Enter'){
            let newNames = event.target.value.split(', ')
            if (newNames[0] !== ''){
                newNames.forEach(name => {
                    participantNames.push(name)
                    let item = createListItem(name)
                    nameList.appendChild(item)
                    event.target.value = ''
                })
            }
        }
    })

    // Give A try Button
    giveATryBtn.addEventListener('click', function(){
        if (participantNames.length === 0){
            alert('Please Name Entry')
        } else {
            let shuffleNames = Shuffle(participantNames)
            for(let i = 1; i < shuffleNames.length; i++){
                (function(i, count){
                    setTimeout(() =>{
                        let rand = Math.floor(Math.random() * (shuffleNames.length))
                        display.innerHTML = shuffleNames[rand]

                        if(count === shuffleNames.length - 1){
                            if(!firstPosition.innerHTML) {
                                firstPosition.innerHTML = shuffleNames[rand]
                                let ind = participantNames.indexOf(shuffleNames[rand])
                                participantNames.splice(ind, 1)
                            } else if(!secondPosition.innerHTML) {
                                secondPosition.innerHTML = shuffleNames[rand]
                                let ind = participantNames.indexOf(shuffleNames[rand])
                                participantNames.splice(ind, 1)
                            } else if(!thirdPosition.innerHTML) {
                                thirdPosition.innerHTML = shuffleNames[rand]
                                let ind = participantNames.indexOf(shuffleNames[rand])
                                participantNames.splice(ind, 1)
                            } else {
                                alert('Raffle Draw Already Completed')
                            }
                        }
                    }, i)
                })(i*100, i)
            }
        }
    })
}


// Create New Element
function createListItem(name){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = name

    return li
}

// Shuffle Array
function Shuffle(arr){
    let ShuffleArr = [...arr]

    for (let i = ShuffleArr.length - 1; i > 0; i--){
        let rand = Math.floor(Math.random() * (i + 1))
        let temp = ShuffleArr[rand]
        ShuffleArr[rand] = ShuffleArr[i]
        ShuffleArr[i] = temp
    }

    return ShuffleArr
}