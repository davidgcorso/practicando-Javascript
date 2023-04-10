/* David González Corso Camada 3 */

/* Crear una función que reciba el array por parametro y retorne un nuevo array con los autos cuyo modelo sea mayor o igual a 2020.
 */

const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
]


    const modelo2020 = (arr) => {
        let newArray = []
        for (let i = 0; i < arr.length; i++) {
           if(arr[i].modelo >= 2020){
            newArray.push(arr[i])
           }
        }
        return newArray
    }

    let resultado1 = modelo2020(autos)
    console.log(resultado1)

   /*  Dado el siguiente array de objetos ordenarlo de forma descendente en base a la notaPromedio */

   let estudiantes = [
    {
        nombre: "juan",
        activo: true,
        notaPromedio: 5
    },
    {
        nombre: "maria",
        activo: false,
        notaPromedio: 3
    },
    {
        nombre: "florencia",
        activo: true,
        notaPromedio: 9
    },
    {
        nombre: "carlos",
        activo: false,
        notaPromedio: 8
    },
    {
        nombre: "jose",
        activo: true,
        notaPromedio: 6
    },
]

const ordenarPromedio = (arr) => {
    let aux;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
       
          if (arr[j].notaPromedio < arr[j + 1].notaPromedio) {
            aux = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = aux;
        }
      }
    }
  };
  
  ordenarPromedio(estudiantes);
  console.log(estudiantes);

/*   ----------------------------------------------------------------------------------------------------------------- */
let matrix = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]


  /* Crear una función que reciba por parámetros la matriz y la posición de una columna determinada.
La función debe retornar un arreglo con todos los elementos  de esa columna.
 */

const matrixSelection = (matrix, position) => {
    let matrixSelected = []
    for (let i = 0; i < matrix.length; i++) {     
            matrixSelected.push(matrix[i][position])
    }
    return matrixSelected
}
let resultado3a = matrixSelection(matrix, 2)
console.log(resultado3a)

/* Crear una función que reciba por parámetro la matriz y cambie todos los elementos impares de la matriz por un número 0 (cero) */
const changeOddNumbers = (matrix) => {
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
       if(matrix[i][j] % 2 != 0) {
        matrix[i][j] = 0
    }
}
}
}
changeOddNumbers(matrix);
  console.log(matrix);