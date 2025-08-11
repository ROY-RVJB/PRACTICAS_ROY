let productos =[
   {
    nombre:"iphone 15",
    precio:4500
   },
    {
    nombre:"Television 4k",
    precio:2350
   },
     {
    nombre:"laptop mac",
    precio:5600

   },
     {
    nombre:"antena wifi portatil",
    precio:4500
   },
     {
    nombre:"iphone 15",
    precio:4500
   },
     {
    nombre:"disco",
    precio:280
   },
     {
    nombre:"mouse inalambrico",
    precio:50
   },
     {
    nombre:"Placa madre intel",
    precio:1800
   },
     {
    nombre:"Procesador intel",
    precio:560
   },
]

/**let precioProductoIncremento=productos.map((precioProducto)=>{
    let precioFinal=precioProducto.precio*1.20;
    return precioFinal;
})
console.log("los precios son: ",precioProductoIncremento);


let precioCaro=productos.filter((precioProducto)=>{
    return precioProducto.precio>1500
})
console.log("LOS PRECIOS CAROS SON",precioCaro);

let articulosPrecio=productos.forEach((articulo=>{
    console.log(`${articulo.nombre} tiene el precio de ${articulo.precio}`)

}))
 */

//reduce
let sumaTotal=productos.reduce((suma,preArt)=>{
    return suma+preArt.precio;
},0);
console.log(sumaTotal);

let promedioTotal=productos.reduce((suma,preArt)=>{
     return suma+preArt.precio/productos.length
},0)
console.log(promedioTotal);
