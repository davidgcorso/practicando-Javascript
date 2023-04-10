/* 1. Crear una función que imprima todos los dígitos decimales, del 0 al 9,
usando un ciclo For. */

const floatGenerator = (length) => {
    for (let i = 0; i < length; i+=0.1) {
    console.log(i.toFixed(1))
    }
}
console.log(floatGenerator(9.0))

/* 2. Crear una función que imprima los números entre el 5 y el 20, saltando de
tres en tres. */
const jumper3000 = (start, end, jump) => {
    for (let i = start; i <= end; i+=jump) {
        console.log(i)
}}
console.log(jumper3000(5, 20, 3))

/* 3. Crear una función que imprima la sumatoria de todos los números entre el
0 y el 100. */

const sumAllNumbers = (start, end) => {
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i  
    }
    return result
}
console.log(sumAllNumbers(0, 100))

/* 4. Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase. */
const vowelCounter = (string) => {
    let counter = 0
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            counter += 1  
        } 
    }
    return counter
}
console.log(vowelCounter("david"))

/* 5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
contenido sea igual a la original pero invertida. */

let array = [1, 2, 3];

const invertedArray = (arr) => {
let invertedResult = []
for (let i = arr.length-1; i > -1; i--) {
    invertedResult.push(arr[i])  
}
return invertedResult
}
console.log(invertedArray(array))

/* 6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
forma :
1
22
333
4444
55555
666666 */

const pyramid = (n) => {
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += i;
      }
      string += "\n";
    }
    return string;
}
console.log(pyramid(30));