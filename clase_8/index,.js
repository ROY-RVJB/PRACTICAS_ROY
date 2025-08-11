// =====================================
// INTRODUCCIÓN A VARIABLES EN JAVASCRIPT
// =====================================

console.log("¡Hola mundo!");

// =====================================
// STRINGS (CADENAS DE TEXTO)
// =====================================

// Utilizando camelCase para nombres de variables
// No se utilizan tildes ni diéresis en nombres de variables
let nombre = "roy";
console.log("El nombre es:", nombre);

let apellido = "panique";
console.log("El apellido es:", apellido);

let apellido2 = "achiri";
console.log("El segundo apellido es:", apellido2);

// =====================================
// NUMBERS (NÚMEROS)
// =====================================

let edad = 22;
console.log("La edad es:", edad);
console.log("Tipo de dato de edad:", typeof edad);

let precioTv = 1200;
console.log("El precio de la TV es:", precioTv);

// =====================================
// BOOLEAN (VERDADERO/FALSO)
// =====================================

let meQueroCasar = false;
console.log("¿Me quiero casar?:", meQueroCasar);
console.log("Tipo de dato:", typeof meQueroCasar);

// =====================================
// UNDEFINED (INDEFINIDO)
// =====================================

let porDefinir;
console.log("Variable por definir:", porDefinir);
console.log("Tipo de dato indefinido:", typeof porDefinir);

// =====================================
// NULL (NULO)
// =====================================

let nulo = null;
console.log("Variable nula:", nulo);
console.log("Tipo de dato nulo:", typeof nulo);

// =====================================
// NOTA SOBRE VAR vs LET
// =====================================

/* 
Diferencias entre VAR y LET:
- VAR tiene scope de función
- LET tiene scope de bloque
- VAR permite re-declaración
- LET no permite re-declaración en el mismo scope
*/

let age =2025;
console.log("Año1:", age);

let age1 =2026;
console.log("Año1:", age1);

let age2 =2027;
console.log("Año1:", age2);


