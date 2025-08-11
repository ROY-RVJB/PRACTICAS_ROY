let catalogo = [50, 20, 10, 100, 30, 10];
let presupuesto = parseInt(prompt("Ingresa tu presupuesto:"));
let totalGastado = 0;
let seleccionados = [];

for (let i = 0; i < catalogo.length; i++) {


    
    if (totalGastado + catalogo[i] <= presupuesto) {
        totalGastado += catalogo[i];
        seleccionados.push(catalogo[i]);
    }
}

console.log("Productos seleccionados:", seleccionados);
console.log("Total gastado:", totalGastado);
