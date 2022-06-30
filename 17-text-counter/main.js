const MyTextArea = document.getElementById('my-textarea')
const remainingCharsText = document.getElementById('text-remaining-chars')
const MAX_CHARS = 250

MyTextArea.addEventListener('input', () => {
    const remaining = MAX_CHARS - MyTextArea.value.length
    const color = remaining < MAX_CHARS * 0.1 ? 'red' : null
    remainingCharsText.textContent = `${remaining} Remaining`
    remainingCharsText.style.color = color;
    
})

