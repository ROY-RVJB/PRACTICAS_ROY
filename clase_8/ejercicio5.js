let a = prompt("Ingresa la primera cadena:");
let b = prompt("Ingresa la segunda cadena:");

let corta, larga;

if (a.length < b.length) {
  corta = a;
  larga = b;
} else {
  corta = b;
  larga = a;
}

let resultado = corta + larga + corta;
console.log(`Resultado: ${resultado}`);
