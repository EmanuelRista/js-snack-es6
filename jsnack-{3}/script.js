const funzioneIpotenusa = (altezza, base) => (altezza ** 2 + base ** 2) ** 0.5;

const triangolo = {
  "base": 10,
  "altezza": 15,
  "ipotenusa": function () {
    return funzioneIpotenusa(this.altezza, this.base);
  },

  "area": function() {
    return (this.base * this.altezza) / 2;
  },
  "perimetro": function() {
    return this.base + altezza + this.ipotenusa();
  }
};

let base = triangolo.base;
let altezza = triangolo.altezza;

const area = triangolo. area();
const perimetro = triangolo.perimetro();
const ipotenusa = triangolo.ipotenusa();

console.log("Base = " + triangolo.base);
console.log("Altezza = " + triangolo.altezza);
console.log("Ipotenusa = " + ipotenusa);
console.log("Area = " + area);
console.log("Perimetro = " + triangolo.perimetro());
