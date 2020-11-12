const squadre = [];
let name = "nome";
let team = "squadra";

for (let i = 0; i < 5; i++) {

  let promptUser = prompt(`Inserisci il ${name} di una ${team}.`);

  const squadra = {
    "nome": promptUser,
    "punti": Math.floor((Math.random() * 6)),
    "falli": Math.floor((Math.random() * 6))
  }

  squadre.push(squadra);
};

console.log(squadre);
