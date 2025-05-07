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