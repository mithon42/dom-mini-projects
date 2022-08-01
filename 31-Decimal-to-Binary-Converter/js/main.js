// // Selecting DOM
// const submit = document.getElementById('submit');
// const result = document.getElementById('result');

// // Function
// function binary(e) {
//   e.preventDefault();
//   const num = document.getElementById('number').value;
//   console.log(typeof num);
//   // Input validation
//   if (num === '') {
//     alert('Please enter a number');
//   } else if (num < 0) {
//     alert('Please enter a positive number');
//   } else {
//     result.style.visibility = 'visible';
//   }

//   //Converting to Binary
//   let binary = Number(num).toString(2);
//   result.innerHTML = binary;
// }

// // Event Listener
// submit.addEventListener('click', binary);




const submit = document.getElementById('submit');
const result = document.getElementById('result');

function binary(e) {
  e.preventDefault()

  const num = document.getElementById('number').value

  if(num === '') {
    alert('Please Enetr A Number')
  } else if (num < 0) {
    alert('Please Enetr a Project Number')
  } else {
    result.style.visibility = 'visible'
  }
  // Converting
  binaryNumber = Number(num).toString(2)
  result.innerText = binaryNumber
}

submit.addEventListener('click', binary)