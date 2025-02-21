// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosSorteo = [];
let amigoSorteado = '';

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    let listaAmigos = document.getElementById('listaAmigos');
if(amigo.trim()!== ''){
    let addAmigo = document.createElement('li');
    addAmigo.textContent= amigo;
    listaAmigosSorteo.push(amigo);
    listaAmigos.appendChild(addAmigo);
    document.getElementById('amigo').value = "";
} else{
    alert('Error, No dejar en blanco');
}

}

function sortearAmigo() {
 if(amigoSorteado.length > 0){
    let resultado = document.getElementById('resultado');
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
 }
    let contadorAmigosSortear = listaAmigosSorteo.length;
    let numeroGenerado =  Math.floor(Math.random()*contadorAmigosSortear)+1;
    numeroGenerado -= 1;

    amigoSorteado = listaAmigosSorteo[numeroGenerado];
    let resultado = document.getElementById('resultado');
    // let listaAmigos = document.getElementById('listaAmigos');
    document.getElementById('listaAmigos').value = "";

    let addResultado = document.createElement('li');
    addResultado.textContent= amigoSorteado;
    resultado.appendChild(addResultado);

    if( listaAmigosSorteo ){
        let listaAmigos = document.getElementById('listaAmigos');
        while (listaAmigos.firstChild) {
            listaAmigos.removeChild(listaAmigos.firstChild);
        }
    }
}