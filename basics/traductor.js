/* ------Traductor condicional------ */

let array = ["Dog", "Ball", "Tree", "Genius"];

const traductor = (palabra) => {
    let translate= "";
switch (palabra) {
    case "perro":
        translate =  `Perro: ${array[0]}`;
        break;
    case "pelota":
        translate = `Pelota: ${array[1]}`;
        break;
    case "arbol":
        translate = `Arbol: ${array[2]}`;
        break;
    case "genio":
        translate = `Genio: ${array[3]}`;
        break;
    default:
        translate = "la palabra ingresada no se encuentra en el diccionario."
}
return console.log(translate);
}

traductor("perro");
traductor("pinguino");