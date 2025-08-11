let inputProducto = document.getElementById('idProducto');
let btnAgregar = document.getElementById('btnAgregar');
let ulProductos = document.querySelector('.Productos');

let listProductos = [];


function obtenerProductos() {
    return inputProducto.value.trim(); 
}


function dibujarProductos() {
    let htmlProductos = "";
    listProductos.forEach(function(item) {
        htmlProductos += `<li>${item}</li>`;
    });
    ulProductos.innerHTML = htmlProductos;
}

function guardarProductos() {
    let listaProductosJSON = JSON.stringify(listProductos);
    localStorage.setItem("lista", listaProductosJSON);
}

function cargarProductos() {
    let productosGuardados = localStorage.getItem("lista");
    if (productosGuardados) {
        listProductos = JSON.parse(productosGuardados);
        dibujarProductos();
    }
}

btnAgregar.addEventListener('click', function () {
    let textoObtenido = obtenerProductos();

    if (textoObtenido !== "") {
        console.log("Texto obtenido:", textoObtenido);
        listProductos.push(textoObtenido);
        console.table(listProductos);
        guardarProductos();
        dibujarProductos();
        inputProducto.value = ""; 
    } else {
        alert("Por favor ingresa un producto válido.");
    }
});


cargarProductos();
