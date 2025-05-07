const ordenador ={
    marca : "HP",
    processador: "i7",
    ram: "16Gb",
    hd: "1Tb",
    precio: "1500",
    extras: ["camara HD", "microfono stereo", "disco de acceso rápido"],
    maletín: true

}

const componentesDiv = document.getElementById("componentes");

// Escribir la frase requerida:

function frase(){
    const frase = "Mi ordenador es un " + ordenador.marca + ", con procesador " +ordenador.processador+" y con " + ordenador.ram + " de ram."
    const fraseMostrar = document.createElement("p");
    fraseMostrar.textContent=frase;

    if(componentesDiv){
        componentesDiv.appendChild(fraseMostrar);

    }else{
        console.error("Error, no se encontrarón características");
    }
}

function recorrer(){
    const listaValores = document.createElement("ul");

    for (const key in ordenador){
        if (ordenador.hasOwnProperty(key)){
            let valor = ordenador[key];
            if(Array.isArray(valor)){
                valor = valor.join(", ");
            }
            if(typeof valor === "boolean"){
                valor = valor ? "Si" : "No";
            }
            const li = document.createElement("li");
            li.textContent = key + ": " + valor;
            listaValores.appendChild(li);
        }
    }
    componentesDiv.appendChild(listaValores);
}
function tercerExtra(){
    const tercerExtra = ordenador.extras[2];
    const extraMostrar = document.createElement("p");
    extraMostrar.textContent = "El tercer extra del ordenador es: " + tercerExtra; 
    componentesDiv.appendChild(extraMostrar);
}