const addButton = document.getElementById('addBtn')
const olItem = document.getElementById('olItem')

addButton.addEventListener('click', function() {
    const input = document.getElementById('input')
    const inputValue = input.value
    const text = document.createTextNode(inputValue)
    const newLiItem = document.createElement('li')

    newLiItem.appendChild(text)
    olItem.appendChild(newLiItem)

    input.value = "" // Input Field Clear
})