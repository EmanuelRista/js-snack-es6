const bici = [
  {
    "nome": "Grazia",
    "peso": 10
  },
  {
    "nome": "Graziella",
    "peso": 20
  },
  {
    "nome": "immaginalo",
    "peso": 5
  },
  {
    "nome": "pippo",
    "peso": 15
  }
];
console.log(bici);

let bicileggera = bici[0];
for (let i = 1; i < bici.length; i++) {
  if (bici[i].peso < bicileggera.peso) {
    bicileggera = bici[i];
  }
};

console.log(bicileggera);
