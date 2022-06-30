
const copySound = new Audio('./copy-sound.wav')

const defaultPresetColors = [
  '#dddeee', '#ff00ff', '#000333', '#d0d0d0', '#fff000', '#333333', '#ff0000', '#d1d1d1', '#dddddd', '#303030', '#d3e303', '#00ff00', '#838383', '#afd0f1', '#d3f0e5',
  '#b3e7ff', '#b3e700', '#b1e7d0', '#05deff', '#919191'
]

window.onload = () => {
  main()
  displayColorBoxes(document.getElementById('box-pants') , defaultPresetColors)
}


// Main Or Boot Function, this function will take care of getting all the DOM references
function main(){
  const presetColorsParent = document.getElementById('box-pants')

  presetColorsParent.addEventListener('click', handlePresetColorParent)
  presetColorsParent.addEventListener('mouseover', handlePresetColorShow)
}

// ############ Event Handles ##############
function handlePresetColorParent(event){
  const child = event.target
  if(child.className === 'color-box'){
    navigator.clipboard.writeText(child.getAttribute('data-color'))
    copySound.volume = 0.5
    copySound.play()
  }
}
function handlePresetColorShow(event){
  const child = event.target
  const display = document.getElementById('show-color')
  if(child.className === 'color-box'){
    display.style.display = 'inline'
    display.style.backgroundColor = child.getAttribute('data-color')
    display.innerText = child.getAttribute('data-color')
  }
}


/**
 * Create a div element with class name color-box
 * @param {string} color 
 * @returns {object}
 */
function generateColorBox(color){
  color = color.toUpperCase()
  const div = document.createElement('div')
  div.className = 'color-box'
  div.style.backgroundColor = color
  div.setAttribute('data-color', color)
  div.title = `Copy to Clipboard "${color}" Color`

  return div
}

/**
 * This function will create and  append new color boxes to tit's parent
 * @param {object} parent 
 * @param {Array} colors
 */
function displayColorBoxes(parent, colors){
  colors.forEach((color) => {
    const colorBox = generateColorBox(color)
    parent.appendChild(colorBox)
  })
}