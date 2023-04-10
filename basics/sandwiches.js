
/* ------Ejercicio "Local de sándwiches"------- */

let pollo = 150;
let carne = 200;
let veggie = 100;
let pan = {"Blanco c/orégano y parmesano": 50, "Negro c/avena": 60, "Sin gluten": 75};
let adicionales = {queso:20, tomate:15, lechuga:10, cebolla:15, mayonesa: 5, mostaza: 5, ninguno: 0};
const pedidoRestaurante = (base, tipoPan, adicional) => {
    baseElegida=0;
    panElegido=0;
    add=0;
switch (base) {
    case "pollo":
    baseElegida=pollo;
    case "carne":
    baseElegida=carne;
    case "veggie":
    baseElegida=veggie;
}
if (tipoPan ==="Blanco c/orégano y parmesano"){
    panElegido = pan["Blanco c/orégano y parmesano"];
} else if (tipoPan ==="Negro c/avena"){
    panElegido = pan["Negro c/avena"];
} else {
    panElegido = pan["sin gluten"];
}
if (adicional === "queso") {
    add = adicionales.queso;
} else if (adicional === "tomate"){
    add = adicionales.tomate;
} else if (adicional === "lechuga") {
    add = adicionales.lechuga;
} else if (adicional === "cebolla") {
    add = adicionales.cebolla;
} else if (adicional === "mayonesa") {
    add = adicionales.mayonesa;
} else if (adicional === "mostaza") {
    add = adicionales.mostaza;
} else {
    add = adicionales.ninguno;
}
return console.log(`Total a pagar: ${baseElegida + panElegido + add}`);
}

pedidoRestaurante("carne", "Negro c/avena", "mostaza");