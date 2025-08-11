console.log("a:",9==9)
console.log("c:",10==="10")
if(9===9){
    console.log("es verdadero")
}

let nombre ="Roy"
console.log("el nombre es",nombre)
console.log("la longitud del nombre es ",nombre.length)
console.log(typeof nombre.length)
if(nombre.length>0){
    console.log("es un nombre valido")
}

let numero1="20";
let numero2="20";
let total=parseInt(numero1)+parseInt(numero2);
console.log(total);
let anio =2025;
console.log("Año",anio.toString());

/* FUNCIONES */
function suma(a,b){

return a+b;

}
console.log("LA SUMA USANDO LA FUNCION suma(3,2) es: ",suma(3,2));
const decremento=function(a,b){
    return a-b;
}
console.log("LA RESTA USANDO decremento(8,3) es :", decremento(8,3));

