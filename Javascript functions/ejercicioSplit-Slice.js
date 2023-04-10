/* Identificar si la palabra ingresada (target) está dentro de la frase (str) en la ultima palabra */

/* -----Mi primera solución------ */
function confirmEnding(str, target) {
    let answer =false;
    let everyWord = str.split(" ");
    let lastString = everyWord[everyWord.length-1];
    let lastLetter = lastString[lastString.length-1];
    let lastWord = str.slice(str.length - target.length);
    if (lastString === target || lastLetter === target || lastWord === target){
  answer = true;
    }
  
    return console.log(answer);
  }
  
confirmEnding("Hola como estás campeon", "eon");

/* -----solucion simple------ */

function confirmEnding(str, target) {
  
    return console.log(str.slice(str.length - target.length) === target);
  }
  
  confirmEnding("Hola como estás campeon", " campeon");