const galletas = {
    marca: "Artiach",
    nombre: "Chiquilín",
    descripción: "galletas de mantequilla",
    precio: 2.75,
    hayExistencias: true
    }

const productoDiv = document.getElementById("producto");

function mostrarObjeto(){
    let propiedades = "";
    for (let key in galletas) {
        propiedades += key + ": " + galletas[key] + ", ";
    }
    // Quitar la última coma y espacio
    propiedades = propiedades.slice(0, -2);
    const resultado = document.createElement("p");
    resultado.textContent= propiedades;
    productoDiv.appendChild(resultado);
}
function anadirOferta(){
    galletas.oferta = true;
    mostrarObjeto(galletas);
}
function modificar(){
    galletas.descripción ="galletas de mantequilla y azúcar";
    mostrarObjeto(galletas);
}
function borrar(){
    delete galletas.oferta;
    mostrarObjeto(galletas);
}
function mostrarValores(){
    let propiedades = "";
    for (let key in galletas) {
        propiedades += galletas[key] + ", ";
    }
    // Quitar la última coma y espacio
    propiedades = propiedades.slice(0, -2);
    const resultado = document.createElement("p");
    resultado.textContent= propiedades;
    productoDiv.appendChild(resultado);
}
function mostrarPropiedades(){
    let propiedades = "";
    for (let key in galletas) {
        propiedades += key + ", ";
    }
    // Quitar la última coma y espacio
    propiedades = propiedades.slice(0, -2);
    const resultado = document.createElement("p");
    resultado.textContent= propiedades;
    productoDiv.appendChild(resultado);
}