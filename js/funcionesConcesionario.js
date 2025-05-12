class Coche {
    constructor(marca, modelo, potencia, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia; // en caballos de fuerza (CV)
        this.precio = precio; // en euros
    }
    }
const concesionario = [
    new Coche("Toyota", "Corolla", 132, 20000),
    new Coche("Honda", "Civic", 158, 22000),
    new Coche("Ford", "Focus", 150, 21000),
    new Coche("Volkswagen", "Golf", 115, 23000),
    new Coche("BMW", "Serie 3", 184, 35000),
    new Coche("Audi", "A3", 150, 33000),
    new Coche("Mercedes-Benz", "Clase C", 170, 40000)
];

function mostrarDatos() {
    const atributo = document.getElementById("atributo").value;
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // limpiar resultados

    // Crear una tabla para mostrar los datos
    const tabla = document.createElement("table");
    tabla.border = "1"; // Opcional: para que la tabla tenga bordes visibles

    // Definir los encabezados y las propiedades correspondientes
    const encabezados = {
        "marca": "Marca",
        "modelo": "Modelo",
        "potencia": "Potencia (CV)",
        "precio": "Precio (€)"
    };

    // Crear fila de encabezados
    const cabecera = document.createElement("tr");

    // Si la opción es "todos", poner todos los encabezados
    if (atributo === "todos") {
        for (const key in encabezados) {
            const th = document.createElement("th");
            th.innerText = encabezados[key];
            cabecera.appendChild(th);
        }
        tabla.appendChild(cabecera);

        // Agregar fila por cada coche con todos los atributos
        concesionario.forEach(coche => {
            const fila = document.createElement("tr");
            for (const key in encabezados) {
                const celda = document.createElement("td");
                celda.innerText = coche[key];
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        });
    } else {
        // Crear encabezado con la columna seleccionada
        const th = document.createElement("th");
        th.innerText = encabezados[atributo];
        cabecera.appendChild(th);
        tabla.appendChild(cabecera);

        // Mostrar solo el atributo seleccionado
        concesionario.forEach(coche => {
            const fila = document.createElement("tr");
            const celda = document.createElement("td");
            celda.innerText = coche[atributo];
            fila.appendChild(celda);
            tabla.appendChild(fila);
        });
    }

    resultadosDiv.appendChild(tabla);
}
