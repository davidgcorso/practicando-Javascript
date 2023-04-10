
/*------David González Corso------*/

/* Ejercicio 1: 
Realizar una función llamada restarPares que reciba por parámetro dos valores numéricos. 
Si ambos números recibidos son pares entonces se deberá retornar el resultado de restarle al primer parámetro el segundo. 
Si alguno o los dos no son pares , se deberá retornar un string que diga “Lo siento, uno o mas parámetros no cumple con la condición de ser un número par” */

const restarPares = (n1, n2) => {
    
if(n1 % 2 == 0 && n2 % 2 == 0){
 return n1 - n2;
} else {
 return "Lo siento, uno o mas parámetros no cumplen con la condición de ser un número par";
}
}
let ejercicio1 = restarPares(14, 20);
console.log(ejercicio1);

/* Ejercicio 2:
Debemos poder controlar el acceso a un recital de música para una determinada persona. Para eso, debemos realizar una función  que reciba dos parámetros
La edad de la persona, Number
Si tiene o no, el ticket de entrada , booleano
La función deberá evaluar las siguientes condiciones y retornar en cada caso lo que se pida:
Si tiene entrada y es mayor o igual de 18 años: retorna un valor booleano true.
Si tiene entrada pero es menor de 18 años: retorna un string que diga “Sólo puedes acceder con un adulto acompañante”.
Si no tiene entrada: retorna un booleano false. */

const accesoRecital = (edad, ticket) => {
    if(ticket && edad >= 18) {
        return true;
    }else if(ticket && edad < 18){
        return "Sólo puedes acceder con un adulto acompañante";
    }else if(ticket === false){
        return false;
    }
}
let ejercicio2 = accesoRecital(16,true);
console.log(ejercicio2);

/* Ejercicio 3:
Realizar una función que reciba un array como parámetro, y lo recorra para filtrar los productos que sean de tipo “tecnologia” y que su precio sea mayor o igual a 50000, la función deberá retornar un nuevo arreglo con los productos que cumplan con las condiciones antes mencionadas. */

let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },
   
];

const arrayFilter = (arr) => {
let newArray = [];
for (let i = 0; i < arr.length; i++) {
    if( arr[i].tipo === "tecnologia" && arr[i].precio >= 50000){
        newArray.push(arr[i]);
}}
return newArray;  
}

let ejercicio3 = arrayFilter(productos);
console.log(ejercicio3);



