const galletas = {
    marca: "Artiach",
    nombre: "Chiquilín",
    descripción: "galletas de mantequilla",
    precio: 2.75,
    hayExistencias: true
    }

const productoDiv = document.getElementById("producto");

function mostrarObjeto(){
    const producto = galletas.marca + ", " + galletas.nombre + ", " + galletas.descripción + ", " +  galletas.precio + " €."; 
    const resultado = document.createElement("p");
    resultado.textContent= producto;

    productoDiv.appendChild(resultado);
}