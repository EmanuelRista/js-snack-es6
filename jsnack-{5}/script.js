$(document).ready(() => {
let myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let userInput = [];

while( userInput.length < 2 ){
  let numberInput = parseInt(prompt(`Inserisci un numero tra 0 e ${myArray.length-1}`))
  if((numberInput < 0) || numberInput > myArray.length || isNaN(numberInput)){
    alert(`Attenzione: puoi scegliere solo tra 0 e ${myArray.length-1}`);
  } else{
    userInput.push(numberInput);
  }
}

function compareNumbers(a, b) {
  return a - b;
}

userInput.sort(compareNumbers);

const filteredArray = myArray.filter((el, index) => {
  return index >= userInput[0] && index <= userInput[1]
});

console.log(filteredArray);
})
