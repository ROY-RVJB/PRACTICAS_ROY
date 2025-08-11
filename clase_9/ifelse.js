let edad=prompt("ingresar edad");
let edadNum=parseInt(edad);

let estaAcompahado=confirm("Esta acompañado por un adulto");
if(edadNum>60){
    console.log("tiene descuento en bebidas y trago en 10%");

}else if(edadNum>=30&&edadNum<=60){
    console.log("tiene derecho a una chelita")
    
}else if(edadNum>=18&&edadNum<30){
console.log("puedes ingresar!! ")
}else if(edadNum<18&&estaAcompahado===true){
 console.log("puede pasar")
}else{
    console.log("no puede pasar")
}