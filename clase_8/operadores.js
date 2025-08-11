let monitor=400;
let memoria=200;
let cp=300;
let total=monitor+memoria+cp;
console.log("El total de la compra es:", total);

let adicional=50+20;
console.log("El total de la compra con adicionales es:",adicional);

let descuento=25;
let precioDescuento=total-descuento;
console.log("El total de la compra con descuento es:", precioDescuento);
let cuotas=precioDescuento/2;
console.log("El total de la compra en cuotas es:", cuotas);

let totalPorDos=precioDescuento*2;
console.log("El total de la compra *2 es:", totalPorDos);

let ganancia=1.15;
let precioFinal=(precioDescuento+ adicional) +ganancia;
console.log("El precio final de la compra es:", precioFinal);

let modulo=1000%300;
console.log("MODULO", modulo);
let a=10;
a+=5;
console.log("a:",a);
let b=20;
b=b+5;
console.log("b:",b);
let c=30;
//c=c-1;
c-=1;
console.log("c:",c);
let d=40;
d-=7;
console.log("d:",d);

//concatenación
let nombre="Roy";
let apellido="ccorimanya"
let saludo="Hola, " + nombre;
console.log(saludo);

let nom=20;
let num1="10";
let totalNum=nom+num1;
console.log("Total de la suma:", totalNum); // Esto dará "2010" porque num1 es un string

//concatenar con tempalate strings
//${JAVASCRIPT,variable,etc}
//`` backticks o llamadas comillas invertidas
let despedida=`nos vemos ${nombre} ${apellido} asta luego ya tienes ${10+10} añitos`;

console.log(despedida);