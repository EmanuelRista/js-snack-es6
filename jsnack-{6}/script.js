const randomLettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

const nuovoArray = arrayObj.map(el=> ({ ...el, position: randomLettere.charAt(Math.floor(Math.random() * randomLettere.length))}));

console.log(nuovoArray);
console.log(arrayObj);
