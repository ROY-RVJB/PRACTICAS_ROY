const autos = [
  {marca: 'BMW', modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
  {marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
  {marca: 'Ford', modelo: 'Mustang', year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
  {marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
  {marca: 'BMW', modelo: 'Serie 5', year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
  {marca: 'Mercedes Benz', modelo: 'Clase C', year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
  {marca: 'Chevrolet', modelo: 'Camaro', year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
  {marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
  {marca: 'Dodge', modelo: 'Challenger', year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
  {marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
  {marca: 'Dodge', modelo: 'Challenger', year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
  {marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
  {marca: 'BMW', modelo: 'Serie 5', year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
  {marca: 'Ford', modelo: 'Mustang', year: 2016, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
  {marca: 'Dodge', modelo: 'Challenger', year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
  {marca: 'BMW', modelo: 'Serie 3', year: 2018, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
  {marca: 'Mercedes Benz', modelo: 'Clase C', year: 2019, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
  {marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];
console.log(autos)

//ejercicio 1
const autosMayor2012 = autos.filter(auto => auto.year > 2012);
console.log(autosMayor2012);
//ejercicio 2
const autosEntre2015y2018 = autos.filter(auto => auto.year >= 2015 && auto.year <= 2018);
console.log(autosEntre2015y2018);
//ejercicio 3
const autosClaseC = autos.filter(auto => auto.modelo === 'Clase C');
console.log(autosClaseC);
//ejercicio 4
const audiPost2012 = autos.filter(auto => auto.marca === 'Audi' && auto.year > 2012);
console.log(audiPost2012);

function sumaTotal(suma,auto){
    return suma+auto.precio;
}
//ejercicio 5 estaba qrepetido con la anteriorq
const promedioPrecios = autos.reduce((sum, auto) => sum + auto.precio, 0) / autos.length;
console.log(`Promedio total de precios: ${promedioPrecios.toFixed(2)}`);

//ejercicio 6
const autosManuales = autos.filter(auto => auto.transmision === '
    
    
    7');
const promedioManual = autosManuales.reduce((sum, auto) => sum + auto.precio, 0) / autosManuales.length;
console.log(`Promedio de precios (transmisión manual): ${promedioManual.toFixed(2)}`);
//ejercicio 7
const autosCaros = autos.filter(auto => auto.precio > 45000);
console.log(autosCaros);

