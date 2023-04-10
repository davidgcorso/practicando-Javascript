/* Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—. */

let concurso = [23, 45, 65, 8907, 50459, 0, 545429,3]

const winner = (arr)=>{

    let cajita = undefined

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length - 1; j++){ 
          
              if( arr[j] > arr[j + 1] ){ 
                 
                  cajita = arr[j]
                  arr[j] = arr[j + 1]
                  arr[j + 1] = cajita

                }

        }

    }
return `El ganador obtuvo ${arr[arr.length-1]} likes, el segundo obtuvo ${arr[arr.length-2]} likes, el tercero obtuvo ${arr[arr.length-3]} y por ultimo, el que obtuvo menos likes logró ${arr[0]} likes.`
}

console.log(winner(concurso))
console.table(concurso)

/* Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor. */

let controlTemperatura = [
    {dia: 1,
    mes:1,
    "temperatura maxima": 35,
    "temperatura minima": 20},
    {dia: 1,
    mes:2,
    "temperatura maxima": 24,
    "temperatura minima": 10},
    {dia: 1,
    mes:3,
    "temperatura maxima": 40,
    "temperatura minima": 25},
    {dia: 1,
    mes:4,
    "temperatura maxima": 12,
    "temperatura minima": 6}
]

const ordenar = (arr, ascdesc)=>{

    let cajita = undefined

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length - 1; j++){ 
          if(ascdesc === "minima"){

              if( arr[j]["temperatura minima"] > arr[j + 1]["temperatura minima"] ){ 
                  cajita = arr[j]
                  arr[j] = arr[j + 1]
                  arr[j + 1] = cajita

                }

            }else if( ascdesc === "maxima"){

                if( arr[j]["temperatura maxima"] < arr[j + 1]["temperatura maxima"] ){ 
                    cajita = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = cajita

                }
            }

        }

    }

}

ordenar(controlTemperatura, "minima")
console.table(controlTemperatura)