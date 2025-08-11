let base1 = parseFloat(prompt("Base del primer triángulo:"));
let altura1 = parseFloat(prompt("Altura del primer triángulo:"));
let base2 = parseFloat(prompt("Base del segundo triángulo:"));
let altura2 = parseFloat(prompt("Altura del segundo triángulo:"));

let area1 = (base1 * altura1) / 2;
let area2 = (base2 * altura2) / 2;

console.log(`Área del primer triángulo: ${area1}`);
console.log(`Área del segundo triángulo: ${area2}`);

if (area1 > area2) {
  console.log("El primer triángulo tiene el área más grande.");
} else if (area2 > area1) {
  console.log("El segundo triángulo tiene el área más grande.");
} else {
  console.log("Ambos triángulos tienen la misma área.");
}
