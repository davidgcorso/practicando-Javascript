/* Convertir peliculas a mayusculas */

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let otrasPeliculas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

const mayusculas = (array1, array2) => {
    let arrayUnido = [...array1, ...array2];
    let resultado= [];
    for (let i=0; i<arrayUnido.length; i++) {
        resultado.push(arrayUnido[i].toUpperCase());
    }
    return resultado
}
let peliculaSobrante = otrasPeliculas.pop(); /* Acá se elimina fortnite porque no es una pelicula */
console.log (mayusculas(peliculas, otrasPeliculas))
/* Comparar si los scores de peliculas son iguales o no */
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const comparar = (arr1, arr2) => {
    respuesta = "";
for(let i = 0; i < arr1.length; i++) { 
    if (arr1[i] === arr2[i]) {
        respuesta = "Son iguales";
    } else {
        respuesta = "No son iguales";
    } 
    return respuesta;
}
}
console.log(comparar(asiaScores, euroScores));





