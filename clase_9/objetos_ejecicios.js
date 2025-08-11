
/**let clubesFutbol=[
    {
        nombre:"Flamengo",
        pais:"brasil"
    },
    {
        nombre:"Cienciano",
        pais:"brasil"
    },
    {
        nombre:"Inter de Miami",
        pais:"brasil"
    },
    {
        nombre:"PSG",
        pais:"brasil"
    },
    {
        nombre:"Fuluminence",
        pais:"brasil"
    },
    {
        nombre:"Bayer",
        pais:"brasil"
    },
]
console.log(clubesFutbol);
console.log(clubesFutbol[3].nombre); */

/**let albumMusical ={
        agrupacion:"Grupo 5",
        nombre:"El ritmo de mi corazon",
        fecha:"30/06/2012",
        generos:["Cumbia,Salsa"],

        canciones:[
             {
                titulo:"El ritmo de mi corazon",
                duracion: 3.43,
                autore: ["Cristian Yaipen","Eva Allon","Dantes Cardoza"]
            },
            {
                titulo:"Motor y Motivo",
                duracion: 4.10,
                autore: ["Christian Yaipén"]
            },
            {
                titulo:"Te Vas",
                duracion: 3.55,
                autore: ["Elmer Yaipén","Roy"]
            },
            {
                titulo:"Cambio Mi Corazón",
                duracion: 3.30,
                autore: ["Christian Yaipén"]
            },
            {
                titulo:"Parranda La Negrita",
                duracion: 3.50,
                autore: ["Elmer Yaipén"]
            }
        ],
    produccion: {
        arreglos:["Elmer Yaipen","Andy Yaipen"],
        "direccion-general":"Elmer Yipen"

    }
    
}
console.log(albumMusical);
console.log(albumMusical.canciones[2].autore[0]) */

/**let productos=[
    {
        nombre:"chocolate",
        precio:30
    },
    {
        nombre:"arroz 5kg",
        precio:18
    },
    {
        nombre:"pasta dental",
        precio:12
    },
    {
        nombre:"frutos secos",
        precio:16
    },
    {
        nombre:"crema de habas-caja",
        precio:25
    },
    {
        nombre:"azucar 5kg",
        precio:21
    },
    {
        nombre:"caja de galletas",
        precio:17
    },
    
]

//productos mayores a 17
for(let i=0;i<productos.length;i++){


    if(productos[i].precio>17){
        console.log(productos[i].nombre);
    }
}
 */
let alumno=[
    {
        nombre:"joel",
        notas:[18,16,17]
    },
    {
        nombre:"Aleja",
        notas:[12,14,10]
    },
    {
        nombre:"Juan",
        notas:[13,12,9]
    },
    {
        nombre:"Maicol",
        notas:[11,12,10]
    },
    {
        nombre:"Dina",
        notas:[8,5,4]
    },
    {
        nombre:"Poldi",
        notas:[16,15,20]
    },
    {
        nombre:"Luan",
        notas:[16,18,25]
    },

]

// calcular de los alumnos nombre  y promedios
for(i=0;i<alumno.length;i++){
    
    let promedio=(alumno[i].notas[0]+alumno[i].notas[1]+alumno[i].notas[2])/3;
    console.log(alumno[i].nombre,promedio);
}