// DOM References
const bgSize = document.getElementById('bg-size')
const bgRepeat = document.getElementById('bg-repeat')
const bgPosition = document.getElementById('bg-position')
const bgAttachment = document.getElementById('bg-attachment')


// Window Onload
window.onload = () => {
  main()
}


// Main Function
function main(){
  const imagesDisplay = document.getElementById('imagesDisplay')
  const imagesFileInput = document.getElementById('imagesFileInput')
  const imagesFileInputBtn = document.getElementById('imagesFileInputBtn')
  const removeBtn = document.getElementById('RemoveBtn')
  const imagesController = document.getElementById('imgController')
 

  // ############## Event Listener #############
  // Images Upload / File Input Button
  imagesFileInputBtn.addEventListener('click', function(){
    imagesFileInput.click()
  })

  // Images Input / Changes Listener
  imagesFileInput.addEventListener('change', function(event){
    const file = event.target.files[0]
    const imagesUrl = URL.createObjectURL(file)

    imagesDisplay.style.background = `url(${imagesUrl})`
    document.body.style.background = `url(${imagesUrl})`
    removeBtn.style.display = 'inline'
    imagesController.style.display = 'block'
  })

  // Remove / Delete Listener
  removeBtn.addEventListener('click', function(){
    imagesDisplay.style.background = `#FFFFFF`
    document.body.style.background = `#faebd7`
    removeBtn.style.display = 'none'
    imagesController.style.display = 'none'
    imagesFileInput.value = null
  })

  // Background Change / Update Listener
  bgSize.addEventListener('change', updateBackgroundPreferences)
  bgRepeat.addEventListener('change', updateBackgroundPreferences)
  bgPosition.addEventListener('change', updateBackgroundPreferences)
  bgAttachment.addEventListener('change', updateBackgroundPreferences)
}


// ######### Background Preferences Update Function ##########
function updateBackgroundPreferences(){
  document.body.style.backgroundSize = bgSize.value
  document.body.style.backgroundRepeat = bgRepeat.value
  document.body.style.backgroundPosition = bgPosition.value
  document.body.style.backgroundAttachment = bgAttachment.value
}