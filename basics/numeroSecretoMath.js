/* ------¿Cual es el número secreto?------ */

let secretNumber = Math.floor(Math.random() * (11 - 1)) + 1;

const guessTheNumber = (n) => {
return n ===secretNumber ? "¡Has descubierto el numero!" : "No has descubierto el numero ¡Sigue intentando!";
}

console.log(guessTheNumber(4));