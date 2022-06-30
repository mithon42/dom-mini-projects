const hexInput = document.getElementById('hex-input')
const decimalInput = document.getElementById('decimal-input')
const binaryInput = document.getElementById('binary-input')
const octalInput = document.getElementById('octal-input')

const resetBtn = document.getElementById('reset-btn')


// Reset Button
resetBtn.addEventListener('click', function(){
  document.getElementById('hex-input').value = ''
  document.getElementById('decimal-input').value = ''
  document.getElementById('octal-input').value = ''
  document.getElementById('binary-input').value = ''
})



hexInput.addEventListener('keyup', function(event){
  const hexNumber = event.target.value
  if(hexNumber){
    this.value = hexNumber.toUpperCase()
    if(isValidHexNumber(hexNumber)){
      realTimeUpdateAllDom(hexNumber)
    }
  }
})



function realTimeUpdateAllDom(number){
  const decimalNumbers = hexToDecimalNumber(number)
  const octalNumbers = hexToDecimalNumber(number)
  const binaryNumbers = hexToDecimalNumber(number)

  document.getElementById('decimal-input').value = decimalNumbers
  document.getElementById('octal-input').value = octalNumbers
  document.getElementById('binary-input').value = binaryNumbers
}




/**
 * Convert Hex Number To Decimal Number String
 * @param {string} hex
 * @returns {string}
 */
 function hexToDecimalNumber(hex){
  const red = parseInt(hex.slice(0, 2), 16)
  const green = parseInt(hex.slice(2, 4), 16)
  const blue = parseInt(hex.slice(4), 16)

  return `${red}${green}${blue}`
}


/**
 * @param {string} color;
 * @returns {boolean}
 */
 function isValidHexNumber(hexNumber){
  if(hexNumber.length !== 6) return false
  return /^[0-9A-Fa-f]{6}$/i.test(hexNumber)
}