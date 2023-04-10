/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */
/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */
let matrix = [
            [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5]
            ]
const matrixSum = (mat) =>{
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
      
        for (let j = 0; j < mat[i].length; j++) {
           sum += mat[i][j]
        }
       
    }
    return sum
}

console.log(matrixSum(matrix));

/* 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10 */

/* 
*/
   
const matrixGenerate = (col,row) =>{    
  let array = [];
  let add = 0;    
for (let i = 0; i < row; i++) {
    array[i] = [];
   for(let j = 0; j < col; j++){
    add += 1;
    array[i].push(add)
   }   
}
return array
}
console.log(matrixGenerate(10,10));

let matrix10x10 = matrixGenerate(10,10);
/* 3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. */

const diagonalOpuesta = mat =>{
    let acc = 0
    for (let i = 0; i < mat.length; i++) {
        acc += (mat[i][mat.length - i - 1]);
    }
    return acc
}

let sumaSecundaria = diagonalOpuesta(matrix10x10)
console.log(sumaSecundaria);

const diagonalOpuesta2 = mat =>{
    let acc = 0
    for (let i = 0; i < mat.length; i++) {
        acc += (mat[i][i]);
    }
    return acc
}

let sumaPrimaria = diagonalOpuesta2(matrix10x10)
console.log(sumaPrimaria);